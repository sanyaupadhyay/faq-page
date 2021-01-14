import Faq from "./components/Faq";
import Contact from "./components/Contact";
import { Container, FaqContainer, Vertical, ContactContainer} from './appStyles';

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
