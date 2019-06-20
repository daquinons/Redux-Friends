import React, { useEffect } from 'react';
import { Route, Redirect } from 'react-router-dom';
import Header from './components/Header/Header';
import AddEditFriend from './components/AddEditFriend/AddEditFriend';
import FriendsList from './components/FriendsList/FriendsList';
import Login from './components/Login/Login';
import './App.css';

function App(props) {
  useEffect(() => {
    //props.login('Lambda School', 'i<3Lambd4');
  }, []);

  return (
    <div className="App">
      <Header />
      <Route
        exact
        path="/"
        render={() => {
          if (localStorage.getItem('token')) {
            return (
              <>
                <AddEditFriend />
                <FriendsList />
              </>
            );
          }
          return <Redirect to="login" />;
        }}
      />

      <Route path="/login" component={Login} />
    </div>
  );
}

export default App;
