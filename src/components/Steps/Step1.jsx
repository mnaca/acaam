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
import styled from "styled-components";

  const StyledMenuItem=styled(MenuItem)`
  font-size: 0.9vw
  `;


  export default function Step1(props) {
      return  (
        <HostHomeStepCmp>
          <HostHomeStepText>
            <h3 style={{ marginTop: "0.52vw" }}>
              Hi, {props.user ? props.user.email : "Stranger"}! You're welcome in our
              travelling site. Let's get started
            </h3>
            <h4 style={{ marginTop: "0.52vw" }}>STEP {props.step}</h4>
            <h2 style={{ marginTop: "0.52vw" }}>What kind of place do you have?</h2>
            <form style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gridColumnGap: "1.04vw"}}>
              <FormControl required >
                <InputLabel style={{fontSize: "0.9vw"}}>City</InputLabel>
                <Select
                  value={props.city}
                  onChange={(e) => props.setCity(e.target.value)}
                  style={{ color: "#364f6b" }}
                >
                  <MenuItem value="yerevan">Yerevan</MenuItem>
                </Select>
                <FormHelperText style={{fontSize: "0.9vw"}}>Required</FormHelperText>
              </FormControl>
              <FormControl required >
                <InputLabel style={{fontSize: "0.9vw"}}>District</InputLabel>
                <Select
                  value={props.district}
                  onChange={(e) => props.setDistrict(e.target.value)}
                >
                  <StyledMenuItem value="arabkir"  >Arabkir</StyledMenuItem>
                  <StyledMenuItem value="bangladesh" >HAT</StyledMenuItem>
                  <StyledMenuItem value="shengavit" >Shengavit</StyledMenuItem>
                  <StyledMenuItem value="ajapnyak" >Ajapnyak</StyledMenuItem>
                  <StyledMenuItem value="Avan" >Avan</StyledMenuItem>
                  <StyledMenuItem value="Nor Norq" >Nor Norq</StyledMenuItem>
                  <StyledMenuItem value="Dzrvej" >Dzrvej</StyledMenuItem>
                  <StyledMenuItem value="Qanaqer-Zeytun" >Qanaqer-Zeytun</StyledMenuItem>
                </Select>
                <FormHelperText style={{fontSize: "0.9vw"}}>Required</FormHelperText>
              </FormControl>
              <FormControl required >
                <InputLabel style={{fontSize: "0.9vw"}}>Guests</InputLabel>
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
                <FormHelperText style={{fontSize: "0.9vw"}}>Required</FormHelperText>
              </FormControl>
              <div
                style={{
                  display: "flex",
                  gridColumnStart: 1,
                  gridColumnEnd: 4,
                  justifyContent: "space-between",
                  marginTop: "1.04vw",
                  marginBottom: "5.208vw",
                  fontSize: "0.9vw"
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