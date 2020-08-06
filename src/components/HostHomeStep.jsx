import React, { useState } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import {
  Select,
  MenuItem,
  InputLabel,
  makeStyles,
  FormControl,
  FormHelperText,
  Button,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));
const HostHomeStepCmp = styled.div`
  padding: 0 100px;
  margin-top: 50px;
`;

const StyledButton = styled(Button)`
  width: 125px;
  color: #364f6b !important;
`;

const NextStyledButton = styled(Button)`
  background-color: #364f6b !important;
  width: 125px;
`;

const BackStyledButton = styled(StyledButton)`
  border: 1px solid #364f6b !important;
  margin-right: 15px !important; 
`;

const HostHomeStepText = styled.div`
  color: #364f6b;
`;

export default function HostHomeStep(props) {
  let returnedJSX = null;
  const classes = useStyles();
  const user = useSelector((state) => state.user);
  const [house, setHouse] = useState("");
  const [city, setCity] = useState("");
  const [district, setDistrict] = useState("");
  const [guests, setGuests] = useState("");

  if (props.step === 1) {
    returnedJSX = (
      <HostHomeStepCmp>
        <HostHomeStepText>
          <h3 style={{ marginTop: 10 }}>
            Hi, {user ? user.email : "Stranger"}! You're welcome in our
            travelling site. Let's get started
          </h3>
          <h4 style={{ marginTop: 10 }}>STEP {props.step}</h4>
          <h2 style={{ marginTop: 10 }}>What kind of place do you have?</h2>
          <form style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr" }}>
            <FormControl required className={classes.formControl}>
              <InputLabel>City</InputLabel>
              <Select
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className={classes.selectEmpty}
              >
                <MenuItem value="yerevan">Yerevan</MenuItem>
              </Select>
              <FormHelperText>Required</FormHelperText>
            </FormControl>
            <FormControl required className={classes.formControl}>
              <InputLabel>District</InputLabel>
              <Select
                value={district}
                onChange={(e) => setDistrict(e.target.value)}
                className={classes.selectEmpty}
              >
                <MenuItem value="arabkir">Arabkir</MenuItem>
                <MenuItem value="bangladesh">Bangladesh</MenuItem>
                <MenuItem value="shengavit">Shengavit</MenuItem>
                <MenuItem value="ajapnyak">Ajapnyak</MenuItem>
              </Select>
              <FormHelperText>Required</FormHelperText>
            </FormControl>
            <FormControl required className={classes.formControl}>
              <InputLabel>Guests</InputLabel>
              <Select
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
                className={classes.selectEmpty}
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
                justifyContent: "space-between"
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
                  props.setOption(
                    ["city", "district", "guests"],
                    [city, district, guests]
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
  } else if (props.step === 2) {
    returnedJSX = (
      <HostHomeStepCmp>
        <HostHomeStepText>
          <h2 style={{ color: "#364f6b" }}>Choose a property type</h2>
          <form
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <FormControl required className={classes.formControl}>
              <InputLabel>Select one</InputLabel>
              <Select
                value={house}
                onChange={(e) => setHouse(e.target.value)}
                className={classes.selectEmpty}
              >
                <MenuItem value="Apartment">Apartment</MenuItem>
                <MenuItem value="House">House</MenuItem>
                <MenuItem value="Shared room">Shared room</MenuItem>
              </Select>
              <FormHelperText>Required</FormHelperText>
            </FormControl>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
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
                  props.setOption(
                    ["city", "district", "guests"],
                    [city, district, guests]
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

  return returnedJSX;
}
