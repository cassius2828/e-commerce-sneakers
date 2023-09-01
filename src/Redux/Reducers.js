import { combineReducers } from "redux";
import { TOGGLE_MODAL } from "./Actions";

const initialState = {};

export const toggleModalReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SHOW":
      return { ...state, [action.payload]: true };
    case "HIDE":
      return { ...state, [action.payload]: false };
    default:
      return state;
  }
};

//Reducer
const initialState2 = {
  showMyComponent: false,
};

export const showModal = (state = initialState2, action) => {
  switch (action.type) {
    case "SHOW_MODAL":
      return { ...state, showMyComponent: action.payload };
    default:
      return state;
  }
};

export const root = combineReducers({
  toggleModal: toggleModalReducer,
  showModal: showModal,
});
