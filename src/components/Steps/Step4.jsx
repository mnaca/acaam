import React from "react";
import {
  MenuItem,
  InputLabel,
  FormControl,
  FormHelperText,
  Select,
 } from "@material-ui/core";
import {
    HostHomeStepCmp,
    HostHomeStepText,
    BackStyledButton,
    NextStyledButton,
  } from "../HostHomeStep";
 
 
  export default function Step4(props) {
      return (
        <HostHomeStepCmp>
        <HostHomeStepText>
          <h2 style={{ marginTop: 10 }}>
            How many guests can your place accommodate?
          </h2>
          <h4 style={{ marginTop: 10 }}>STEP {props.step}</h4>
          <h3 style={{ marginTop: 10 }}>
            Check that you have enough beds to accommodate all your guests
            comfortably.
          </h3>
          <div style={{ marginTop: 10 }}>
            <h4>How many bedrooms can guests use?</h4>
            <FormControl
              style={{ minWidth: "100%" }}
              required
            >
              <InputLabel>Bedrooms</InputLabel>
              <Select
                style={{ width: "100%", color: "#364f6b" }}
                value={props.bedrooms}
                onChange={(e) => props.setBedrooms(e.target.value)}
            >
                {new Array(50)
                  .fill(null)
                  .map((item, index) => index + 1)
                  .map((bedrooms) => (
                    <MenuItem key={bedrooms} value={bedrooms}>
                      {bedrooms} bedrooms
                    </MenuItem>
                  ))}
              </Select>
              <FormHelperText>Required</FormHelperText>
            </FormControl>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
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
               }}
            >
              NEXT
            </NextStyledButton>
          </div>
        </HostHomeStepText>
      </HostHomeStepCmp>
      )
  }