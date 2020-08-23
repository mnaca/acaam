import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { db, storage } from "../firebase";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { createSetUser } from "../actions/actions";
import { StyledButton } from "./HostHomeStep";
import Proposal from "./Proposal";
import { Link } from "react-router-dom";
import { createLoadAllHomes } from "../actions/actions";

const ProfilePageCmp = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 1.04vw;
  max-width: 41.7vw;
  margin: 0 auto;
  font-size: 0.9vw;
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

const Offers = styled.div`
  width: 70vw;
  margin: 2vw auto 0 auto;
`;

const OffersItem = styled.div`
  position: relative;
`;

const EditButton = styled(StyledButton)`
  position: absolute !important;
  top: 0.52vw;
  right: 7vw;
`;

const DeleteButton = styled(StyledButton)`
  position: absolute !important;
  top: 0.52vw;
  right: 0.52vw;
  background-color: #f50057 !important;
  color: white !important;
  width: 6vw;
  border: 0.073vw solid #f50057 !important;
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
  const [apartments, setApartments] = useState([]);
  const [vacationRentals, setVacationRentals] = useState([]);
  const [sharedRooms, setSharedRooms] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const thisUser = db.collection("users").doc(userId);

    thisUser.get().then((user) => {
      setUser(user.data());
      if (userInfo && userInfo.id === user.data().id) setMyPage(true);
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
      profileImagesRef.getDownloadURL().then((url) => {
        setProfileImage(url);
        thisUser
          .collection("apartments")
          .get()
          .then((data) => {
            setApartments(data.docs.map((item) => item.data()));
            thisUser
              .collection("vacationRentals")
              .get()
              .then((data) => {
                setVacationRentals(data.docs.map((item) => item.data()));
                thisUser
                  .collection("sharedRooms")
                  .get()
                  .then((data) => {
                    setSharedRooms(data.docs.map((item) => item.data()));
                  });
              });
          });
      });
    });
  }, [userId, userInfo]);

  return (
    <>
      {user ? (
        <>
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
                      padding: "0.3125vw 0.677vw",
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
                  onChange={(e) => {
                    setSelfDescription(e.target.value);
                  }}
                  placeholder="Say something about you ..."
                  maxLength={800}
                ></StyledTextArea>
              ) : (
                <p
                  style={{
                    margin: "1.042vw 0",
                    width: "34.2vw",
                    overflowWrap: "break-word",
                  }}
                  onClick={() => setEditModeDescription(true)}
                >
                  {selfDescription || "No information"}
                </p>
              )}
              {myPage && editModeDescription ? (
                <>
                  <StyledButton
                    variant="contained"
                    color="primary"
                    style={{
                      backgroundColor: "#364f6b",
                      marginRight: "0.52vw",
                      color: "white",
                    }}
                    onClick={() => {
                      if (userInfo.selfDescription !== selfDescription) {
                        db.collection("users")
                          .doc(userId)
                          .update({
                            selfDescription,
                          })
                          .then(() => {
                            setEditModeDescription(false);
                            dispatch(
                              createSetUser({
                                ...userInfo,
                                selfDescription,
                              })
                            );
                            setSelfDescription(selfDescription);
                          });
                      }
                    }}
                  >
                    Submit the changes
                  </StyledButton>
                  <StyledButton
                    variant="contained"
                    color="secondary"
                    onClick={() => {
                      setEditModeDescription(false);
                      setSelfDescription(userInfo.selfDescription);
                    }}
                    style={{ color: "white" }}
                  >
                    CANCEL
                  </StyledButton>
                </>
              ) : myPage ? (
                <StyledButton
                  style={{
                    marginLeft: "auto",
                    display: "block",
                    borderWidth: "0.052vw",
                  }}
                  variant="outlined"
                  color="primary"
                  onClick={() => setEditModeDescription(true)}
                >
                  Edit
                </StyledButton>
              ) : null}
            </ProfilInfo>
          </ProfilePageCmp>
          <Offers>
            {apartments.map((home, index, array) => (
              <OffersItem key={home.id}>
                <Proposal profile={"profile"} home={home} type="apartments" />
                {myPage ? (
                  <>
                    <Link to={`/host/edit/apartments/${home.id}`}>
                      <EditButton variant="outlined" color="primary">
                        EDIT
                      </EditButton>
                    </Link>
                    <DeleteButton
                      onClick={() => {
                        db.collection("offers")
                          .doc("apartments")
                          .collection("homes")
                          .doc(home.id)
                          .delete()
                          .then(() => {
                            console.log("pxk");
                            db.collection("users")
                              .doc(user.id)
                              .collection("apartments")
                              .doc(home.id)
                              .delete()
                              .then(() => {
                                console.log("pxk");
                                array.splice(index, 1);
                                setApartments([...array]);
                                dispatch(
                                  createLoadAllHomes(
                                    apartments,
                                    vacationRentals,
                                    sharedRooms
                                  )
                                );
                              });
                          });
                      }}
                    >
                      Delete
                    </DeleteButton>
                  </>
                ) : null}
              </OffersItem>
            ))}
            {vacationRentals.map((home, index, array) => (
              <OffersItem key={home.id}>
                <Proposal profile={"profile"} home={home} type="rentals" />
                {myPage ? (
                  <>
                    {" "}
                    <Link to={`/host/edit/rentals/${home.id}`}>
                      <EditButton variant="outlined" color="primary">
                        EDIT
                      </EditButton>
                    </Link>
                    <DeleteButton
                      onClick={() => {
                        db.collection("offers")
                          .doc("vacationRentals")
                          .collection("homes")
                          .doc(home.id)
                          .delete()
                          .then(() => {
                            console.log("pxk");
                            db.collection("users")
                              .doc(user.id)
                              .collection("vacationRentals")
                              .doc(home.id)
                              .delete()
                              .then(() => {
                                console.log("pxk");
                                array.splice(index, 1);
                                setVacationRentals([...array]);
                                dispatch(
                                  createLoadAllHomes(
                                    apartments,
                                    vacationRentals,
                                    sharedRooms
                                  )
                                );
                              });
                          });
                      }}
                    >
                      Delete
                    </DeleteButton>
                  </>
                ) : null}
              </OffersItem>
            ))}
            {sharedRooms.map((home, index, array) => (
              <OffersItem key={home.id}>
                <Proposal profile={"profile"} home={home} type="rooms" />
                {myPage ? (
                  <>
                    <Link to={`/host/edit/rooms/${home.id}`}>
                      <EditButton variant="outlined" color="primary">
                        EDIT
                      </EditButton>
                    </Link>
                    <DeleteButton
                      onClick={() => {
                        db.collection("offers")
                          .doc("sharedRooms")
                          .collection("homes")
                          .doc(home.id)
                          .delete()
                          .then(() => {
                            console.log("pxk");
                            db.collection("users")
                              .doc(user.id)
                              .collection("sharedRooms")
                              .doc(home.id)
                              .delete()
                              .then(() => {
                                console.log("pxk");
                                array.splice(index, 1);
                                setSharedRooms([...array]);
                                dispatch(
                                  createLoadAllHomes(
                                    apartments,
                                    vacationRentals,
                                    sharedRooms
                                  )
                                );
                              });
                          });
                      }}
                    >
                      Delete
                    </DeleteButton>
                  </>
                ) : null}
              </OffersItem>
            ))}
          </Offers>
        </>
      ) : null}
    </>
  );
}
