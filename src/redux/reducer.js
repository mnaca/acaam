import { TOGGLE_PROFILE_HIDDEN_MENU, TOGGLE_LANGUAGE_HIDDEN_MENU, CLOSE_ALL_MENU, SET_USER, HOST_HOME, LOAD_ALL_HOMES } from '../actions/actions';

const initialState = {
  languageHiddenMenuOpened: false,
  profileHiddenMenuOpened: false,
  userInfo: null,
  apartments: [
  ],
  vacationRentals: [
  ],
  sharedRooms: []
}

export default function reducer(state = initialState, action) {
  let newState = { ...state };

  switch (action.type) {
    case CLOSE_ALL_MENU:
      return {
        ...state,
        languageHiddenMenuOpened: false,
        profileHiddenMenuOpened: false
      };
    case TOGGLE_PROFILE_HIDDEN_MENU:
      return {
        ...state,
        languageHiddenMenuOpened: false,
        profileHiddenMenuOpened: !state.profileHiddenMenuOpened
      };
    case TOGGLE_LANGUAGE_HIDDEN_MENU:
      return {
        ...state,
        profileHiddenMenuOpened: false,
        languageHiddenMenuOpened: !state.languageHiddenMenuOpened
      };
    case SET_USER:
      return {
        ...state,
        userInfo: action.userInfo
      }
    case HOST_HOME:
      state[action.home.house].push(action.home)
      return {
        ...state
      }
    case LOAD_ALL_HOMES:
      return {
        ...state,
        apartments: action.apartments,
        vacationRentals: action.vacationRentals,
        sharedRooms: action.sharedRooms
      }
    default:
      return newState;
  }
}