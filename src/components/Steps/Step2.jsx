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

export default function Step2(props) {
  return (
    <HostHomeStepCmp>
      <HostHomeStepText>
        <h2 style={{ color: "#364f6b" }}>Choose a property type</h2>
        <h4 style={{ marginTop: 10 }}>STEP {props.step}</h4>
        <form
          style={{
            display: "flex",
            flex: 1,
            flexDirection: "column",
          }}
        >
          <FormControl required>
            <InputLabel>Select one</InputLabel>
            <Select
              value={props.house}
              onChange={(e) => props.setHouse(e.target.value)}
              style={{ color: "#364f6b" }}
            >
              <MenuItem value="apartments">Apartment</MenuItem>
              <MenuItem value="vacationRentals">Vacatiom Rentals</MenuItem>
              <MenuItem value="sharedRooms">Shared room</MenuItem>
            </Select>
            <FormHelperText>Required</FormHelperText>
          </FormControl>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: 20,
              marginBottom: 100,
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
                props.setOption(
                  ["house"],
                  [props.house]
                );
              }}
            >
              NEXT
            </NextStyledButton>
          </div>
        </form>
      </HostHomeStepText>
    </HostHomeStepCmp>
  );
}
