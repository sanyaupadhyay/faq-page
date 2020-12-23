import Faq from "./Faq";
import Contact from "./contact";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  @media (max-width: 769px) {
    margin-right: 5%;
    flex-direction: column;
    flex: 100%;
  }
`;

const FaqContainer = styled.div`
  box-sizing: border-box;
  margin-left: 7%;
  display: flex;
  margin-top: 5%;
  flex: 60%;
  font-size: 30px;
  padding-bottom: 1px;
  @media (max-width: 769px) {
    margin-left: 0%;
    flex: 100%;
    justify-content: left;
  }
`;
const Vertical = styled.div`
  display: flex;
  border-left: 1px solid #bcbcbc;
  height: 500px;
  position: absolute;
  margin-left: 63%;
  margin-top: 5%;
  @media (max-width: 769px) {
    border-left: 0px;
  }
`;

const ContactContainer = styled.div`
  margin-top: 5%;
  margin-left: 5%;
  display: flex;
  flex: 40%;
  @media (max-width: 769px) {
    margin-left: 0%;
    flex: 100%;
    justify-content: left;
  }
`;

function App() {
  return (
    <Container>
      <FaqContainer>
        <Faq />
      </FaqContainer>
      <Vertical />
      <ContactContainer>
        <Contact />
      </ContactContainer>
    </Container>
  );
}

export default App;
