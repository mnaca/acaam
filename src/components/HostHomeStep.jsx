import React, { useState } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { Select, MenuItem, InputLabel, makeStyles, FormControl, FormHelperText, Button } from "@material-ui/core";
import Count from './PlusMinusButton';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const HostHomeStepCmp = styled.div`
  display: flex;
  padding: 0 100px;
  margin-top: 50px;
`;

const HostHomeStepText = styled.div`
  flex: 1;
`;

const HostHomeStepImg = styled.div`
  flex: 1;
`;

const CounterDiv = styled.div`
  flex 1;
  margin-top: 25px;
`

const ButtonDiv = styled.div`
  flex 1;
  margin-top: 25px;
`

export default function HostHomeStep(props) {
  let returnedJSX = null;

  if (props.step === "Tyom") {
    returnedJSX = (
      <HostHomeStepCmp>
        <HostHomeStepText>
          <h2>How many bathrooms do you want?</h2>
          <CounterDiv>
            <Count />
          </CounterDiv>
          <ButtonDiv>
            <Button style = {{backgroundColor: '#364f6b', left: '330px'}} variant="contained" color="primary">
            Next
            </Button>
          </ButtonDiv>
        </HostHomeStepText>
        <HostHomeStepImg>
        </HostHomeStepImg>
      </HostHomeStepCmp>
    );
  }

  return returnedJSX;
}


