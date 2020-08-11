import React from "react";
import { useStyles, HostHomeStepCmp, BackStyledButton, HostHomeStepText, NextStyledButton } from "../HostHomeStep";
import finish from "../../images/finish-removebg-preview.png";
import { useDispatch } from "react-redux";
import { createHostHome } from "../../actions/actions";

export default function Step9(props) {
  const classes = useStyles();
  const dispatch = useDispatch();
  
  return (
    <HostHomeStepCmp>
      <HostHomeStepText>
        <h2>Finish your listing to start earning</h2>
        <div>
          <img src={finish} alt=""/>
        </div>
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
              dispatch(createHostHome(props.options))
            }}
          >
            FINISH
          </NextStyledButton>
        </div>
      </HostHomeStepText>
    </HostHomeStepCmp>
  );
}
