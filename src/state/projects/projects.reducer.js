import { ADD_PROJECT } from './projects.actions';

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_PROJECT:
      return [
        ...state,
        action.payload
      ];
    default:
      return state;
  }
};