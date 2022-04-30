export const rootStore = {
  position: "",
  detailMarmut:{

  }
};

const Reducer = (state = rootStore, action) => {
  if (action.type === "home") {
    return {
      ...state,
      position: "home",
    };
  }
  if(action.type === "detail"){
    return{
      ...state,
      detailMarmut:action.value
    }
  }
  return state;
};

export default Reducer;
