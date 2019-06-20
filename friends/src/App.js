import React from 'react';
import { Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Homepage from './components/Homepage/Homepage';
import Login from './components/Login/Login';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Route exact path="/" component={Homepage} />
      <Route path="/login" component={Login} />
    </div>
  );
}

export default App;
