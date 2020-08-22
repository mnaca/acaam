import React, { useState } from "react";
import HostHomeStep from "./HostHomeStep";
import styled from "styled-components";
import { useParams } from "react-router";
import { useEffect } from "react";
import { db } from "../firebase";

const Progress = styled.div`
  position: relative;
  height: 0.2604vw;
  background-color: rgba(54, 79, 107, 0.3);
  &::after {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: ${(props) => `${(props.step / 9) * 100}%`};
    background-color: #364f6b;
  }
`;

export default function HostHome(props) {
  let { edit, homeId, homeType } = useParams();
  if (homeType === "rentals") homeType = "vacationRentals";
  else if (homeType === "rooms") homeType = "sharedRooms";
  if (edit === "create") edit = false;
  else edit = true;
  const [step, setStep] = useState(1);
  const [options] = useState({});
  const setOption = (keys, values) => {
    for (let i = 0; i < keys.length; i++) {
      options[keys[i]] = values[i];
    }
  };
  const [home, setHome] = useState(null);

  useEffect(() => {
    if (edit) {
      db.collection("offers")
        .doc(homeType)
        .collection("homes")
        .doc(homeId)
        .get()
        .then((doc) => {
          setHome(doc.data());
        });
    }
  }, [homeId, edit, homeType]);

  return (
    <>
      <Progress step={step}></Progress>
      <HostHomeStep
        step={step}
        edit={edit}
        options={home ? home : options}
        setOption={setOption}
        setStep={setStep}
      />
    </>
  );
}
