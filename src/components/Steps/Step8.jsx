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
        <h4 style={{ marginTop: "0.78125vw" }}>STEP {props.step}</h4>
        <h3
          style={{
            margin: "0 auto",
            marginTop: "0.52vw",
            maxWidth: "31.25vw",
          }}
        >
          Write a quick summary of your place. You can highlight what’s special
          about your space, the neighborhood, and how you’ll interact with
          guests.
        </h3>
        <textarea
          value={props.description}
          onChange={(e) => props.setDescription(e.target.value)}
          maxLength={410}
          style={{
            border: "0.104vw solid #364f6b",
            borderRadius: "0.2604vw",
            marginTop: "0.78125vw",
            borderColor: "#364f6b",
            width: "100%",
            maxWidth: "31.25vw",
            minHeight: "10.416vw",
            maxHeight: "31.25vw",
            resize: "vertical",
            padding: "0.52vw",
            color: "#364f6b",
            fontSize:" 0.9vw",
          }}
          placeholder="Write the description..."
        ></textarea>
        <h3
          style={{
            margin: "0 auto",
            marginTop: "0.52vw",
            maxWidth: "31.25vw",
          }}
        >
          Write the title of your place.
        </h3>
        <input
          type="text"
          value={props.title}
          onChange={(e) => props.setTitle(e.target.value)}
          maxLength={100}
          style={{
            border: "0.104vw solid #364f6b",
            borderRadius: "0.2604vw",
            marginTop: "0.78125vw",
            borderColor: "#364f6b",
            width: "100%",
            maxWidth: "31.25vw",
            padding: "0.52vw",
            color: "#364f6b",
            fontSize:" 0.9vw",
          }}
          placeholder="Write the title..."
        ></input>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
            margin: "0.78125vw auto 5.2vw auto",
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
                ["description", "title"],
                [props.description, props.title]
              );
            }}
          >
            NEXT
          </NextStyledButton>
        </div>
      </HostHomeStepText>
    </HostHomeStepCmp>
  );
}
