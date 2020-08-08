import React from "react";
import {
    HostHomeStepCmp,
    HostHomeStepText,
    PlusMinusButton,
    BackStyledButton,
    NextStyledButton,
  } from "../HostHomeStep";

 
  export default function Step3(props) {
   return (
        <HostHomeStepCmp>
          <HostHomeStepText>
            <h2>How many bathrooms do you want?</h2>
            <h4 style={{ marginTop: 10 }}>STEP {props.step}</h4>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "20px 0",
              }}
            >
              <PlusMinusButton
                variant="outlined"
                color="primary"
                onClick={() =>
                  props.bathrooms >= 1 ? props.setBathrooms(props.bathrooms - 1) : null
                }
              >
                -
              </PlusMinusButton>
              <div
                style={{
                  display: "inline-block",
                  margin: "0 70px",
                  color: "#364f6b",
                }}
              >
                {props.bathrooms}
              </div>
              <PlusMinusButton
                variant="outlined"
                color="primary"
                onClick={() =>
                  props.bathrooms < 9 ? props.setBathrooms(props.bathrooms + 1) : null
                }
              >
                +
              </PlusMinusButton>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <BackStyledButton
                variant="outlined"
                color="primary"
                onClick={() => {
                  props.setStep(props.step - 1);
                }}
              >
                BACK
              </BackStyledButton>
              <NextStyledButton
                variant="contained"
                color="primary"
                onClick={() => {
                  props.setStep(props.step + 1);
                  props.setOption(["bathrooms"], [props.bathrooms]);
                }}
              >
                NEXT
              </NextStyledButton>
            </div>
          </HostHomeStepText>
        </HostHomeStepCmp>
      );
  }