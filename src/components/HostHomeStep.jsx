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
  FormGroup,
  FormControlLabel,
  Checkbox,
} from "@material-ui/core";
import Step7 from "./Steps/Step7";
import Step8 from "./Steps/Step8";

export const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  button: {
    margin: theme.spacing(1),
  },
  input: {
    display: "none",
  },
}));
export const HostHomeStepCmp = styled.div`
  padding: 0 100px;
  margin-top: 50px;
  display: flex;
  justify-content: center;
`;

export const HostHomeStepText = styled.div`
  flex: 1;
  text-align: center;
  color: #364f6b;
`;

export const StyledButton = styled(Button)`
  width: 125px;
  color: #364f6b !important;
`;

export const NextStyledButton = styled(Button)`
  background-color: #364f6b !important;
  width: 125px;
`;

export const BackStyledButton = styled(StyledButton)`
  border: 1px solid #364f6b !important;
  margin-right: 15px !important;
`;

export const PlusMinusButton = styled(Button)`
  color: #364f6b !important;
  border: 1px solid #364f6b !important;
  padding: 14px !important;
  line-height: 0.5em !important;
  min-width: 0 !important;
  border-radius: 50% !important;
`;

export const Bedroom = styled.div`
  position: relative;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  &::after {
    content: "";
    position: absolute;
    width: 40%;
    margin: 0 auto;
    bottom: 0;
    height: 1px;
    background-color: #364f6b;
  }
`;

export default function HostHomeStep(props) {
  let returnedJSX = null;
  const classes = useStyles();
  const user = useSelector((state) => state.user);
  const [house, setHouse] = useState("");
  const [city, setCity] = useState("");
  const [district, setDistrict] = useState("");
  const [guests, setGuests] = useState("");
  const [bathrooms, setBathrooms] = useState(0);
  const [bedrooms, setBedrooms] = useState("");
  const [bedroomsOptions, setBedroomsOptions] = useState([]);

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
                style={{ color: "#364f6b" }}
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
          <h4 style={{ marginTop: 10 }}>STEP {props.step}</h4>
          <form
            style={{
              display: "flex",
              flex: 1,
              flexDirection: "column",
            }}
          >
            <FormControl required className={classes.formControl}>
              <InputLabel>Select one</InputLabel>
              <Select
                value={house}
                onChange={(e) => setHouse(e.target.value)}
                className={classes.selectEmpty}
                style={{ color: "#364f6b" }}
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
  } else if (props.step === 3) {
    returnedJSX = (
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
                bathrooms >= 1 ? setBathrooms(bathrooms - 1) : null
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
              {bathrooms}
            </div>
            <PlusMinusButton
              variant="outlined"
              color="primary"
              onClick={() =>
                bathrooms < 9 ? setBathrooms(bathrooms + 1) : null
              }
            >
              +
            </PlusMinusButton>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
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
                props.setOption(["bathrooms"], [bathrooms]);
              }}
            >
              NEXT
            </NextStyledButton>
          </div>
        </HostHomeStepText>
      </HostHomeStepCmp>
    );
  } else if (props.step === 4) {
    returnedJSX = (
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
              className={classes.formControl}
            >
              <InputLabel>Bedrooms</InputLabel>
              <Select
                style={{ width: "100%", color: "#364f6b" }}
                value={bedrooms}
                onChange={(e) => setBedrooms(e.target.value)}
                className={classes.selectEmpty}
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
  } else if (props.step === 5) {
    if (bedroomsOptions.length === 0) {
      setBedroomsOptions(new Array(bedrooms).fill(0));
    }

    returnedJSX = (
      <HostHomeStepCmp>
        <HostHomeStepText>
          <h2>Sleeping arrangements</h2>
          <h4 style={{ marginTop: "15px" }}>STEP {props.step}</h4>
          <h3 style={{ marginTop: "10px" }}>
            Sharing the types of beds in each room can help people understand
            the sleeping arrangements.
          </h3>
          <div style={{ marginTop: "20px" }}>
            {new Array(bedrooms).fill(null).map((item, index) => {
              return (
                <Bedroom style={{}} key={index}>
                  <h4 style={{ marginRight: 20 }}>Bedroom {index + 1}</h4>
                  <div>
                    <PlusMinusButton
                      variant="outlined"
                      color="primary"
                      onClick={() => {
                        if (bedroomsOptions[index] >= 1) {
                          bedroomsOptions[index]--;
                          setBedroomsOptions([...bedroomsOptions]);
                        }
                      }}
                    >
                      -
                    </PlusMinusButton>
                    <div style={{ margin: "0 15px", display: "inline-block" }}>
                      {bedroomsOptions[index]} beds
                    </div>
                    <PlusMinusButton
                      variant="outlined"
                      color="primary"
                      onClick={() => {
                        bedroomsOptions[index]++;
                        setBedroomsOptions([...bedroomsOptions]);
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
              marginTop: 25,
              marginBottom: 100,
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
  } else if (props.step === 6) {
    returnedJSX = (
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
  } else if (props.step === 7) {
    returnedJSX = (
      <Step7
        step={props.step}
        setStep={props.setStep}
        setOption={props.setOption}
      />
    );
  } else if (props.step === 8) {
    returnedJSX = (
      <Step8
        step={props.step}
        setStep={props.setStep}
        setOption={props.setOption}
      />
    );
  }

  return returnedJSX;
}
