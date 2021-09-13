export const initialState = {
  aboutRef: null,
  backgroundRef: null,
  projectsRef: null,
};

const GlobalReducer = (state, action) => {
  switch (action.type) {
    case "SET_REFS": {
      return {
        ...state,
        aboutRef: action.aboutRef,
        backgroundRef: action.backgroundRef,
        projectsRef: action.projectsRef,
      };
    }
    default:
      return state;
  }
};

export default GlobalReducer;
