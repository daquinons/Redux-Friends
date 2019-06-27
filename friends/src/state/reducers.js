import * as types from './actionTypes';
import { combineReducers } from 'redux';

export const friendList = (
  state = {
    friendList: []
  },
  action
) => {
  switch (action.type) {
    case types.SET_ALL_FRIENDS:
      return { friendList: action.payload };
    default:
      return state;
  }
};

export const friendForm = (state = { editableFriend: undefined }, action) => {
  switch (action.type) {
    case types.SET_EDITABLE_FRIEND:
      return {editableFriend: action.payload};
    default:
      return state;
  }
};

export const login = (state = { token: undefined }, action) => {
  switch (action.type) {
    case types.LOGIN:
      return { token: action.payload };
    default:
      return state;
  }
};

export default combineReducers({
  friendList,
  friendForm,
  login
});
