import React from "react";
import {
  HostHomeStepCmp,
  HostHomeStepText,
  BackStyledButton,
  NextStyledButton,
} from "../HostHomeStep";

export default function Step4(props) {
  return (
    <HostHomeStepCmp>
      <HostHomeStepText>
        <h2 style={{ marginTop:"0.52vw" }}>
          How many guests can your place accommodate?
        </h2>
        <h4 style={{ marginTop: "0.52vw" }}>STEP {props.step}</h4>
        <h3 style={{ marginTop: "0.52vw" }}>
          Check that you have enough beds to accommodate all your guests
          comfortably.
        </h3>
        <div style={{ marginTop: "1.04vw" }}>
          <h4>How many bedrooms can guests use?</h4>
          <select
              style={{ width: "100%", color: "#364f6b", marginTop: "2vw" }}
              value={props.bedrooms}
              onChange={(e) => props.setBedrooms(e.target.value)}
            >
              {new Array(50)
                .fill(null)
                .map((item, index) => index + 1)
                .map((bedrooms) => (
                  <option key={bedrooms} value={bedrooms}>
                    {bedrooms} bedrooms
                  </option>
                ))}
            </select>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "5.208vw",
            marginTop: "1.8vw"
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
