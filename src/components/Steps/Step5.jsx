import React from "react";
import {
  HostHomeStepCmp,
  HostHomeStepText,
  PlusMinusButton,
  BackStyledButton,
  NextStyledButton,
  Bedroom,
} from "../HostHomeStep";

export default function Step5(props) {
  if (props.bedroomsOptions.length === 0) {
    props.setBedroomsOptions(new Array(props.bedrooms).fill(1));
  } else {
    if (props.bedroomsOptions.length > props.bedrooms) {
      props.setBedroomsOptions(props.bedroomsOptions.slice(0, props.bedrooms));
    } else if (props.bedroomsOptions.length < props.bedrooms) {
      props.setBedroomsOptions([...props.bedroomsOptions].concat(new Array(props.bedrooms - props.bedroomsOptions.length).fill(1)));
    }
  }
  return (
    <HostHomeStepCmp>
      <HostHomeStepText>
        <h2>Sleeping arrangements</h2>
        <h4 style={{ marginTop: "0.78125vw" }}>STEP {props.step}</h4>
        <h3 style={{ marginTop: "0.52vw" }}>
          Sharing the types of beds in each room can help people understand the
          sleeping arrangements.
        </h3>
        <div style={{ marginTop: "1.04vw" }}>
          {new Array(props.bedrooms).fill(null).map((item, index) => {
            return (
              <Bedroom style={{}} key={index}>
                <h4 style={{ marginRight: "1.04vw" }}>Bedroom {index + 1}</h4>
                <div>
                  <PlusMinusButton
                    variant="outlined"
                    color="primary"
                    onClick={() => {
                      if (props.bedroomsOptions[index] >= 2) {
                        props.bedroomsOptions[index]--;
                        props.setBedroomsOptions([...props.bedroomsOptions]);
                      }
                    }}
                  >
                    -
                  </PlusMinusButton>
                  <div style={{ margin: "0 0.78125vw", display: "inline-block" }}>
                    {props.bedroomsOptions[index]} beds
                  </div>
                  <PlusMinusButton
                    variant="outlined"
                    color="primary"
                    onClick={() => {
                      props.bedroomsOptions[index]++;
                      props.setBedroomsOptions([...props.bedroomsOptions]);
                    }}
                  >
                    +
                  </PlusMinusButton>
                </div>
              </Bedroom>
            );
          })}
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "1.302vw",
            marginBottom: "5.208vw",
          }}
        >
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
              props.setOption(["bedrooms-options"], [props.bedroomsOptions])
            }}
          >
            NEXT
          </NextStyledButton>
        </div>
      </HostHomeStepText>
    </HostHomeStepCmp>
  );
}
