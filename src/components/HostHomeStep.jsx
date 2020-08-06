import React, { useState } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { Select, MenuItem, InputLabel, makeStyles, FormControl, Button } from "@material-ui/core";


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
// const ButtonCmp=styled.button`
// background-color: red;
// `
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
 
  const [house, setHouse]=useState("")
  if (props.step === "Ando") {
    returnedJSX = (
      <HostHomeStepCmp>
        <HostHomeStepText>          
          <h2 style={{color: "#364f6b"}}>Choose a property type</h2>
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
            {/* <FormHelperText>Required</FormHelperText> */}
          </FormControl>
          <Button  style={{backgroundColor: "#364f6b", top: "22px",left: "43px"}} variant="contained" color="primary" className={classes.button}>
        Next
      </Button>
          {/* <FormControl required className={classes.formControl}>
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
          </FormControl> */}
        </HostHomeStepText>
        <HostHomeStepImg>
        </HostHomeStepImg>
      </HostHomeStepCmp>
    );
  }
  return returnedJSX;
}

