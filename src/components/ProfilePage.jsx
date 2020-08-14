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
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
`;
const ImgStyled = styled.div`
  flex: 0 0 200px;
  margin-top: 20px;
  color: #364f6b;
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0px 0px 10px 1px rgba(93, 120, 148, 1);
`;
const NameDiv = styled.div`
  font-weight: bold;
  font-size: 25px;
`;
const ProfilInfo = styled.div`
  margin-left: 50px;
  color: #364f6b;
`;

const StyledTextArea = styled.textarea`
  border-radius: 5px;
  margin-top: 15px;
  border-color: #364f6b;
  width: 100%;
  max-width: 600px;
  min-width: 100px;
  min-height: 250px;
  max-height: 600px;
  resize: vertical;
  padding: 10px;
  color: #364f6b;
  font-size: 16px;
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
            <div style={{ height: 200 }}>
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
                    borderRadius: "4px",
                    margin: "12px 5px",
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
            <div>
              <b>Email:</b> {user.mail}
            </div>
            <div>
              <b>Tel:</b>
              {user.tel}{" "}
            </div>
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
                {selfDescription}
              </p>
            )}
            {myPage && editModeDescription ? (
              <>
                <Button
                  variant="contained"
                  color="primary"
                  style={{ backgroundColor: "#364f6b", marginRight: 10 }}
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
            ) : (
              <Button style={{marginLeft: "auto", display: "block"}} variant="outlined" color="primary" onClick={() => setEditModeDescription(true)}>
                Edit
              </Button>
            )}
          </ProfilInfo>
        </ProfilePageCmp>
      ) : null}
    </>
  );
}
