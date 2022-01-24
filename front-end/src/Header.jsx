import { Forum, Person } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <Wrap>
      <IconButton>
        <Person sx={{ fontSize: "2.5rem" }} />
      </IconButton>
      <Img src="https://logos-world.net/wp-content/uploads/2020/09/Tinder-Emblem.png" />
      <IconButton>
        <Forum sx={{ fontSize: "2.5rem" }} />
      </IconButton>
    </Wrap>
  );
};

export default Header;

const Wrap = styled.div`
  width: 100%;
  padding: 0.5rem 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Img = styled.img`
  width: 4rem;
  object-fit: cover;
`;
