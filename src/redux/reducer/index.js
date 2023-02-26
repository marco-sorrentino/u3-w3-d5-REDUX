const intialState = {
  album: [],
};

const mainReducer = (state = intialState, action) => {
  switch (action.type) {
    case "VIEW_ALBUM":
      return {
        ...state,
        album: [action.payload],
      };
    default:
      return state;
  }
};

export default mainReducer;
