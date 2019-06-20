import React, { useEffect } from "react";
import { connect } from 'react-redux';
import { getFriends } from '../../state/actionCreators'
import PropTypes from "prop-types";
import FriendCard from "../FriendCard/FriendCard";

const FriendsList = ({ getFriends, friends, onDelete, onClickEdit, onCancelEdit }) => {
  useEffect(() => {
    getFriends();
  }, []);

  return (
    <>
      {friends.map(friend => (
        <div key={friend.id} className="friend-info">
          <FriendCard
            friend={friend}
            onDelete={onDelete}
            onClickEdit={onClickEdit}
          />
        </div>
      ))}
    </>
  );
};

FriendsList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      age: PropTypes.number.isRequired,
      email: PropTypes.string.isRequired
    })
  ).isRequired
};

function mapStateToProps(state) {
  return {
    friends: state.friendList.friendList
  };
}

export default connect(
  mapStateToProps,
  { getFriends }
)(FriendsList);
