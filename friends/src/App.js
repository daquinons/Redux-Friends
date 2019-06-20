import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
//import * as actionCreators from "./state/actionCreators";
import { login } from './state/actionCreators';
import Header from './components/Header/Header';
import AddEditFriend from './components/AddEditFriend/AddEditFriend';
import FriendsList from './components/FriendsList/FriendsList';
import './App.css';

function App(props) {
  const [friendList, setFriendList] = useState([]);
  const [friendsToDisplay, setFriendsToDisplay] = useState([]);
  const [editableFriend, setEditableFriend] = useState(undefined);
  const URL = 'http://localhost:5000/friends';

  const getFriends = async () => {
    try {
      const friendsData = await axios.get(URL);
      setFriendList(friendsData.data);
      setFriendsToDisplay(friendsData.data);
    } catch (error) {
      console.log(error);
    }
  };

  const addNewFriend = async friend => {
    try {
      await axios.post(URL, friend);
      await getFriends();
    } catch (error) {
      console.log(error);
    }
  };

  const updateFriend = async friend => {
    try {
      console.log(`${URL}/${friend.id}`);
      await axios.put(`${URL}/${friend.id}`, {
        name: friend.name,
        age: friend.age,
        email: friend.email
      });
      await getFriends();
      cancelEdit();
    } catch (error) {
      console.log(error);
    }
  };

  const deleteFriend = async friend => {
    try {
      await axios.delete(`${URL}/${friend.id}`);
      await getFriends();
    } catch (error) {
      console.log(error);
    }
  };

  const chooseEditableFriend = friend => {
    setEditableFriend(friend);
  };

  const cancelEdit = () => {
    setEditableFriend(undefined);
  };

  useEffect(() => {
    props.login('Lambda School', 'i<3Lambd4');
  }, []);

  return (
    <div className="App">
      <Header />
      <AddEditFriend
        onAddFriend={addNewFriend}
        editableFriend={editableFriend}
        onEditFriend={updateFriend}
        onCancelEdit={cancelEdit}
      />
      <FriendsList
        friends={friendsToDisplay}
        onDelete={deleteFriend}
        onClickEdit={chooseEditableFriend}
      />
    </div>
  );
}

function mapStateToProps(state) {
  // STEP 9: FLESH OUT
  return {
    friendList: state.friendList.friendList,
    token: state.login.token
  };
}

export default connect(
  // STEP 10: CONNECT THE COMPONENT PASSING MAP STATE TO PROPS AS 1ST ARG
  mapStateToProps,
  // STEP 12: INJECT THE ACTION CREATORS AS 2ND ARG TO CONNECT
  { login }
)(App);
