import React from "react";
import {
  HostHomeStepCmp,
  HostHomeStepText,
  BackStyledButton,
  NextStyledButton,
} from "../HostHomeStep";

export default function Step1(props) {
  return (
    <HostHomeStepCmp>
      <HostHomeStepText>
        <h3 style={{ marginTop: "0.52vw" }}>
          Hi, {props.user ? props.user.email : "Stranger"}! You're welcome in
          our travelling site. Let's get started
        </h3>
        <h4 style={{ marginTop: "0.52vw" }}>STEP {props.step}</h4>
        <h2 style={{ marginTop: "0.52vw" }}>What kind of place do you have?</h2>
        <form
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            gridColumnGap: "1.04vw",
            marginTop: "1vw"
          }}
        >
          <select value={props.city} onChange={(e) => props.setCity(e.target.value)}>
            <option value="yerevan">Yerevan</option>
          </select>
          <select value={props.district} onChange={(e) => props.setDistrict(e.target.value)}>
            <option value="arabkir">Arabkir</option>
            <option value="bangladesh">HAT</option>
            <option value="shengavit">Shengavit</option>
            <option value="ajapnyak">Ajapnyak</option>
            <option value="Avan">Avan</option>
            <option value="Nor Norq">Nor Norq</option>
            <option value="Dzrvej">Dzrvej</option>
            <option value="Qanaqer-Zeytun">Qanaqer-Zeytun</option>
          </select>
          <select value={props.guests} onChange={(e) => props.setGuests(e.target.value)}>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((guestsNumber) => (
              <option key={guestsNumber} value={guestsNumber}>
                for {guestsNumber} guests
              </option>
            ))}
          </select>
          <div
            style={{
              display: "flex",
              gridColumnStart: 1,
              gridColumnEnd: 4,
              justifyContent: "space-between",
              marginTop: "1.8vw",
              marginBottom: "5.208vw",
              fontSize: "0.9vw",
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
