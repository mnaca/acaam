import React from "react";
import {
  useStyles,
  HostHomeStepCmp,
  BackStyledButton,
  HostHomeStepText,
  NextStyledButton,
} from "../HostHomeStep";
import finish from "../../images/finish-removebg-preview.png";
import { useDispatch, useSelector } from "react-redux";
import { createHostHome } from "../../actions/actions";
import { db } from "../../firebase";
import firebase from "firebase";

export default function Step9(props) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const userInfo = useSelector((state) => state.userInfo);

  return (
    <HostHomeStepCmp>
      <HostHomeStepText>
        <h2>Finish your listing to start earning</h2>
        <div>
          <img src={finish} alt="" />
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
              dispatch(createHostHome(props.options));
              console.log(props.options);
              const options = { ...props.options };
              options["bedrooms-options"] = JSON.stringify(
                options["bedrooms-options"]
              );
              options.images = JSON.stringify(
                options.images.map((item) => item.name)
              );
              options.owner = JSON.stringify(userInfo);
              db.collection("users")
                .doc(userInfo.id)
                .update({
                  [props.house]: firebase.firestore.FieldValue.arrayUnion(
                    JSON.stringify(options)
                  ),
                });
              db.collection("offers")
                .doc(props.house)
                .update({
                  ["homes"]: firebase.firestore.FieldValue.arrayUnion(
                    JSON.stringify(options)
                  ),
                });
            }}
          >
            FINISH
          </NextStyledButton>
        </div>
      </HostHomeStepText>
    </HostHomeStepCmp>
  );
}
