import './App.css';
import Faq from './Faq';
import Contact from './contact';

function App() {
  return (
    <div className="flex-container">
      <div className="flex-container-faq"> <Faq /></div>
      <div className="flex-container-contact"><Contact /></div>
    </div>
  );
}

export default App;
