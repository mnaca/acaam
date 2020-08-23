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
  NextStyledButton,
  useStyles,
} from "../HostHomeStep";
import { districts } from "../../district";
import { jsUcfirst } from "../Proposal";

export default function Step1(props) {
  const classes = useStyles();

  return (
    <HostHomeStepCmp>
      <HostHomeStepText>
        <h3 style={{ marginTop: "0.5vw" }}>
          Hi, {props.user ? props.user.email : "Stranger"}! You're welcome in
          our travelling site. Let's get started
        </h3>
        <h4 style={{ marginTop: "0.5vw" }}>STEP {props.step}</h4>
        <h2 style={{ marginTop: "0.55vw" }}>What kind of place do you have?</h2>
        <form
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            gridColumnGap: "1vw",
          }}
        >
          <FormControl className={classes.formControl} required>
            <InputLabel className={classes.inputLabel}>City</InputLabel>
            <Select
              className={classes.select}
              value={props.city}
              onChange={(e) => {
                props.setCity(e.target.value);
                props.setDistrict(districts[e.target.value][0]);
              }}
              MenuProps={{ classes: { paper: classes.select } }}
            >
              {[
                "yerevan",
                "shirak",
                "lori",
                "tavush",
                "aragatsotn",
                "kotayq",
                "gexarquniq",
                "armavir",
                "ararat",
                "vayoc Dzor",
                "syuniq",
              ].map((city) => {
                return (
                  <MenuItem
                    className={classes.menuItem}
                    value={city}
                    key={city}
                  >
                    {jsUcfirst(city)}
                  </MenuItem>
                );
              })}
            </Select>
            <FormHelperText className={classes.formHelperText}>
              Required
            </FormHelperText>
          </FormControl>
          <FormControl className={classes.formControl} required>
            <InputLabel className={classes.inputLabel}>District</InputLabel>
            <Select
              className={classes.select}
              value={props.district}
              onChange={(e) => props.setDistrict(e.target.value)}
              MenuProps={{ classes: { paper: classes.select } }}
            >
              {districts[props.city].map((district) => {
                return (
                  <MenuItem
                    className={classes.menuItem}
                    value={district}
                    key={district}
                  >
                    {jsUcfirst(district)}
                  </MenuItem>
                );
              })}
            </Select>
            <FormHelperText className={classes.formHelperText}>
              Required
            </FormHelperText>
          </FormControl>
          <FormControl className={classes.formControl} required>
            <InputLabel className={classes.inputLabel}>Guests</InputLabel>
            <Select
              className={classes.select}
              value={props.guests}
              onChange={(e) => props.setGuests(e.target.value)}
              MenuProps={{ classes: { paper: classes.select } }}
            >
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((guestsNumber) => (
                <MenuItem
                  className={classes.menuItem}
                  key={guestsNumber}
                  value={guestsNumber}
                >
                  for {guestsNumber} guests
                </MenuItem>
              ))}
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
            <NextStyledButton
              style={{ marginLeft: "auto" }}
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
