import React, { useEffect } from "react";
import { useParams } from "react-router";
import { db, storage } from "../firebase";
import { useState } from "react";
import styled from "styled-components";
import CheckIcon from "@material-ui/icons/Check";
import LocationOnIcon from '@material-ui/icons/LocationOn';


const HomeCmp = styled.div`
margin: 2vw 11vw 0;
`;
const HomeImagesWrapper = styled.div`
  height: 9.51vw; 
  overflow-y: auto;
  display: grid;
  grid-gap: 0 0.5vw;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  width: 75vw;
  padding: 0.5vw;
  margin: 2vw auto 0; 
  &::-webkit-scrollbar {
    width: 0.6vw;
  }

  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 0.3125vw rgba(0, 0, 0, 0.3);
  }

  &::-webkit-scrollbar-thumb {
    background-color: #364f6b;
    outline: 0.052vw solid slategrey;
  } 
`;
const HomeInfo = styled.div`
  margin: 0.3vw;
  padding:0.5vw;
  overflow-wrap: break-word;
  max-width: 75vw;
  color: #364f6b;
  font-size: 1.5vw;
  
  `;
const HomeImageWrap = styled.div`
  height: 8.5vw;  
  grid-column-end: ${(props) => (props.main ? 6 : null)};
  border-radius: 0.2604vw;
  box-shadow: 0vw 0vw 0.52vw 0.052vw rgba(93, 120, 148, 1);
  padding: 0.5vw;
  margin-bottom: 0.52vw;
  display: ${(props) => (props.main ? "none" : null)};
  `;
const HomeImage = styled.img`
  cursor: pointer;
  width: 100%;
  height: ${(props) => (props.main ? "40vw" : "8.5vw")};
  border-radius: 0.2604vw;
  object-fit: cover;
`;
const Amenities = styled.li`
  display: flex;
  align-items: center;
  font-size: 1.5vw; 
`;
const Title = styled.div`
font-size: x-large;
font-weight: 700; 
`;

const MainInfo = styled.div`
display: flex;
justify-content: space-between;
font-size: 1.5vw;
border-bottom: 0.052vw solid #c3c3c3;
margin-bottom : 1.04vw;
padding:1.04vw;
`;
const AptInfo = styled.div`
oreder: 1;
`;
const AmenitiesInfo = styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr 1fr;
`;

const MainPicture = styled.img`
  width: 75vw;
  height: 40vw;
  border-radius: 0.2604vw; 
  object-fit: cover;
  border-radius: 0.2604vw;
  box-shadow: 0vw 0vw 0.52vw 0.052vw rgba(93, 120, 148, 1);
  padding: 0.5vw;
  margin-bottom: 0.52vw;
`;
const Owner = styled.img`
  width: 5.083vw;
  height: 5.083vw;
  border-radius: 50%;
  margin-left: 0.52vw;
 `;
const OwnerInfo = styled.div`
  display: flex;
  align-items: center;
`;


export default function Home(props) {
  const { homeId } = useParams();
  const [home, setHome] = useState(null);
  const [houseImages, setHouseImages] = useState([]);
  const [ownerImages, setOwnerImages] = useState(null)

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
          const profileImagesRef = storageRef.child(
            "profile-images/" + home.owner.profileImage
          );
          profileImagesRef.getDownloadURL().then((url) => setOwnerImages(url));
        }
      });
  }, [homeId, props.type, home]);

  console.log(home);


  return (
    <HomeCmp>
      <Title>
        <HomeInfo>{home ? home.title : null}</HomeInfo>
      </Title>
      <MainPicture
        src={houseImages[0]}
        alt=""
        key="url"
      />
      <HomeImagesWrapper>
        {houseImages.map((url, index) => (
          <HomeImageWrap main={index === 0}>
            <HomeImage
              // main={index === 0}
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
      <MainInfo>
        <AptInfo>
          <HomeInfo style={{ fontSize: "2vw" }}>
            < LocationOnIcon /><b>{home ? home.city.slice(0, 1).toUpperCase() + home.city.slice(1) + ", " +
              home.district.slice(0, 1).toUpperCase() + home.district.slice(1) : null}</b>
          </HomeInfo>
          <HomeInfo>
            {home ? home.guests : null}:guests  {home ? home.bedrooms : null}:bedrooms  {home ? home.bathrooms : null}:bathrooms
             </HomeInfo>
        </AptInfo>
        <HomeInfo><b style={{ fontSize: "2vw" }}>${home ? home.price : null}</b>/ Per night
            <OwnerInfo>
            Owner
            {home ?
              <Owner
                src={ownerImages}
                alt=""
                key={home.owner.id}
              /> : null}
          </ OwnerInfo>
        </HomeInfo>
      </MainInfo>
      <HomeInfo style={{ borderBottom: "0.052vw solid #c3c3c3", paddingBottom: "2.04vw" }}>{home ? home.description : null}</HomeInfo>
      <b style={{ fontSize: "2vw", color: "#364f6b" }}>Amenitis:</b>
      <HomeInfo style={{ borderBottom: "0.052vw solid #c3c3c3", paddingBottom: "2.04vw" }}><AmenitiesInfo> {home ? (
        Object.entries(home.amenities).map((option) => (
          <Amenities>
            <CheckIcon style={{ marginRight: "0.2604vw", fontSize: "1.2vw" }} />{option[0]}
          </Amenities>
        )))
        : null}
      </AmenitiesInfo>
      </HomeInfo>
      <div style={{ height: "3.9vw" }}></div>
    </HomeCmp>
  );
}
