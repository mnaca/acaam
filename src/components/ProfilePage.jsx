import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { db, auth, storage } from "../firebase";
import styled from "styled-components";
import { useSelector } from "react-redux";

const ProfilePageCmp = styled.div`
  padding: 20px;
`;

export default function ProfilePage(props) {
  const { userId } = useParams();
  const [user, setUser] = useState(null);
  const userInfo = useSelector((state) => state.userInfo);
  const [profileImage, setProfileImage] = useState(null);

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
  }, [userId, userInfo]);

  return (
    <>
      {user ? (
        <ProfilePageCmp>
          {user.firstName + user.lastName}
          <img src={profileImage} alt="" />
        </ProfilePageCmp>
      ) : null}
    </>
  );
}
