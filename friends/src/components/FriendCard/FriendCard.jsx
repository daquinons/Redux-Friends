import React from 'react';
import { connect } from 'react-redux';
import { setEditableFriend } from '../../state/actionCreators';
import styled from 'styled-components';

const StyledDiv = styled.div`
  background-color: white;
  height: 100px;
  width: 75%;
  padding: 2.5rem;
  margin: 20px auto;
  border: 1px solid #dddfe2;
  border-radius: 4px;
  position: relative;
  cursor: pointer;

  #delete-button {
    position: absolute;
    top: 15px;
    right: 30px;
    color: #385898;
    cursor: pointer;
  }

  .friend-name {
    color: #365899;
    font-weight: 600;
  }
`;

const FriendCard = props => {
  const { friend, onDelete, setEditableFriend } = props;

  const onClickDelete = event => {
    event.stopPropagation();
    onDelete(friend);
  };

  const onClickUpdate = () => {
    setEditableFriend(friend);
  };

  return (
    <StyledDiv className="friend-card" onClick={onClickUpdate}>
      <p className="friend-name">{friend.name}</p>
      <p>Age: {friend.age}</p>
      <p>Email: {friend.email}</p>
      <span id="delete-button" onClick={onClickDelete}>
        X
      </span>
    </StyledDiv>
  );
};

function mapStateToProps(state) {
  return {};
}

export default connect(
  mapStateToProps,
  { setEditableFriend }
)(FriendCard);
