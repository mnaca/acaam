import React from "react";
import {
  MenuItem,
  InputLabel,
  TextField,
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
        <h4 style={{ marginTop: "0.52vw" }}>STEP {props.step}</h4>
        <form
          style={{
            display: "flex",
            flex: 1,
            flexDirection: "column",
          }}
        >
          <FormControl required>
            <InputLabel style={{fontSize: "0.9vw"}}>Select one</InputLabel>
            <Select
              value={props.house}
              onChange={(e) => props.setHouse(e.target.value)}
              style={{ color: "#364f6b" }}
            >
              <MenuItem value="apartments">Apartment</MenuItem>
              <MenuItem value="vacationRentals">Vacatiom Rentals</MenuItem>
              <MenuItem value="sharedRooms">Shared room</MenuItem>
            </Select>
            <FormHelperText style={{fontSize: "0.9vw"}}>Required</FormHelperText>
          </FormControl>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "1.04vw",
              marginBottom: "5.208vw",
            }}
          ></div>
        </form>

        <form
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            gridColumnGap: "1.04vw",
          }}
        >
          <FormControl required >
            <TextField
            style={{fontSize: "0.9vw"}}
              id="standard-basic"
              value={props.price}
              onChange={(e) => {
                if (isNaN(parseFloat(e.target.value)) || parseFloat(e.target.value) < 0 || e.target.value.length > 10) {
                  return false;
                }
                props.setPrice(parseFloat(e.target.value));
              }}
              label="Price*"
            />
            <FormHelperText style={{fontSize: "0.9vw"}}>Required</FormHelperText>
          </FormControl>
          <FormControl required>
            <InputLabel style={{fontSize: "0.9vw"}}>Currency</InputLabel>
            <Select
              value={props.currency}
              onChange={(e) => props.setCurrency(e.target.value)}
            >
              <MenuItem value="USD">USD($)</MenuItem>
              <MenuItem value="AMD">AMD(֏)</MenuItem>
              <MenuItem value="RUR">RUR(₽)</MenuItem>
            </Select>
            <FormHelperText style={{fontSize: "0.9vw"}}>Required</FormHelperText>
          </FormControl>
          <FormControl required>
            <InputLabel style={{fontSize: "0.9vw"}}>Term</InputLabel>
            <Select
              value={props.term}
              onChange={(e) => props.setTerm(e.target.value)}
              style={{ color: "#364f6b" }}
            >
              <MenuItem value="monthly">Monthly</MenuItem>
              <MenuItem value="daily">Daily</MenuItem>
            </Select>
            <FormHelperText style={{fontSize: "0.9vw"}}>Required</FormHelperText>
          </FormControl>
          <div
            style={{
              display: "flex",
              gridColumnStart: 1,
              gridColumnEnd: 4,
              justifyContent: "space-between",
              marginTop:"1.04vw",
              marginBottom: "5.208vw",
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
                let price = props.price;
                if (props.term !== "daily") price /= 30;
                if (props.currency === "AMD") price /= 483;
                if (props.currency === "RUR") price /= 7.52; 
                props.setOption(
                  ["house", "price"],
                  [props.house, price]
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
