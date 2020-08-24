import React, { useState } from "react";
import styled from "styled-components";
import SearchRoundedIcon from "@material-ui/icons/SearchRounded";
import CloseIcon from "@material-ui/icons/Close";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Slider,
  Button,
} from "@material-ui/core";
import { useStyles, PlusMinusButton } from "./HostHomeStep";
import { districts } from "../district";
import { jsUcfirst } from "./Proposal";
import { Link } from "react-router-dom";

const SearchCmp = styled.div`
  display: flex;
  align-items: center;
  border: 0.104vw solid #364f6b;
  border-radius: 50%;
  &:hover {
    background-color: rgba(54, 79, 107, 0.1);
  }
`;

const SearchLogo = styled.div`
  display: flex;
  align-items: center;
  box-sizing: border-box;
  padding: 0.6vw;
  cursor: pointer;
  height: 100%;
  color: #364f6b;
`;

const SearchForm = styled.div`
  position: absolute;
  box-sizing: border-box;
  padding: 1.5vw 0.6vw 0.6vw 0.6vw;
  width: 50vw;
  z-index: 2;
  top: 7vw;
  left: 25%;
  background-color: white;
  border-radius: 0.7vw;
`;

const StyledCloseIcon = styled(CloseIcon)`
  position: absolute;
  right: 0vw;
  top: 0vw;
  cursor: pointer;
  display: block !important;
  margin-left: auto;
  font-size: 3vw !important;
  color: #364f6b;
`;

const Filter = styled.div`
  padding: 0 1.5vw 1.5vw 1.5vw;
`;

const FilterTitle = styled.h4`
  color: #364f6b;
  font-size: 1.8vw;
`;

const StyledFormControl = styled(FormControl)`
  flex: 1;
  margin-left: ${(props) =>
    props.position === "left" ? "0 !important" : null};
`;

const FilterSelects = styled.div`
  display: flex;
`;

const PriceSlider = styled.div`
  display: flex;
  flex-direction: column;
`;

const PriceWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Price = styled.h4`
  color: #364f6b;
  font-size: 1.4vw;
  display: inline-block;
`;

const Dollar = styled.span`
  font-weight: normal;
`;

const SearchGuestBedroom = styled.div`
  display: inline-block;
  margin: 0 3.646vw;
  color: #364f6b;
  font-size: 1.3vw;
`;

const SearchGuestBedroomWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 0.5vw;
`;

const SearchButton = styled(Button)`
  border-color: #364f6b !important;
  color: #364f6b !important;
  width: 25vw !important;
