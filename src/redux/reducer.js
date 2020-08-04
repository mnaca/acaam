import { TOGGLE_PROFILE_HIDDEN_MENU, TOGGLE_LANGUAGE_HIDDEN_MENU, CLOSE_ALL_MENU, SET_USER } from '../actions/actions';
import apartment1picture1 from '../images/apartment-1_picture-1.jpg'
import vacationRentals1picture1 from '../images/vacation-rentals-1_picture-1.jpg';
import sharedRooms1picture1 from '../images/shared-rooms-1_picture-1.jpg';

const initialState = {
  languageHiddenMenuOpened: false,
  profileHiddenMenuOpened: false,
  user: null,
  apartments: [
    {
      owner: {name: "Vacho"},
      city: "Yerevan",
      district: "Arabkir",
      price: "200$",
      options: {bathrooms: 2, bedroom: 2, guests: 3},
      description: "",
      shortDescription: "Very comfortble home",
      id: "asd1",
      images: [apartment1picture1, apartment1picture1, apartment1picture1, apartment1picture1],
    },{
      owner: {name: "Vacho"},
      city: "Yerevan",
      district: "Arabkir",
      price: "200$",
      options: {bathrooms: 2, bedroom: 2, guests: 3},
      description: "",
      shortDescription: "Very comfortble home",
      id: "asd2",
      images: [apartment1picture1, apartment1picture1, apartment1picture1, apartment1picture1],
    }
  ],
  vacationRentals: [{
    owner: {name: "Qajo"},
    city: "Yerevan",
    district: "Ajabnyak",
    price: "700$",
    options: {bathrooms: 2, bedroom: 2, guests: 3},
    description: "",
    shortDescription: "Perfect place for harust mardkanc hamar",
    id: "asd1",
    images: [vacationRentals1picture1, vacationRentals1picture1, vacationRentals1picture1, vacationRentals1picture1],
  },{
    owner: {name: "Qajo"},
    city: "Yerevan",
    district: "Ajabnyak",
    price: "700$",
    options: {bathrooms: 2, bedroom: 2, guests: 3},
    description: "",
    shortDescription: "Perfect place for harust mardkanc hamar",
    id: "asd2",
    images: [vacationRentals1picture1, vacationRentals1picture1, vacationRentals1picture1, vacationRentals1picture1],
  }],
  sharedRooms: [{
    owner: {name: "Rashmud"},
    city: "Yerevan",
    district: "Bangladesh",
    price: "150$",
    options: {bathrooms: 0, bedroom: 0.5, guests: 3},
    description: "",
    shortDescription: "Tapasiayi ev ir barekamneri hamar",
    id: "asd1",
    images: [sharedRooms1picture1, sharedRooms1picture1, sharedRooms1picture1, sharedRooms1picture1],
  },{
    owner: {name: "Rashmud"},
    city: "Yerevan",
    district: "Bangladesh",
    price: "150$",
    options: {bathrooms: 0, bedroom: 0.5, guests: 3},
    description: "",
    shortDescription: "Tapasiayi ev ir barekamneri hamar",
    id: "asd2",
    images: [sharedRooms1picture1, sharedRooms1picture1, sharedRooms1picture1, sharedRooms1picture1],
  }]
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
        user: action.user
      }
    default:
      return newState;
  }
}