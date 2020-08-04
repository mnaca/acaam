export const CLOSE_ALL_MENU = "CLOSE_ALL_MENU";
export const TOGGLE_PROFILE_HIDDEN_MENU = "TOGGLE_PROFILE_HIDDEN_MENU";
export const TOGGLE_LANGUAGE_HIDDEN_MENU = "TOGGLE_LANGUAGE_HIDDEN_MENU";
export const SET_USER = "SET_USER";

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

export const createSetUser = (user) => {
  return {
    type: SET_USER,
    user
  }
}