`;

export default function Search(props) {
  const classes = useStyles();

  const onHandleSearch = () => {
    props.setSearchOpened(true);
  };

  const [house, setHouse] = useState("all");
  const [city, setCity] = useState("all");
  const [district, setDistrict] = useState("all");
  const [price, setPrice] = useState([0, 1000000]);
  const [guests, setGuests] = useState(1);
  const [bedrooms, setBedrooms] = useState(1);

  return (
    <SearchCmp>
      {props.searchOpened ? (
        <SearchForm>
          <StyledCloseIcon onClick={() => props.setSearchOpened(false)} />
          <Filter>
            <FilterTitle>Property Type</FilterTitle>
            <FilterSelects>
              <StyledFormControl
                position="left"
                className={classes.formControl}
                required
              >
                <InputLabel className={classes.inputLabel}>
                  Property Type
                </InputLabel>
                <Select
                  className={classes.select}
                  value={house}
                  onChange={(e) => setHouse(e.target.value)}
                  MenuProps={{ classes: { paper: classes.select } }}
                >
                  {[
                    "all",
                    "apartments",
                    "vacation Rentals",
                    "shared Rooms",
                  ].map((type) => (
                    <MenuItem
                      className={classes.menuItem}
                      value={
                        type === "apartments"
                          ? type
                          : type === "vacation Rentals"
                          ? "vacationRentals"
                          : type === "shared Rooms"
                          ? "sharedRooms"
                          : "all"
                      }
                    >
                      {jsUcfirst(type)}
                    </MenuItem>
                  ))}
                </Select>
              </StyledFormControl>
            </FilterSelects>
          </Filter>
          <Filter>
            <FilterTitle>Location</FilterTitle>
            <FilterSelects>
              <StyledFormControl
                className={classes.formControl}
                position="left"
                required
              >
                <InputLabel className={classes.inputLabel}>City</InputLabel>
                <Select
                  className={classes.select}
                  value={city}
                  onChange={(e) => {
                    setCity(e.target.value);
                    setDistrict(districts[e.target.value][0]);
                  }}
                  MenuProps={{ className: classes.select }}
                >
                  {[
                    "all",
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
                        {city.slice(0, 1).toUpperCase() + city.slice(1)}
                      </MenuItem>
                    );
                  })}
                </Select>
              </StyledFormControl>
              <StyledFormControl className={classes.formControl} required>
                <InputLabel className={classes.inputLabel}>District</InputLabel>
                <Select
                  className={classes.select}
                  value={district}
                  onChange={(e) => setDistrict(e.target.value)}
                  MenuProps={{ classes: { paper: classes.select } }}
                >
                  {districts[city].map((district) => {
                    return (
                      <MenuItem
                        className={classes.menuItem}
                        value={district}
                        key={district}
                      >
                        {district.slice(0, 1).toUpperCase() + district.slice(1)}
                      </MenuItem>
                    );
                  })}
                </Select>
              </StyledFormControl>
            </FilterSelects>
          </Filter>
          <Filter style={{ marginRight: "0.5vw" }}>
            <FilterTitle>
              Price{" "}
              <span style={{ fontSize: "1.1vw", fontWeight: "normal" }}>
                {" "}
                / per night
              </span>
            </FilterTitle>
            <PriceSlider>
              <PriceWrapper>
                <Price>
                  <Dollar>$</Dollar>
                  {price[0]}
                </Price>
                <Price value="max">
                  {price[1]}
                  <Dollar>$</Dollar>
                </Price>
              </PriceWrapper>
              <Slider
                value={price}
                onChange={(e, newValue) => setPrice(newValue)}
                aria-labelledby="range-slider"
                max={10e5}
              />
            </PriceSlider>
          </Filter>
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            <Filter>
              <FilterTitle>Guests</FilterTitle>
              <SearchGuestBedroomWrapper>
                <PlusMinusButton
                  variant="outlined"
                  color="primary"
                  onClick={() => (guests >= 2 ? setGuests(guests - 1) : null)}
                >
                  -
                </PlusMinusButton>
                <SearchGuestBedroom>{guests}</SearchGuestBedroom>
                <PlusMinusButton
                  variant="outlined"
                  color="primary"
                  onClick={() => (guests < 9 ? setGuests(guests + 1) : null)}
                >
                  +
                </PlusMinusButton>
              </SearchGuestBedroomWrapper>
            </Filter>
            <Filter>
              <FilterTitle>Bedrooms</FilterTitle>
              <SearchGuestBedroomWrapper>
                <PlusMinusButton
                  variant="outlined"
                  color="primary"
                  onClick={() =>
                    bedrooms >= 2 ? setBedrooms(guests - 1) : null
                  }
                >
                  -
                </PlusMinusButton>
                <SearchGuestBedroom>{bedrooms}</SearchGuestBedroom>
                <PlusMinusButton
                  variant="outlined"
                  color="primary"
                  onClick={() =>
                    bedrooms < 9 ? setBedrooms(guests + 1) : null
                  }
                >
                  +
                </PlusMinusButton>
              </SearchGuestBedroomWrapper>
            </Filter>
          </div>
          <Link style={{ textDecoration: "none" }} to={`/homes/${house}/${city}/${district}/${price}/${guests}/${bedrooms}`}>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <SearchButton
                variant="outlined"
                color="primary"
                onClick={() => props.setSearchOpened(false)}
              >
                SEARCH
              </SearchButton>
            </div>
          </Link>
        </SearchForm>
      ) : null}
      <SearchLogo onClick={onHandleSearch}>
        <SearchRoundedIcon style={{ fontSize: "1.823vw" }} />
      </SearchLogo>
    </SearchCmp>
  );
}
