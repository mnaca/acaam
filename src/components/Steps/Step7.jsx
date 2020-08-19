import React from "react";
import {
  HostHomeStepCmp,
  HostHomeStepText,
  useStyles,
  BackStyledButton,
  NextStyledButton,
} from "../HostHomeStep.jsx";
import styled from "styled-components";
import Dropzone from "../Dropzone.jsx";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { storage } from "../../firebase";

const HouseImages = styled.div`
  position: relative;
  grid-column-start: ${(props) => (props.index === 0 ? 1 : null)};
  grid-column-end: ${(props) => (props.index === 0 ? 4 : null)};
  height: ${(props) => (props.index === 0 ? "37.5vw" : "12.5vw")};
  margin: 0.2604vw;
  margin-bottom: ${(props) => (props.index === 0 ? "0.52vw" : null)};
  box-shadow: 0vw 0vw 0.52vw 0.052vw rgba(93, 120, 148, 1);
  padding: 0.2604vw;
  border-radius: ${(props) => (props.index === 0 ? "0.52vw" : "0.3125vw")};

  &:hover .menu {
    display: inline-block !important;
  }

  &:hover .imgBackground {
    display: inline-block !important;
  }
`;

const Controls = styled.ul`
  position: absolute;
  background-color: white;
  border: 0.052vw solid #364f6b;
  border-radius: 0.208vw;
  z-index: 1;
  top: 0.52vw;
  right: 1.5625vw;
  list-style-type: none;
  display: ${(props) => (props.dnone ? "none" : "block")};
`;

const ImageBackground = styled.div`
  position: absolute;
  display: ${(props) => (props.dnone ? "none" : "block")};
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(255, 255, 255, 0.5);
`;

const ImageControl = styled.li`
  cursor: pointer;
  color: #364f6b;
  padding: 0.2604vw;
  &:hover {
    background-color: rgba(54, 79, 107, 0.2);
  }
`;

export default function Step7(props) {
  const classes = useStyles();

  return (
    <HostHomeStepCmp>
      <HostHomeStepText>
        <h2 style={{ marginBottom: "0.52vw" }}>Add a photo to your ad</h2>
        <h3 style={{ marginBottom: "0.52vw" }}>
          Photos help guests imagine how it is
        </h3>
        <h4 style={{ marginBottom: "0.52vw" }}>STEP {props.step}</h4>
        <Dropzone
          validFiles={props.images}
          setValidFiles={props.setImages}
          images={props.images}
        />
        {props.images.length > 0 ? (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr",
              maxWidth: "46.875vw",
              margin: "0 auto",
            }}
          >
            {props.images.map((item, index) => {
              if (props.hidden[index] === undefined) props.hidden[index] = true;
              return (
                <HouseImages
                  onMouseLeave={() => {
                    const hiddenCopy = props.hidden.map((item, hiddenIndex) => {
                      if (index === hiddenIndex) return true;
                      return item;
                    });
                    props.setHidden(hiddenCopy);
                  }}
                  key={item.name}
                  index={index}
                >
                  <ImageBackground dnone={props.hidden[index]} />
                  <img
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      borderRadius: "0.2604vw",
                    }}
                    src={URL.createObjectURL(item)}
                    alt=""
                    key={item}
                  />
                  <MoreVertIcon
                    onClick={() => {
                      const hiddenCopy = props.hidden.map(
                        (item, hiddenIndex) => {
                          if (index === hiddenIndex) return !item;
                          return item;
                        }
                      );
                      props.setHidden(hiddenCopy);
                    }}
                    style={{ display: "none", width: "2vw", height: "4vw", right: 0, top: 0 }}
                    className="menu"
                  />
                  <Controls dnone={props.hidden[index]}>
                    <ImageControl
                      onClick={() => {
                        [props.images[0], props.images[index]] = [
                          props.images[index],
                          props.images[0],
                        ];
                        [props.hidden[0], props.hidden[index]] = [
                          props.hidden[index],
                          props.hidden[0],
                        ];
                        props.setImages([...props.images]);
                      }}
                    >
                      Set as main image
                    </ImageControl>
                    <ImageControl
                      onClick={() => {
                        props.images.splice(index, 1);
                        props.hidden.splice(index, 1);
                        props.setImages([...props.images]);
                      }}
                    >
                      Delete
                    </ImageControl>
                  </Controls>
                </HouseImages>
              );
            })}
          </div>
        ) : null}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
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
          <NextStyledButton
            variant="contained"
            color="primary"
            className={classes.button}
            onClick={() => {
              if (props.images.length > 0) {
                const storageRef = storage.ref();
                props.setStep(props.step + 1);
                props.setOption(["images"], [props.images]);

                props.images.forEach((item) => {
                  storageRef
                    .child("house-images/" + item.name)
                    .put(item)
                    .then(function (snapshot) {
                      console.log("Uploaded a blob or file!");
                    });
                });
              }
            }}
          >
            NEXT
          </NextStyledButton>
        </div>
      </HostHomeStepText>
    </HostHomeStepCmp>
  );
}
