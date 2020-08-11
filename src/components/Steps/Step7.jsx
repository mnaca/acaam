import React, { useState } from "react";
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

const HouseImages = styled.div`
  position: relative;
  grid-column-start: ${(props) => (props.index === 0 ? 1 : null)};
  grid-column-end: ${(props) => (props.index === 0 ? 4 : null)};
  height: ${(props) => (props.index === 0 ? "37.5vw" : "12.5vw")};
  margin: 5px;
  margin-bottom: ${(props) => (props.index === 0 ? "10px" : null)};
  box-shadow: 0px 0px 10px 1px rgba(93, 120, 148, 1);
  padding: 5px;
  border-radius: ${(props) => (props.index === 0 ? "10px" : "6px")};

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
  border: 1px solid #364f6b;
  border-radius: 4px;
  z-index: 1;
  top: 10px;
  right: 30px;
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
  padding: 5px;
  &:hover {
    background-color: rgba(54, 79, 107, 0.2);
  }
`;

export default function Step7(props) {
  const classes = useStyles();
  const [images, setImages] = useState([]);
  const [hidden, setHidden] = useState([]);

  return (
    <HostHomeStepCmp>
      <HostHomeStepText>
        <h2 style={{ marginBottom: 10 }}>Add a photo to your ad</h2>
        <h3 style={{ marginBottom: 10 }}>
          Photos help guests imagine how it is
        </h3>
        <h4 style={{ marginBottom: 10 }}>STEP {props.step}</h4>
        <Dropzone validFiles={images} setValidFiles={setImages} />
        {images.length > 0 ? (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr",
              maxWidth: 900,
              margin: "0 auto",
            }}
          >
            {images.map((item, index) => {
              if (hidden[index] === undefined) hidden[index] = true;
              return (
                <HouseImages
                  onMouseLeave={() => {
                    const hiddenCopy = hidden.map((item, hiddenIndex) => {
                      if (index === hiddenIndex) return true;
                      return item;
                    });
                    setHidden(hiddenCopy);
                  }}
                  key={item.name}
                  index={index}
                >
                  <ImageBackground dnone={hidden[index]} />
                  <img
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      borderRadius: "5px",
                    }}
                    src={URL.createObjectURL(item)}
                    alt=""
                    key={item}
                  />
                  <MoreVertIcon
                    onClick={() => {
                      const hiddenCopy = hidden.map((item, hiddenIndex) => {
                        if (index === hiddenIndex) return !item;
                        return item;
                      });
                      setHidden(hiddenCopy);
                    }}
                    style={{ display: "none" }}
                    className="menu"
                  />
                  <Controls dnone={hidden[index]}>
                    <ImageControl onClick={() => {
                      [images[0], images[index]] = [images[index], images[0]];
                      [hidden[0], hidden[index]] = [hidden[index], hidden[0]];
                      setImages([...images]);
                    }}>Set as main image</ImageControl>
                    <ImageControl onClick={() => {
                      images.splice(index, 1);
                      hidden.splice(index, 1);
                      setImages([...images]);
                    }}>Delete</ImageControl>
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
              props.setStep(props.step + 1);
              props.setOption(["images"], [images]);
            }}
          >
            NEXT
          </NextStyledButton>
        </div>
      </HostHomeStepText>
    </HostHomeStepCmp>
  );
}
