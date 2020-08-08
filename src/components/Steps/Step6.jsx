import React from "react";
import {  
  FormGroup,
  FormControlLabel,
  Checkbox,
} from "@material-ui/core";
import {
    HostHomeStepCmp,
    HostHomeStepText,
    BackStyledButton,
    NextStyledButton,
  } from "../HostHomeStep";
  

export default function Step6(props) {
    return   (
        <HostHomeStepCmp>
          <HostHomeStepText>
            <div style={{ marginBottom: 15 }}>
              <FormGroup>
                <h2 style={{ color: "#364F6B", marginBottom: 15 }}>
                  Please choose the amenities
                </h2>
                <h4 style={{ marginBottom: 15 }}>STEP {props.step}</h4>
                {[
                  "Essentials",
                  "WiFi",
                  "TV",
                  "Heat",
                  "Air conditioning",
                  "Breakfast, coffee, tea",
                  "Game console",
                  "Fireplace",
                  "Workspace",
                ].map((label) => {
                  return (
                    <FormControlLabel
                      style={{
                        margin: "0px auto 0 auto",
                        color: "#364f6b",
                        width: "200px",
                      }}
                      control={
                        <Checkbox color="primary" style={{ color: "#364f6b" }} />
                      }
                      label={label}
                      key={label}
                    />
                  );
                })}
              </FormGroup>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "60%",
                margin: "15px auto 0 auto",
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