import { TOGGLE_PROFILE_HIDDEN_MENU, TOGGLE_LANGUAGE_HIDDEN_MENU, CLOSE_ALL_MENU } from '../actions/actions';
import apartment1picture1 from '../images/apartment-1_picture-1.jpg'
const initialState = {
  languageHiddenMenuOpened: false,
  profileHiddenMenuOpened: false,
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
    },{
      owner: {name: "Vacho"},
      city: "Yerevan",
      district: "Arabkir",
      price: "200$",
      options: {bathrooms: 2, bedroom: 2, guests: 3},
      description: "",
      shortDescription: "Very comfortble home",
      id: "asd3",
      images: [apartment1picture1, apartment1picture1, apartment1picture1, apartment1picture1],
    },{
      owner: {name: "Vacho"},
      city: "Yerevan",
      district: "Arabkir",
      price: "200$",
      options: {bathrooms: 2, bedroom: 2, guests: 3},
      description: "",
      shortDescription: "Very comfortble home",
      id: "asd4",
      images: [apartment1picture1, apartment1picture1, apartment1picture1, apartment1picture1],
    },{
      owner: {name: "Vacho"},
      city: "Yerevan",
      district: "Arabkir",
      price: "200$",
      options: {bathrooms: 2, bedroom: 2, guests: 3},
      description: "",
      shortDescription: "Very comfortble home",
      id: "asd5",
      images: [apartment1picture1, apartment1picture1, apartment1picture1, apartment1picture1],
    },{
      owner: {name: "Vacho"},
      city: "Yerevan",
      district: "Arabkir",
      price: "200$",
      options: {bathrooms: 2, bedroom: 2, guests: 3},
      description: "",
      shortDescription: "Very comfortble home",
      id: "asd6",
      images: [apartment1picture1, apartment1picture1, apartment1picture1, apartment1picture1],
    },{
      owner: {name: "Vacho"},
      city: "Yerevan",
      district: "Arabkir",
      price: "200$",
      options: {bathrooms: 2, bedroom: 2, guests: 3},
      description: "",
      shortDescription: "Very comfortble home",
      id: "asd7",
      images: [apartment1picture1, apartment1picture1, apartment1picture1, apartment1picture1],
    },{
      owner: {name: "Vacho"},
      city: "Yerevan",
      district: "Arabkir",
      price: "200$",
      options: {bathrooms: 2, bedroom: 2, guests: 3},
      description: "",
      shortDescription: "Very comfortble home",
      id: "asd8",
      images: [apartment1picture1, apartment1picture1, apartment1picture1, apartment1picture1],
    },{
      owner: {name: "Vacho"},
      city: "Yerevan",
      district: "Arabkir",
      price: "200$",
      options: {bathrooms: 2, bedroom: 2, guests: 3},
      description: "",
      shortDescription: "Very comfortble home",
      id: "asd9",
      images: [apartment1picture1, apartment1picture1, apartment1picture1, apartment1picture1],
    },
  ]
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
    default:
      return newState;
  }
}