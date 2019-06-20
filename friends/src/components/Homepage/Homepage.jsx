import React from 'react';
import AddEditFriend from '../AddEditFriend/AddEditFriend';
import FriendsList from '../FriendsList/FriendsList';
import withProtectedRoute from '../Login/withProtectedRoute';

const Homepage = () => {
  return (
    <>
      <AddEditFriend />
      <FriendsList />
    </>
  );
};

export default withProtectedRoute(Homepage);
