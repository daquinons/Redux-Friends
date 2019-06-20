import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { login } from './state/actionCreators';
import Header from './components/Header/Header';
import AddEditFriend from './components/AddEditFriend/AddEditFriend';
import FriendsList from './components/FriendsList/FriendsList';
import './App.css';

function App(props) {
  useEffect(() => {
    props.login('Lambda School', 'i<3Lambd4');
  }, [props]);

  return (
    <div className="App">
      <Header />
      <AddEditFriend
      />
      <FriendsList
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
