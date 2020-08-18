import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { db, auth, storage } from "../firebase";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { Button } from "@material-ui/core";
import { createSetUser } from "../actions/actions";

const ProfilePageCmp = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 1.04vw;
  max-width: 41.7vw;
  margin: 0 auto;
`;
const ImgStyled = styled.div`
  flex: 0 0 10.41vw;
  margin-top: 1.04vw;
  color: #364f6b;
  padding: 0.52vw;
  border-radius: 0.26vw;
  box-shadow: 0vw 0vw 0.52vw 0.052vw rgba(93, 120, 148, 1);
`;
const NameDiv = styled.div`
  font-weight: bold;
  font-size: 1.3vw;
`;
const ProfilInfo = styled.div`
  flex: 1;
  margin-left: 2.604vw;
  color: #364f6b;
`;

const StyledTextArea = styled.textarea`
  border-radius: 0.2604vw;
  margin-top: 0.781vw;
  border-color: #364f6b;
  width: 100%;
  max-width: 31.25vw;
  min-width: 5.128vw;
  min-height: 13.02vw;
  max-height: 31.25vw;
  resize: vertical;
  padding: 0.52vw;
  color: #364f6b;
  font-size: 0.9vw;
`;

const Info = styled.div`
  max-width: 10.416vw;
  white-space: nowrap;
  overflow-x: auto;
  padding: 0.3125vw;
  &::-webkit-scrollbar {
    height: 0.21vw;
  }
   
  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 0.3125vw rgba(0, 0, 0, 0.3);
  }
   
  &::-webkit-scrollbar-thumb {
    background-color: #364f6b;
    outline: 0.052vw solid slategrey;
  }
`;

export default function ProfilePage(props) {
  const storageRef = storage.ref();
  const { userId } = useParams();
  const [user, setUser] = useState(null);
  const userInfo = useSelector((state) => state.userInfo);
  const [profileImage, setProfileImage] = useState(null);
  const [selfDescription, setSelfDescription] = useState("");
  const [editModeDescription, setEditModeDescription] = useState(false);
  const [myPage, setMyPage] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    if (auth.currentUser || userInfo) {
      db.collection("users")
        .doc(userId)
        .get()
        .then((user) => {
          setUser(user.data());
          if (userInfo.id === user.data().id) setMyPage(true);
          else setMyPage(false);
          setSelfDescription(
            user.data().selfDescription
              ? user.data().selfDescription
              : "No information"
          );
          const storageRef = storage.ref();
          const profileImagesRef = storageRef.child(
            "profile-images/" + user.data().profileImage
          );
          profileImagesRef.getDownloadURL().then((url) => setProfileImage(url));
        });
    }
  }, [userId, userInfo]);

  return (
    <>
      {user ? (
        <ProfilePageCmp>
          <ImgStyled>
            <div style={{ height: "10.416vw" }}>
              <img
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
                src={profileImage}
                alt=""
              />
            </div>
            {myPage ? (
              <>
                <label
                  htmlFor="file-upload"
                  style={{
                    cursor: "pointer",
                    display: "block",
                    textAlign: "center",
                    padding: "6px 13px",
                    backgroundColor: "#364f6b",
                    color: "white",
                    borderRadius: "0.2083vw",
                    margin: "0.625vw 0.2604vw",
                  }}
                >
                  Update the photo
                </label>
                <input
                  style={{ display: "none" }}
                  id="file-upload"
                  type="file"
                  onChange={(e) => {
                    const file = e.target.files[0];
                    setProfileImage(URL.createObjectURL(e.target.files[0]));
                    db.collection("users").doc(userId).update({
                      profileImage: file.name,
                    });
                    storageRef
                      .child("profile-images/" + file.name)
                      .put(file)
                      .then(function () {
                        console.log("Uploaded a blob or file!");
                        dispatch(
                          createSetUser({
                            ...userInfo,
                            profileImage: file.name,
                          })
                        );
                      });
                  }}
                />
              </>
            ) : null}
            <Info>
              <b>Email:</b> {user.mail}
            </Info>
            <Info>
              <b>Tel:</b> {user.tel}
            </Info>
          </ImgStyled>
          <ProfilInfo>
            <NameDiv>Hi I'm {user.firstName + " " + user.lastName}</NameDiv>
            {editModeDescription && myPage ? (
              <StyledTextArea
                value={selfDescription}
                onChange={(e) => setSelfDescription(e.target.value)}
                placeholder="Say something about you ..."
              ></StyledTextArea>
            ) : (
              <p
                style={{ margin: "20px 0" }}
                onClick={() => setEditModeDescription(true)}
              >
                {selfDescription || "No information"}
              </p>
            )}
            {myPage && editModeDescription ? (
              <>
                <Button
                  variant="contained"
                  color="primary"
                  style={{ backgroundColor: "#364f6b", marginRight: "0.52vw" }}
                  onClick={() => {
                    if (userInfo.selfDescription !== selfDescription) {
                      setEditModeDescription(false);
                      dispatch(
                        createSetUser({
                          ...userInfo,
                          selfDescription,
                        })
                      );
                      db.collection("users").doc(userId).update({
                        selfDescription,
                      });
                    }
                  }}
                >
                  Submit the changes
                </Button>
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={() => {
                    setEditModeDescription(false);
                    setSelfDescription(userInfo.selfDescription);
                  }}
                >
                  CANCEL
                </Button>
              </>
            ) : myPage ? (
              <Button
                style={{ marginLeft: "auto", display: "block" }}
                variant="outlined"
                color="primary"
                onClick={() => setEditModeDescription(true)}
              >
                Edit
              </Button>
            ) : null}
          </ProfilInfo>
        </ProfilePageCmp>
      ) : null}
    </>
  );
}
