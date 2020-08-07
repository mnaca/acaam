import React from "react";
import {
  HostHomeStepCmp,
  HostHomeStepText,
  useStyles,
  BackStyledButton,
  NextStyledButton,
} from "../HostHomeStep";

export default function Step8(props) {
  const classes = useStyles();

  return (
    <HostHomeStepCmp>
      <HostHomeStepText>
        <h2>Describe your place to guests.</h2>
        <h4 style={{ marginTop: "15px" }}>STEP {props.step}</h4>
        <h3
          style={{
            margin: "0 auto",
            marginTop: "10px",
            maxWidth: 600,
          }}
        >
          Write a quick summary of your place. You can highlight what’s special
          about your space, the neighborhood, and how you’ll interact with
          guests.
        </h3>
        <textarea
          style={{
            borderRadius: "5px",
            marginTop: 15,
            borderColor: "#364f6b",
            width: "100%",
            maxWidth: 600,
            minHeight: 200,
            maxHeight: 600,
            resize: "vertical",
            padding: "10px",
            color: "#364f6b",
            fontSize: 16,
          }}
          placeholder="Write the description..."
        ></textarea>
        <h3
          style={{
            margin: "0 auto",
            marginTop: "10px",
            maxWidth: 600,
          }}
        >
          Write the title of your place.
        </h3>
        <input
          type="text"
          style={{
            borderRadius: "5px",
            marginTop: 15,
            borderColor: "#364f6b",
            width: "100%",
            maxWidth: 600,
            padding: "10px",
            color: "#364f6b",
            fontSize: 16,
          }}
          placeholder="Write the title..."
        ></input>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "80%",
            margin: "15px auto 100px auto",
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
}
