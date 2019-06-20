import React from 'react';
import { connect } from 'react-redux';
import { login } from '../../state/actionCreators';
import { Redirect } from 'react-router-dom';
import styled from 'styled-components';

const StyledDiv = styled.div`
  background-color: white;
  height: 100px;
  width: 75%;
  padding: 2.5rem;
  margin: 20px auto;
  border: 1px solid #dddfe2;
  border-radius: 4px;
`;

const Login = props => {
  const usernameInput = React.createRef();
  const passwordInput = React.createRef();

  const onLogin = () => {
    props.login(usernameInput.current.value, passwordInput.current.value);
  };

  if (props.token) {
    return <Redirect to="/" />
  }
  
  return (
    <StyledDiv className="friend-card">
      <p><input ref={usernameInput} type="text" name="" id="" placeholder="Username"/></p>
      <p><input ref={passwordInput} type="password" name="" id="" placeholder="Password"/></p>
      <p><button type="submit" onClick={onLogin}>Login</button></p>
    </StyledDiv>
  );
};

function mapStateToProps(state) {
  return {
    token: state.login.token
  };
}

export default connect(
  mapStateToProps,
  { login }
)(Login);
