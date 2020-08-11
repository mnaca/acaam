export const CLOSE_ALL_MENU = "CLOSE_ALL_MENU";
export const TOGGLE_PROFILE_HIDDEN_MENU = "TOGGLE_PROFILE_HIDDEN_MENU";
export const TOGGLE_LANGUAGE_HIDDEN_MENU = "TOGGLE_LANGUAGE_HIDDEN_MENU";
export const SET_USER = "SET_USER";
export const HOST_HOME = "HOST_HOME";

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

