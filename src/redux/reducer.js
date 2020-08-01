import { TOGGLE_PROFILE_HIDDEN_MENU, TOGGLE_LANGUAGE_HIDDEN_MENU, CLOSE_ALL_MENU } from '../actions/actions';

const initialState = {
  languageHiddenMenuOpened: false,
  profileHiddenMenuOpened: false,
  clickedOnMenu: false
}

export default function reducer(state = initialState, action) {
  let newState = { ...state };

  switch (action.type) {
    case CLOSE_ALL_MENU:
      return {
        languageHiddenMenuOpened: false,
        profileHiddenMenuOpened: false
      };
    case TOGGLE_PROFILE_HIDDEN_MENU:
      return {
        languageHiddenMenuOpened: false,
        profileHiddenMenuOpened: !state.profileHiddenMenuOpened
      };
    case TOGGLE_LANGUAGE_HIDDEN_MENU:
      return {
        profileHiddenMenuOpened: false,
        languageHiddenMenuOpened: !state.languageHiddenMenuOpened
      };
    default:
      return newState;
  }
}