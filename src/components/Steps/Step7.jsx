import React, { useState } from "react";
import {
  HostHomeStepCmp,
  HostHomeStepText,
  useStyles,
  BackStyledButton,
  NextStyledButton,
} from "../HostHomeStep.jsx";
import styled from "styled-components";
import Dropzone from "../Dropzone.jsx";

const HouseImages = styled.div`
  grid-column-start: ${(props) => (props.index === 0 ? 1 : null)};
  grid-column-end: ${(props) => (props.index === 0 ? 4 : null)};
  height: ${(props) => (props.index === 0 ? "37.5vw" : "12.5vw")};
  margin: 5px;
  margin-bottom: ${(props) => (props.index === 0 ? "10px" : null)};
  box-shadow: 0px 0px 10px 1px rgba(93, 120, 148, 1);
  padding: 5px;
  border-radius: ${(props) => (props.index === 0 ? "10px" : "6px")};
`;

export default function Step7(props) {
  const classes = useStyles();
  const [images, setImages] = useState([]);

  return (
    <HostHomeStepCmp>
      <HostHomeStepText>
        <h2 style={{marginBottom: 10}}>Add a photo to your ad</h2>
        <h3 style={{marginBottom: 10}}>Photos help guests imagine how it is</h3>
        <h4 style={{marginBottom: 10}}>STEP {props.step}</h4>
        <Dropzone validFiles={images} setValidFiles={setImages} />
        {images.length > 0 ? (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr",
              maxWidth: 900,
              margin: "0 auto"
            }}
          >
            {images.map((item, index) => {
              return (
                <HouseImages key={item.name} index={index}>
                  <img
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      borderRadius: "5px",
                    }}
                    src={URL.createObjectURL(item)}
                    alt=""
                    key={item}
                  />
                </HouseImages>
              );
            })}
          </div>
        ) : null}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "80%",
            margin: "15px auto 100px auto",
          }}
        >
          <BackStyledButton
            variant="outlined"
            color="primary"
            className={classes.button}
            onClick={() => {
              props.setStep(props.step - 1);
            }}
          >
            BACK
          </BackStyledButton>
          <NextStyledButton
            variant="contained"
            color="primary"
            className={classes.button}
            onClick={() => {
              props.setStep(props.step + 1);
              // props.setOption(
              //   ["city", "district", "guests"],
              //   [city, district, guests]
              // );
            }}
          >
            NEXT
          </NextStyledButton>
        </div>
      </HostHomeStepText>
    </HostHomeStepCmp>
  );
}
