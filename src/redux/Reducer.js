export const rootStore = {
  position: "",
  information: false,
};

const Reducer = (state = rootStore, action) => {
  if (action.type === "information") {
    return {
      ...state,
      information: !state.information,
    };
  } else if (action.type === "home") {
    return {
      ...state,
      position: "home",
    };
  }
  return state
};

export default Reducer;