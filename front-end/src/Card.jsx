import styled from "styled-components";

const Card = ({ src, name }) => {
  return (
    <Wrap>
      <img src={src} />
      <h1>{name}</h1>
    </Wrap>
  );
};

export default Card;
const Wrap = styled.div`
  width: 95%;
  height: 95%;
  margin: 0 auto;
  position: relative;
  top: 0;
  > img {
    object-fit: cover;
    height: 100%;
    width: 100%;
    border-radius: 0.7rem;
    position: relative;
  }
  > h1 {
    color: #eee;
    position: absolute;
    bottom: 2rem;
    left: 2rem;
    z-index: 2;
    font-weight: 400;
  }
  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to bottom, transparent 80%, rgba(0, 0, 0, 0.7));
    z-index: 1;
    border-radius: 0.7rem;
  }
`;
