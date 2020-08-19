import React, { useEffect } from "react";
import { useParams } from "react-router";
import { db, storage } from "../firebase";
import { useState } from "react";
import styled from "styled-components";

const HomeCmp = styled.div``;
const HomeImagesWrapper = styled.div`
  height: 51.51vw;
  overflow-y: scroll;
  display: grid;
  grid-gap: 0 0.5vw;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  width: 75vw;
  padding: 0.5vw;
  margin: 2vw auto 0;
`;
const HomeInfo = styled.div`
  margin-bottom: 4vw;
`;
const HomeImageWrap = styled.div`
  height: ${(props) => (props.main ? "40vw" : "8.5vw")};
  grid-column-start: ${(props) => (props.main ? 1 : null)};
  grid-column-end: ${(props) => (props.main ? 6 : null)};
  border-radius: 0.2604vw;
  box-shadow: 0vw 0vw 0.52vw 0.052vw rgba(93, 120, 148, 1);
  padding: 0.5vw;
  margin-bottom: 0.52vw;
`;
const HomeImage = styled.img`
  cursor: pointer;
  width: 100%;
  height: ${(props) => (props.main ? "40vw" : "8.5vw")};
  border-radius: 0.2604vw;
  object-fit: cover;
`;

export default function Home(props) {
  const { homeId } = useParams();
  const [home, setHome] = useState(null);
  const [houseImages, setHouseImages] = useState([]);

  useEffect(() => {
    db.collection("offers")
      .doc(props.type)
      .collection("homes")
      .doc(homeId)
      .get()
      .then((doc) => {
        if (!home) {
          setHome(doc.data());
        } else {
          const storageRef = storage.ref();
          home.images.forEach((item) => {
            const houseImagesRef = storageRef.child("house-images/" + item);
            houseImagesRef.getDownloadURL().then((url) => {
              houseImages.push(url);
              setHouseImages([...houseImages]);
            });
          });
        }
      });
  }, [homeId, props.type, home]);

  console.log(home);

  return (
    <HomeCmp>
      <HomeImagesWrapper>
        {houseImages.map((url, index) => (
          <HomeImageWrap main={index === 0}>
            <HomeImage
              main={index === 0}
              src={url}
              alt=""
              key="url"
              onClick={() => {
                [houseImages[0], houseImages[index]] = [
                  houseImages[index],
                  houseImages[0],
                ];
                setHouseImages([...houseImages]);
              }}
            />
          </HomeImageWrap>
        ))}
      </HomeImagesWrapper>
      <HomeInfo>DSADA</HomeInfo>
      <div style={{ height: "3.9vw" }}></div>
    </HomeCmp>
  );
}
