import { NEXT, PREV } from "../actions";

const reducer = (state, action) => {
  if (action.type === NEXT) {
    const newPerson = state.currentPerson + 1;
    return {
      ...state,
      currentPerson: newPerson >= state.people.length ? 0 : newPerson,
    };
  }
  if (action.type === PREV) {
    const newPerson = state.currentPerson - 1;
    return {
      ...state,
      currentPerson: newPerson < 0 ? state.people.length - 1 : newPerson,
    };
  }
};

export default reducer;
