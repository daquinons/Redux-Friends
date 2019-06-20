import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { login } from './state/actionCreators';
import Header from './components/Header/Header';
import AddEditFriend from './components/AddEditFriend/AddEditFriend';
import FriendsList from './components/FriendsList/FriendsList';
import './App.css';

function App(props) {
  const [editableFriend, setEditableFriend] = useState(undefined);
  const URL = 'http://localhost:5000/friends';

  const addNewFriend = async friend => {
    try {
      await axios.post(URL, friend);
      //await getFriends();
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
  }, [props]);

  return (
    <div className="App">
      <Header />
      <AddEditFriend
        onAddFriend={addNewFriend}
        editableFriend={editableFriend}
      />
      <FriendsList
        onClickEdit={chooseEditableFriend}
      />
    </div>
  );
}

function mapStateToProps(state) {
  return {
    token: state.login.token
  };
}

export default connect(
  mapStateToProps,
  { login }
)(App);
