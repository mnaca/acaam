import React from "react";
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
            marginTop: "0.8vw"
          }}
        >
          <select
            value={props.house}
            onChange={(e) => props.setHouse(e.target.value)}
          >
            <option value="apartments">Apartment</option>
            <option value="vacationRentals">Vacatiom Rentals</option>
            <option value="sharedRooms">Shared room</option>
          </select>
        </form>
        <form
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            gridColumnGap: "1.04vw",
            marginTop: "1.6vw"
          }}
        >
          <input
            type="text"
            style={{ fontSize: "0.9vw", outline: "none", border: "0.104vw solid #364f6b", borderRadius: "0.5vw", padding: "0 0.5vw" }}
            id="standard-basic"
            value={props.price}
            onChange={(e) => {
              if (
                isNaN(parseFloat(e.target.value)) ||
                parseFloat(e.target.value) < 0 ||
                e.target.value.length > 10
              ) {
                return false;
              }
              props.setPrice(parseFloat(e.target.value));
            }}
            label="Price*"
          />
          <select
            value={props.currency}
            onChange={(e) => props.setCurrency(e.target.value)}
          >
            <option value="USD">USD($)</option>
            <option value="AMD">AMD(֏)</option>
            <option value="RUR">RUR(₽)</option>
          </select>
          <select
            value={props.term}
            onChange={(e) => props.setTerm(e.target.value)}
          >
            <option value="monthly">Monthly</option>
            <option value="daily">Daily</option>
          </select>
          <div
            style={{
              display: "flex",
              gridColumnStart: 1,
              gridColumnEnd: 4,
              justifyContent: "space-between",
              marginTop: "1.8vw",
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
