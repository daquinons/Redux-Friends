import React, { useEffect } from 'react';
import { Route, Redirect } from 'react-router-dom';
import Header from './components/Header/Header';
import Homepage from './components/Homepage/Homepage';
import Login from './components/Login/Login';
import './App.css';

function App(props) {
  useEffect(() => {
    //props.login('Lambda School', 'i<3Lambd4');
  }, []);

  return (
    <div className="App">
      <Header />
      <Route exact path="/" component={Homepage} />
      <Route path="/login" component={Login} />
    </div>
  );
}

export default App;
