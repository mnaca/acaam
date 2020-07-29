const initialState = {
  users: []
}

export default function reducer(state = initialState, action) {
  const newState = { ...state }
  return newState;
}