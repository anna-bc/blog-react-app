import ThemeActions from "../Actions/ThemeActions";
import initialState from "../initialState";

function themeReducer(state, action) {
  switch (action.type) {
    case ThemeActions.ToggleTheme:
        return { ...state, theme: state.theme === 'light' ? 'dark' : 'light'}
  }
};

export default themeReducer;
