import axios from 'axios';
import axiosImproved from '../axios';
import * as types from './actionTypes';

const API_URL = 'http://localhost:5000/api/';

export const addFriends = friends => {
  return {
    type: types.SET_ALL_FRIENDS,
    payload: friends
  };
};

export const setToken = token => {
  return {
    type: types.LOGIN,
    payload: token
  };
};

export const login = (username, password) => dispatch => {
  const credentials = { username, password };
  axios
    .post(API_URL + 'login', credentials)
    .then(res => {
      localStorage.setItem('token', res.data.payload);
      dispatch(setToken(res.data.payload));
    })
    .catch(error => {
      console.log(error);
    });
};

export const getFriends = () => dispatch => {
  axiosImproved()
    .get(API_URL + 'friends')
    .then(res => {
      dispatch(addFriends(res.data));
    })
    .catch(error => {
      console.log(error);
    });
};

export const postFriend = (friend) => dispatch => {
  axiosImproved()
    .post(API_URL + 'friends', friend)
    .then(() => {
      dispatch(getFriends());
    })
    .catch(error => {
      console.log(error);
    });
};

export const deleteFriend = friend => dispatch => {
  axiosImproved()
    .delete(API_URL + 'friends/' + friend.id)
    .then(res => {
      dispatch(getFriends());
    })
    .catch(error => {
      console.log(error);
    });
};
