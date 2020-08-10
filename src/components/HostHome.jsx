import React, { useState } from "react";
import HostHomeStep from "./HostHomeStep";
import styled from "styled-components";

const Progress = styled.div`
  position: relative;
  height: 5px;
  background-color: rgba(54, 79, 107, 0.3);
  &::after {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: ${(props) => `${(props.step / 10) * 100}%`};
    background-color: #364f6b;
  }
`;

export default function HostHome(props) {
  const [step, setStep] = useState(1);
  const [options] = useState({});
  const setOption = (keys, values) => {
    for (let i = 0; i < keys.length; i++) {
      options[keys[i]] = values[i];
    }
  };

  return (
    <>
      <Progress step={step}></Progress>
      <HostHomeStep step={step} setOption={setOption} setStep={setStep} />
    </>
  );
}
