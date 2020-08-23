export const CLOSE_ALL_MENU = "CLOSE_ALL_MENU";
export const TOGGLE_PROFILE_HIDDEN_MENU = "TOGGLE_PROFILE_HIDDEN_MENU";
export const TOGGLE_LANGUAGE_HIDDEN_MENU = "TOGGLE_LANGUAGE_HIDDEN_MENU";
export const SET_USER = "SET_USER";
export const HOST_HOME = "HOST_HOME";
export const LOAD_ALL_HOMES = "LOAD_ALL_HOMES";
export const DELETE_HOME = "DELETE_HOME";

export const createCloseAllMenu = () => {
  return {
    type: CLOSE_ALL_MENU
  }
}

export const createToggleLanguageHiddenMenu = () => {
  return {
    type: TOGGLE_LANGUAGE_HIDDEN_MENU
  }
};

export const createToggleProfileHiddenMenu = () => {
  return {
    type: TOGGLE_PROFILE_HIDDEN_MENU
  }
}

export const createSetUser = (userInfo) => {
  return {
    type: SET_USER,
    userInfo
  }
}

export const createLoadAllHomes = (apartments, vacationRentals, sharedRooms) => {
  return {
    type: LOAD_ALL_HOMES,
    apartments,
    vacationRentals,
    sharedRooms
  }
}

// export const createUser = (user) => {
//   return function (dispatch) {
//     auth
//       .createUserWithEmailAndPassword(
//         user.email,
//         user.password
//       )
//       .then((data) => {
//         alert("Success register")
//         dispatch(createSetUser(user));
//         const userId = data.user.uid;

//         db.collection("users")
//           .doc(userId)
//           .set({ ...user });

//       })
//       .catch((error) => {
//         alert(error);
//       });
//   }
// }

export const createHostHome = (home) => {
  return {
    type: HOST_HOME,
    home
  }
}

export const createDeleteHome = (home) => {
  return {
    type: DELETE_HOME,
    home
  }
}

