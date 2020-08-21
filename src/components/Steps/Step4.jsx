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
  useStyles,
} from "../HostHomeStep";

export default function Step4(props) {
  const classes = useStyles();

  return (
    <HostHomeStepCmp>
      <HostHomeStepText>
        <h2 style={{ marginTop: "0.5vw" }}>
          How many guests can your place accommodate?
        </h2>
        <h4 style={{ marginTop: "0.5vw" }}>STEP {props.step}</h4>
        <h3 style={{ marginTop: "0.5vw" }}>
          Check that you have enough beds to accommodate all your guests
          comfortably.
        </h3>
        <div style={{ marginTop: "0.5vw" }}>
          <h4>How many bedrooms can guests use?</h4>
          <FormControl className={classes.formControl} style={{ minWidth: "100%" }} required>
            <InputLabel className={classes.inputLabel}>Bedrooms</InputLabel>
            <Select
              value={props.bedrooms}
              className={classes.select}
              onChange={(e) => props.setBedrooms(e.target.value)}
              MenuProps={{className: classes.dropDownMenu}}
            >
              {new Array(50)
                .fill(null)
                .map((item, index) => index + 1)
                .map((bedrooms) => (
                  <MenuItem className={classes.menuItem} key={bedrooms} value={bedrooms}>
                    {bedrooms} bedrooms
                  </MenuItem>
                ))}
            </Select>
            <FormHelperText className={classes.formHelperText}>Required</FormHelperText>
          </FormControl>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
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
              props.setOption(["bedrooms"], [props.bedrooms])
            }}
          >
            NEXT
          </NextStyledButton>
        </div>
      </HostHomeStepText>
    </HostHomeStepCmp>
  );
}