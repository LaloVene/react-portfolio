export const initialState = {
  homeRef: null,
  aboutRef: null,
  backgroundRef: null,
  projectsRef: null,
};

const GlobalReducer = (state, action) => {
  switch (action.type) {
    case 'SET_REFS': {
      return {
        ...state,
        homeRef: action.homeRef,
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
