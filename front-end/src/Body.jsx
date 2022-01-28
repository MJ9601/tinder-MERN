import React, { useEffect, useState } from "react";
import TinderCard from "react-tinder-card";
import styled from "styled-components";
import Card from "./Card";
import axios from "./axios";

const Body = () => {
  const [person, setPerson] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const req = await axios.get("/tinderCard");
      setPerson(req.data);
    };
    getData();
  }, []);
  return (
    <Wrap>
      {person.map((person) => (
        <TinderCard preventSwipe={["up", "down"]} className="tinderCard">
          <Card src={person.imgUrl} name={person.name} />
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
