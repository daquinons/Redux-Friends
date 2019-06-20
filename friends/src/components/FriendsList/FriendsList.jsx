import React, { useEffect } from "react";
import { connect } from 'react-redux';
import { getFriends, deleteFriend } from '../../state/actionCreators'
import PropTypes from "prop-types";
import FriendCard from "../FriendCard/FriendCard";

const FriendsList = ({ getFriends, friends, deleteFriend, onClickEdit, onCancelEdit }) => {
  useEffect(() => {
    getFriends();
  }, [getFriends]);

  return (
    <>
      {friends.map(friend => (
        <div key={friend.id} className="friend-info">
          <FriendCard
            friend={friend}
            onDelete={deleteFriend}
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
  { getFriends, deleteFriend }
)(FriendsList);
