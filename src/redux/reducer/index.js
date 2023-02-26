const intialState = {
  album: [],
  artist: [],
};

const mainReducer = (state = intialState, action) => {
  switch (action.type) {
    case "VIEW_ALBUM":
      return {
        ...state,
        album: [action.payload],
      };
    case "VIEW_ARTIST":
      return {
        ...state,
        artist: [action.payload],
      };
    default:
      return state;
  }
};

export default mainReducer;
