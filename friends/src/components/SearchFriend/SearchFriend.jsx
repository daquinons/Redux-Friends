import React from "react";

const SearchFriend = props => {
  const { onSearch } = props;

  const onChangeInput = event => {
    const textInput = event.target.value.toLowerCase();
    onSearch(textInput);
  };

  return (
    <input
      type="search"
      name="searchInput"
      id="search-input"
      placeholder="Search for a friend"
      onChange={onChangeInput}
    />
  );
};

export default SearchFriend;
