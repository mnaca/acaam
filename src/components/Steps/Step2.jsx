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
  useStyles,
} from "../HostHomeStep";

export default function Step2(props) {
  const classes = useStyles();

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
          <FormControl className={classes.formControl} required>
            <InputLabel className={classes.inputLabel}>
              Property Type
            </InputLabel>
            <Select
              className={classes.select}
              value={props.house}
              onChange={(e) => props.setHouse(e.target.value)}
              MenuProps={{ classes: { paper: classes.select } }}
            >
              <MenuItem className={classes.menuItem} value="apartments">
                Apartment
              </MenuItem>
              <MenuItem className={classes.menuItem} value="vacationRentals">
                Vacatiom Rentals
              </MenuItem>
              <MenuItem className={classes.menuItem} value="sharedRooms">
                Shared Room
              </MenuItem>
            </Select>
            <FormHelperText className={classes.formHelperText}>
              Required
            </FormHelperText>
          </FormControl>
        </form>
        <form
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            gridColumnGap: "1vw",
          }}
        >
          <FormControl style={{marginTop: "0.17vw"}} className={classes.formControl} required>
            <TextField
              id="standard-basic"
              value={props.price}
              onChange={(e) => {
                console.log(e.target.value, props.maxPrice);
                if (
                  isNaN(parseFloat(e.target.value)) ||
                  parseFloat(e.target.value) < 0 ||
                  e.target.value >= props.maxPrice
                ) {
                  if (!(isNaN(parseFloat(e.target.value))))
                    props.setPrice(props.maxPrice);

                  return false;
                } else {
                  props.setPrice(parseFloat(e.target.value));
                }
              }}
              className={classes.textField + " " + classes.root}
              label="Price*"
            />
            <FormHelperText className={classes.formHelperText}>
              Required
            </FormHelperText>
          </FormControl>
          <FormControl className={classes.formControl} required>
            <InputLabel className={classes.inputLabel}>Currency</InputLabel>
            <Select
              className={classes.select}
              value={props.currency}
              onChange={(e) => {
                if (props.currency === "USD" && e.target.value === "AMD") {
                  props.setPrice(Math.round(props.price * 483))
                  props.setMaxPrice(Math.round(props.maxPrice * 483));
                } else if (
                  props.currency === "USD" &&
                  e.target.value === "RUR"
                ) {
                  props.setPrice(Math.round(props.price * 64.23));
                  props.setMaxPrice(Math.round(props.maxPrice * 64.23));
                } else if (
                  props.currency === "RUR" &&
                  e.target.value === "AMD"
                ) {
                  props.setPrice(Math.round(props.price * 7.52));
                  props.setMaxPrice(Math.round(props.maxPrice * 7.52));
                } else if (
                  props.currency === "RUR" &&
                  e.target.value === "USD"
                ) {
                  props.setPrice(Math.round(props.price / 64.23));
                  props.setMaxPrice(Math.round(props.maxPrice / 64.23));
                } else if (
                  props.currency === "AMD" &&
                  e.target.value === "USD"
                ) {
                  props.setPrice(Math.round(props.price / 483));
                  props.setMaxPrice(Math.round(props.maxPrice / 483));
                } else if (
                  props.currency === "AMD" &&
                  e.target.value === "RUR"
                ) {
                  props.setPrice(Math.round(props.price / 7.52));
                  props.setMaxPrice(Math.round(props.maxPrice / 7.52));
                }
                props.setCurrency(e.target.value);
              }}
              MenuProps={{ classes: { paper: classes.select } }}
            >
              <MenuItem className={classes.menuItem} value="USD">
                USD($)
              </MenuItem>
              <MenuItem className={classes.menuItem} value="AMD">
                AMD(֏)
              </MenuItem>
              <MenuItem className={classes.menuItem} value="RUR">
                RUR(₽)
              </MenuItem>
            </Select>
            <FormHelperText className={classes.formHelperText}>
              Required
            </FormHelperText>
          </FormControl>
          <FormControl className={classes.formControl} required>
            <InputLabel className={classes.inputLabel}>Term</InputLabel>
            <Select
              className={classes.select}
              value={props.term}
              onChange={(e) => {
                if (props.term === "monthly" && e.target.value === "daily") {
                  props.setMaxPrice(Math.round(props.maxPrice / 30));
                  props.setPrice(Math.round(props.price / 30));
                } else {
                  props.setMaxPrice(props.maxPrice * 30);
                  props.setPrice(props.price * 30);
                }
                props.setTerm(e.target.value);
              }}
              MenuProps={{ classes: { paper: classes.select } }}
            >
              <MenuItem className={classes.menuItem} value="monthly">
                Monthly
              </MenuItem>
              <MenuItem className={classes.menuItem} value="daily">
                Daily
              </MenuItem>
            </Select>
            <FormHelperText className={classes.formHelperText}>
              Required
            </FormHelperText>
          </FormControl>
          <div
            style={{
              display: "flex",
              gridColumnStart: 1,
              gridColumnEnd: 4,
              justifyContent: "space-between",
              marginTop: "1vw",
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
                price = Math.round(price);
                props.setOption(["house", "price"], [props.house, price]);
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
