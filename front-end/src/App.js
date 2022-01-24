import styled from "styled-components";
import Body from "./Body";
import Footer from "./Footer";
import Header from "./Header";

function App() {
  return (
    <Wrapper>
      <ContentWrapper>
        <Header />
        <Body />
        <Footer />
      </ContentWrapper>
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
  display: grid;
  place-items: center;
`;
const ContentWrapper = styled.div`
  height: 70vh;
  width: 35rem;
  display: block;
`;
