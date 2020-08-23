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
import { useEffect } from "react";
import { storage } from "../firebase";

export const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiFormLabel-root": {
      fontSize: "0.9vw",
    },
  },
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
  inputLabel: {
    fontSize: "0.9vw",
  },
  formHelperText: {
    fontSize: "0.9vw",
  },
  menuItem: {
    fontSize: "0.9vw",
    padding: "0.8vw",
  },
  select: {
    fontSize: "0.9vw",
    "& ul": {
      padding: 0,
    },
    "& li": {
      padding: "0.5vw",
      minHeight: "3em",
    },
  },
  dropDownMenu: {
    maxHeight: "35vw",
  },
  textField: {
    "& input": {
      fontSize: "0.9vw",
    },
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
  font-size: 0.9vw;
`;

export const StyledButton = styled(Button)`
  padding: 0.2vw 2vw !important;
  min-width: 0px !important;
  font-size: 0.9vw !important;
  border-radius: 0.2vw !important;
`;

export const NextStyledButton = styled(Button)`
  font-size: 0.9vw !important;
  background-color: #364f6b !important;
  padding: 0.2vw 2vw !important;
  min-width: 0px !important;
  border-radius: 0.2vw !important;
`;

export const BackStyledButton = styled(StyledButton)`
  color: #364f6b !important;
  border: 0.052vw solid #364f6b !important;
  margin-right: 0.78125vw !important;
`;

export const PlusMinusButton = styled(Button)`
  font-size: 0.9vw !important;
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
  const [defaultImages, setDefaultImages] = useState([]);
  const [hidden, setHidden] = useState([[], []]);
  const [amenities, setAmenities] = useState({});
  const [description, setDescription] = useState("");
  const [title, setTitle] = useState("");

  useEffect(() => {
    if (props.edit && props.prevOptions) {
      setHouse(props.prevOptions.house);
      setCity(props.prevOptions.city);
      setDistrict(props.prevOptions.district);
      setGuests(props.prevOptions.guests);
      setBathrooms(props.prevOptions.bathrooms);
      setBedrooms(props.prevOptions.bedrooms);
      setBedroomsOptions(props.prevOptions["bedrooms-options"]);
      setPrice(props.prevOptions.price);
      setAmenities(props.prevOptions.amenities);
      setDescription(props.prevOptions.description);
      setTitle(props.prevOptions.title);
      let allPromises = [];
      const storageRef = storage.ref();
      if (props.prevOptions.images) {
        props.prevOptions.images.forEach((item) => {
          const houseImagesRef = storageRef.child("house-images/" + item);
          allPromises.push(houseImagesRef.getDownloadURL());
        });
        Promise.all(allPromises).then((docs) => {
          setDefaultImages(docs);
        });
      }
    }
  }, [props.prevOptions, props.edit]);

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
        defaultImages={defaultImages}
        setDefaultImages={setDefaultImages}
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
        description={description}
        setDescription={setDescription}
        title={title}
        setTitle={setTitle}
      />
    );
  } else if (props.step === 9) {
    returnedJSX = (
      <Step9
        step={props.step}
        setStep={props.setStep}
        options={props.options}
        prevOptions={props.prevOptions}
        defaultImages={defaultImages}
        house={house}
        edit={props.edit}
        prevHouse={props.prevOptions ? props.prevOptions.house : null}
      />
    );
  }

  return returnedJSX;
}
