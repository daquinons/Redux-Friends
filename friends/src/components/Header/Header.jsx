import React from "react";
import styled from "styled-components";

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-around;
  align-items: baseline;
  height: 85px;
  background-color: #2851A3;
  color: white;
`;

const Header = props => {
  return (
    <StyledHeader>
      <h1>Friendbook</h1>
      {props.children}
    </StyledHeader>
  );
};

export default Header;