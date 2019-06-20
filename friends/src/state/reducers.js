import * as types from './actionTypes';
import { combineReducers } from 'redux';

export const friendList = (
  state = {
    friendList: []
  },
  action
) => {
  switch (action.type) {
    case types.GET_ALL_FRIENDS:
      return { friendList: action.payload };
    case types.GET_FRIEND:
      return action.payload;
    case types.ADD_FRIEND:
      return action.payload;
    case types.DELETE_FRIEND:
      return action.payload;
    case types.UPDATE_FRIEND:
      return action.payload;
    default:
      return state;
  }
};

export const friendForm = (state = { editableFriend: undefined }, action) => {
  switch (action.type) {
    case types.SET_EDITABLE_FRIEND:
      return action.payload;
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
