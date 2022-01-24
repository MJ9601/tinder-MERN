import React, { useState } from "react";
import TinderCard from "react-tinder-card";
import styled from "styled-components";
import Card from "./Card";

const Body = () => {
  const [person, setPerson] = useState([
    {
      name: "Sandra Bullock",
      url: "https://m.media-amazon.com/images/M/MV5BMTI5NDY5NjU3NF5BMl5BanBnXkFtZTcwMzQ0MTMyMw@@._V1_UY1200_CR94,0,630,1200_AL_.jpg",
    },
    {
      name: "Sandra Bullock",
      url: "https://m.media-amazon.com/images/M/MV5BMTI5NDY5NjU3NF5BMl5BanBnXkFtZTcwMzQ0MTMyMw@@._V1_UY1200_CR94,0,630,1200_AL_.jpg",
    },
    {
      name: "Sandra Bullock",
      url: "https://m.media-amazon.com/images/M/MV5BMTI5NDY5NjU3NF5BMl5BanBnXkFtZTcwMzQ0MTMyMw@@._V1_UY1200_CR94,0,630,1200_AL_.jpg",
    },
    {
      name: "Sandra Bullock",
      url: "https://m.media-amazon.com/images/M/MV5BMTI5NDY5NjU3NF5BMl5BanBnXkFtZTcwMzQ0MTMyMw@@._V1_UY1200_CR94,0,630,1200_AL_.jpg",
    },
  ]);
  return (
    <Wrap>
      {person.map((person) => (
        <TinderCard preventSwipe={["up", "down"]} className="tinderCard">
          <Card src={person.url} name={person.name} />
        </TinderCard>
      ))}
    </Wrap>
  );
};

export default Body;
const Wrap = styled.div`
  width: 100%;
  height: 85%;
  margin-bottom: 3rem;
  display: grid;
  place-items: center;
  overflow-y: hidden;
  position: relative;
`;
