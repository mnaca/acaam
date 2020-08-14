import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { db, auth, storage } from "../firebase";
import styled from "styled-components";
import { useSelector } from "react-redux";

const ProfilePageCmp = styled.div`
  display:flex;
  padding: 20px;
`;
const ImgStyled= styled.div`
cursor: pointer;
color: #364f6b;
padding: 10px;
border-radius: 5px;
box-shadow: 0px 0px 10px 1px rgba(93, 120, 148, 1);
height: 300px;
width:250px;
`;
const NameDiv=styled.div`
font-weight:bold;
font-size: 25px;
`;
const ProfilInfo=styled.div`
margin-left:50px;
color: #364f6b;
`;

export default function ProfilePage(props) {
  const { userId } = useParams();
  const [user, setUser] = useState(null);
  const userInfo = useSelector((state) => state.userInfo);
  const [profileImage, setProfileImage] = useState(null);
  const [selfDescription, setSelfDescription] = useState("");

  useEffect(() => {
    if (auth.currentUser || userInfo) {
      console.log(user);
      db.collection("users")
        .doc(userId)
        .get()
        .then((user) => {
          setUser(user.data());
          console.log(user.data());
          const storageRef = storage.ref();
          const profileImagesRef = storageRef.child(
            "profile-images/" + userInfo.profileImage
          );
          profileImagesRef.getDownloadURL().then((url) => setProfileImage(url));
        });
    }
  }, [userId, userInfo,user]);

  return (
    <>
      {user ? (
        <ProfilePageCmp>           
         <ImgStyled><img style={{height: '200px',width:'100%'}} src={profileImage} alt="" />
         <div><b>Email:</b> {user.mail}</div>
         <div><b>Tel:</b>{user.tel} </div> 
         </ImgStyled>
         <ProfilInfo>
         <NameDiv>Hi I'm {user.firstName +' '+ user.lastName}</NameDiv>  
         <textarea
          value={selfDescription}
          onChange={(e) => setSelfDescription(e.target.value)}
          style={{
            borderRadius: "5px",
            marginTop: 15,
            borderColor: "#364f6b",
            width: "100%",
            minWidth:600,
            minHeight: 250,
            maxHeight: 600,
            resize: "vertical",
            padding: "10px",
            color: "#364f6b",
            fontSize: 16,
          }}
          placeholder="Say something about you ..."
        ></textarea>
         </ProfilInfo>  
                  
        </ProfilePageCmp>
      ) : null}
    </>
  );
}
