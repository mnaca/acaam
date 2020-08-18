import React, { useState } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { makeStyles, Button } from "@material-ui/core";
import Step7 from "./Steps/Step7";
import Step8 from "./Steps/Step8";
import Step6 from "./Steps/Step6";
import Step5 from "./Steps/Step5";
import Step4 from "./Steps/Step4";
import Step3 from "./Steps/Step3";
import Step2 from "./Steps/Step2";
import Step1 from "./Steps/Step1";
import Step9 from "./Steps/Step9";

export const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: "6.25vw",
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  button: {
    margin: theme.spacing(1),
  },
  input: {
    display: "none",
  },
}));
export const HostHomeStepCmp = styled.div`
  padding: 0 5.208vw;
  margin-top: 2.604;
  display: flex;
  justify-content: center;
`;

export const HostHomeStepText = styled.div`
  flex: 1;
  text-align: center;
  color: #364f6b;
  max-width: 41.667vw;
`;

export const StyledButton = styled(Button)`
  width: 6.5104vw;
  color: #364f6b !important;
`;

export const NextStyledButton = styled(Button)`
  background-color: #364f6b !important;
  width: 6.5104vw;
`;

export const BackStyledButton = styled(StyledButton)`
  border: 0.052vw solid #364f6b !important;
  margin-right: 0.78125vw !important;
`;

export const PlusMinusButton = styled(Button)`
  color: #364f6b !important;
  border: 0.052vw solid #364f6b !important;
  padding: 0.78125vw !important;
  line-height: 0.5em !important;
  min-width: 0 !important;
  border-radius: 50% !important;
`;

export const Bedroom = styled.div`
  position: relative;
  padding: 1.04vw;
  display: flex;
  align-items: center;
  justify-content: center;
  &::after {
    content: "";
    position: absolute;
    width: 40%;
    margin: 0 auto;
    bottom: 0;
    height: 0.052vw;
    background-color: #364f6b;
  }
`;

export default function HostHomeStep(props) {
  let returnedJSX = null;
  const user = useSelector((state) => state.user);
  const [house, setHouse] = useState("apartments");
  const [city, setCity] = useState("yerevan");
  const [district, setDistrict] = useState("arabkir");
  const [guests, setGuests] = useState(1);
  const [bathrooms, setBathrooms] = useState(1);
  const [bedrooms, setBedrooms] = useState(1);
  const [bedroomsOptions, setBedroomsOptions] = useState([1]);
  const [price, setPrice] = useState(0);
  const [currency, setCurrency] = useState("USD");
  const [term, setTerm] = useState("daily");
  const [images, setImages] = useState([]);
  const [hidden, setHidden] = useState([]);
  const [amenities, setAmenities] = useState({});

  if (props.step === 1) {
    returnedJSX = (
      <Step1
        step={props.step}
        setStep={props.setStep}
        setOption={props.setOption}
        city={city}
        setCity={setCity}
        user={user}
        district={district}
        setDistrict={setDistrict}
        guests={guests}
        setGuests={setGuests}
      />
    );
  } else if (props.step === 2) {
    returnedJSX = (
      <Step2
        step={props.step}
        setStep={props.setStep}
        setOption={props.setOption}
        house={house}
        setHouse={setHouse}
        city={city}
        district={district}
        guests={guests}
        price={price}
        setPrice={setPrice}
        currency={currency}
        setCurrency={setCurrency}
        term={term}
        setTerm={setTerm}
      />
    );
  } else if (props.step === 3) {
    returnedJSX = (
      <Step3
        step={props.step}
        setStep={props.setStep}
        setOption={props.setOption}
        bathrooms={bathrooms}
        setBathrooms={setBathrooms}
      />
    );
  } else if (props.step === 4) {
    returnedJSX = (
      <Step4
        step={props.step}
        setStep={props.setStep}
        setOption={props.setOption}
        bedrooms={bedrooms}
        setBedrooms={setBedrooms}
      />
    );
  } else if (props.step === 5) {
    returnedJSX = (
      <Step5
        step={props.step}
        setStep={props.setStep}
        setOption={props.setOption}
        bedrooms={bedrooms}
        bedroomsOptions={bedroomsOptions}
        setBedroomsOptions={setBedroomsOptions}
      />
    );
  } else if (props.step === 6) {
    returnedJSX = (
      <Step6
        step={props.step}
        setStep={props.setStep}
        setOption={props.setOption}
        amenities={amenities}
        setAmenities={setAmenities}
      />
    );
  } else if (props.step === 7) {
    returnedJSX = (
      <Step7
        step={props.step}
        setStep={props.setStep}
        setOption={props.setOption}
        images={images}
        setImages={setImages}
        hidden={hidden}
        setHidden={setHidden}
      />
    );
  } else if (props.step === 8) {
    returnedJSX = (
      <Step8
        step={props.step}
        setStep={props.setStep}
        setOption={props.setOption}
      />
    );
  } else if (props.step === 9) {
    returnedJSX = (
      <Step9
        step={props.step}
        setStep={props.setStep}
        options={props.options}
        house={house}
      />
    );
  }

  return returnedJSX;
}
