import * as Actions from './actions';
import initialState from '../store/initialState';

export const UserReducer = (state = initialState.user, action) => {
  switch (action.type) {
    case Actions.USER_INFO:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};
