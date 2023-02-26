const intialState = {
  album: [],
};

const mainReducer = (state = intialState, action) => {
  switch (action.type) {
    case "VIEW_TRACKLIST":
      return {
        ...state,
        album: [...state.list, action.payload],
      };
    default:
      return state;
  }
};

export default mainReducer;
