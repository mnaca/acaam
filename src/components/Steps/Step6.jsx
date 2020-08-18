import React from "react";
import { FormGroup, FormControlLabel, Checkbox } from "@material-ui/core";
import {
  HostHomeStepCmp,
  HostHomeStepText,
  BackStyledButton,
  NextStyledButton,
} from "../HostHomeStep";

export default function Step6(props) {
  return (
    <HostHomeStepCmp>
      <HostHomeStepText>
        <div style={{ marginBottom: "0.78125vw" }}>
          <FormGroup>
            <h2 style={{ color: "#364F6B", marginBottom: "0.78125vw" }}>
              Please choose the amenities
            </h2>
            <h4 style={{ marginBottom: 15 }}>STEP {props.step}</h4>
            {[
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
                    width: "10.416vw",
                  }}
                  control={
                    <Checkbox
                      color="primary"
                      style={{ color: "#364f6b" }}
                      value={props.amenities[label] ? props.amenities[label] : false}
                      checked={props.amenities[label] ? props.amenities[label] : false}
                      onChange={(e) => {
                        props.amenities[label] = e.target.checked;
                        props.setAmenities({ ...props.amenities });
                      }}
                    />
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
            margin: "0.78125vw auto 5.208vw auto",
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
              props.setOption(["amenities"], [props.amenities]);
            }}
          >
            NEXT
          </NextStyledButton>
        </div>
      </HostHomeStepText>
    </HostHomeStepCmp>
  );
}
