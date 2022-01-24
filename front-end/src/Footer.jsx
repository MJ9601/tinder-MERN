import { Close, Favorite, FlashOn, Replay, Star } from "@mui/icons-material";
import React from "react";
import styled from "styled-components";

const Footer = () => {
  const customButton = (Icon, color) => (
    <Container>
      <Icon sx={{ color: color, fontSize: "2.3rem" }} />
    </Container>
  );
  return (
    <Wrap>
      {customButton(Replay, "yellow")}
      {customButton(Close, "red")}
      {customButton(Star, "blue")}
      {customButton(Favorite, "green")}
      {customButton(FlashOn, "purple")}
    </Wrap>
  );
};

export default Footer;

const Wrap = styled.div`
  width: 100%;
  padding: 0 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 100;
`;
const Container = styled.div`
  display: grid;
  place-items: center;
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  background-color: #fff;
  box-shadow: 0.1rem 0rem 0.7rem 0.5rem rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: all 0.4s ease;
  &:hover {
    box-shadow: none;
  }
`;
