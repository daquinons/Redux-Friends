import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { postFriend, setEditableFriend, updateFriend } from '../../state/actionCreators';
import styled from 'styled-components';

const StyledDiv = styled.div`
  background-color: white;
  height: 85px;
  width: 75%;
  margin: 2rem auto;
  padding: 2.5rem;
  border: 1px solid #dddfe2;
  border-radius: 4px;

  input {
    margin-right: 10px;
  }

  h3 {
    color: #365899;
  }
`;

const AddEditFriend = props => {
  const { postFriend, editableFriend } = props;
  const [formInput, setFormInput] = useState({
    name: '',
    age: '',
    email: ''
  });

  useEffect(() => {
    setFormInput({
      name: editableFriend ? editableFriend.name : '',
      age: editableFriend ? editableFriend.age : '',
      email: editableFriend ? editableFriend.email : ''
    });
  }, [editableFriend]);

  const onSubmitForm = event => {
    event.preventDefault();
    const friend = {
      ...editableFriend,
      name: formInput.name,
      age: Number(formInput.age),
      email: formInput.email
    };
    if (editableFriend) {
      props.updateFriend(friend);
      props.setEditableFriend(undefined)
    } else {
      postFriend(friend);
    }

    setFormInput({
      name: '',
      age: '',
      email: ''
    });
  };

  const onChangeInput = event => {
    event.persist();
    setFormInput(prevState => {
      let updatedState = { ...prevState };
      updatedState[event.target.name] = event.target.value;
      return updatedState;
    });
  };

  const onCancelClick = () => {
    props.setEditableFriend(undefined);
  }

  const textTitle = editableFriend ? 'Edit Friend' : 'Add Friend';

  const cancelButton = editableFriend ? (
    <button onClick={onCancelClick}>Cancel</button>
  ) : null;

  return (
    <StyledDiv className="add-friend-form">
      <h3>{textTitle}</h3>
      <form onSubmit={onSubmitForm}>
        <input
          type="text"
          name="name"
          value={formInput.name}
          id="add-name-input"
          placeholder="Name"
          onChange={onChangeInput}
        />
        <input
          type="text"
          name="age"
          value={formInput.age}
          id="add-age-input"
          placeholder="Age"
          onChange={onChangeInput}
        />
        <input
          type="email"
          name="email"
          value={formInput.email}
          id="add-email-input"
          placeholder="Email"
          onChange={onChangeInput}
        />

        <button type="submit">{textTitle}</button>
        {cancelButton}
      </form>
    </StyledDiv>
  );
};

function mapStateToProps(state) {
  return {
    editableFriend: state.friendForm.editableFriend
  };
}

export default connect(
  mapStateToProps,
  { postFriend, setEditableFriend, updateFriend }
)(AddEditFriend);
