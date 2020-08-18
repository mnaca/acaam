import React from "react";
import {
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  FormHelperText,
 } from "@material-ui/core";
import {
    HostHomeStepCmp,
    HostHomeStepText,
    BackStyledButton,
    NextStyledButton,
  } from "../HostHomeStep";


  export default function Step1(props) {
      return  (
        <HostHomeStepCmp>
          <HostHomeStepText>
            <h3 style={{ marginTop: 10 }}>
              Hi, {props.user ? props.user.email : "Stranger"}! You're welcome in our
              travelling site. Let's get started
            </h3>
            <h4 style={{ marginTop: 10 }}>STEP {props.step}</h4>
            <h2 style={{ marginTop: 12 }}>What kind of place do you have?</h2>
            <form style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gridColumnGap: "20px"}}>
              <FormControl required >
                <InputLabel>City</InputLabel>
                <Select
                  value={props.city}
                  onChange={(e) => props.setCity(e.target.value)}
                  style={{ color: "#364f6b" }}
                >
                  <MenuItem value="yerevan">Yerevan</MenuItem>
                </Select>
                <FormHelperText>Required</FormHelperText>
              </FormControl>
              <FormControl required >
                <InputLabel>District</InputLabel>
                <Select
                  value={props.district}
                  onChange={(e) => props.setDistrict(e.target.value)}
                >
                  <MenuItem value="arabkir">Arabkir</MenuItem>
                  <MenuItem value="bangladesh">Bangladesh</MenuItem>
                  <MenuItem value="shengavit">Shengavit</MenuItem>
                  <MenuItem value="ajapnyak">Ajapnyak</MenuItem>
                </Select>
                <FormHelperText>Required</FormHelperText>
              </FormControl>
              <FormControl required >
                <InputLabel>Guests</InputLabel>
                <Select
                  value={props.guests}
                  onChange={(e) => props.setGuests(e.target.value)}
                  style={{ color: "#364f6b" }}
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((guestsNumber) => (
                    <MenuItem key={guestsNumber} value={guestsNumber}>
                      for {guestsNumber} guests
                    </MenuItem>
                  ))}
                </Select>
                <FormHelperText>Required</FormHelperText>
              </FormControl>
              <div
                style={{
                  display: "flex",
                  gridColumnStart: 1,
                  gridColumnEnd: 4,
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
                      ["city", "district", "guests"],
                      [props.city, props.district, props.guests]
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