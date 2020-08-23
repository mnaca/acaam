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
import { createHostHome, createDeleteHome } from "../../actions/actions";
import { db } from "../../firebase";
import uniqid from "uniqid";
import { Redirect } from "react-router";

export default function Step9(props) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const userInfo = useSelector((state) => state.userInfo);
  const [done, setDone] = useState(false);
  const homes = useSelector((state) => state[props.prevHouse]);
  console.log(props.options);

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
                const prevOptions = props.prevOptions
                  ? { ...props.prevOptions }
                  : {};
                prevOptions.images = props.defaultImages.map((item) =>
                  item.slice(
                    item.indexOf("%2F") + 3,
                    item.indexOf("?alt", item.indexOf("%2F") + 3)
                  )
                );
                const id = prevOptions.id ? prevOptions.id : uniqid();
                options.owner = userInfo;
                options.images = [
                  ...options.images.map((item) => item.name),
                  ...prevOptions.images,
                ];
                options.id = id;
                if (props.edit) {
                  db.collection("users")
                    .doc(userInfo.id)
                    .collection(props.prevHouse)
                    .doc(id)
                    .delete()
                    .then(() => {
                      console.log("Deleted");
                      db.collection("offers")
                        .doc(props.prevHouse)
                        .collection("homes")
                        .doc(id)
                        .delete()
                        .then(() => {
                          console.log("Success");
                          console.log(homes);
                          const prevHouse = homes.find(
                            (item) => item.id === options.id
                          );
                          dispatch(createDeleteHome(prevHouse));
                        });
                    });
                }
                db.collection("users")
                  .doc(userInfo.id)
                  .collection(props.house)
                  .doc(id)
                  .set({ id, ...prevOptions, ...options })
                  .then(() => {
                    console.log("Success");
                    db.collection("offers")
                      .doc(props.house)
                      .collection("homes")
                      .doc(id)
                      .set({ id, ...prevOptions, ...options })
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
