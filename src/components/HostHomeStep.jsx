import React, { useState } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { Select, MenuItem, InputLabel, makeStyles, FormControl, FormHelperText } from "@material-ui/core";

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
  display: flex;
  padding: 0 100px;
  margin-top: 50px;
`;

const HostHomeStepText = styled.div`
  flex: 1;
`;

const HostHomeStepImg = styled.div`
  flex: 1;
`;

export default function HostHomeStep(props) {
  let returnedJSX = null;
  const classes = useStyles();
  const user = useSelector((state) => state.user);
  const [city, setCity] = useState("");
  const [district, setDistrict] = useState("");
  const [guests, setGuests] = useState("");

  if (props.step === 1) {
    returnedJSX = (
      <HostHomeStepCmp>
        <HostHomeStepText>
          <h3>
            Hi, {user ? user.email : "Stranger"}! You're welcome in our
            travelling site. Let's get started
          </h3>
          <h4>STEP 1</h4>
          <h2>What kind of place do you have?</h2>
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
              {[1,2,3,4,5,6,7,8,9,10].map(guestsNumber => (
                <MenuItem key={guestsNumber} value={guestsNumber}>for {guestsNumber} guests</MenuItem>
              ))}
            </Select>
            <FormHelperText>Required</FormHelperText>
          </FormControl>
        </HostHomeStepText>
        <HostHomeStepImg>
        </HostHomeStepImg>
      </HostHomeStepCmp>
    );
  }

  return returnedJSX;
}
