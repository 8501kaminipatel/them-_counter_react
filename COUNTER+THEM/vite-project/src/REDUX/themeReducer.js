import { HANDLE_THEME } from './action';

const initialState = {
  theme: 'light'
};

const themeReducer = (state = initialState, action) => {
  switch (action.type) {
    case HANDLE_THEME:
      return {
        ...state,
        theme: action.payload
      };
    default:
      return state;
  }
};

export default themeReducer;
