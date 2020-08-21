import React, { useState } from "react";
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
import uniqid from "uniqid";
import { Redirect } from "react-router";

export default function Step9(props) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const userInfo = useSelector((state) => state.userInfo);
  const [done, setDone] = useState(false);

  return (
    <HostHomeStepCmp>
      <HostHomeStepText>
        <h2>Finish your listing to start earning</h2>
        <div>
          <img
            src={finish}
            style={{ width: "12.83vw", height: "10.03vw" }}
            alt=""
          />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "80%",
            margin: "0.78125vw auto 5.208vw auto",
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
          {done ? (
            <Redirect to={`/profile/${userInfo.id}`} />
          ) : (
            <NextStyledButton
              variant="contained"
              color="primary"
              className={classes.button}
              onClick={() => {
                const options = { ...props.options };
                const id = uniqid();
                options.owner = userInfo;
                options.images = options.images.map((item) => item.name);
                options.id = id;
                db.collection("users")
                  .doc(userInfo.id)
                  .collection(props.house)
                  .doc(id)
                  .set({ id, ...options })
                  .then(() => {
                    console.log("Success");
                    db.collection("offers")
                      .doc(props.house)
                      .collection("homes")
                      .doc(id)
                      .set({ ...options })
                      .then(() => {
                        console.log("Success");
                        dispatch(createHostHome(options));
                        setDone(true);
                      });
                  });
              }}
            >
              FINISH
            </NextStyledButton>
          )}
        </div>
      </HostHomeStepText>
    </HostHomeStepCmp>
  );
}
