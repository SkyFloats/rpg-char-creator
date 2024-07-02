import {Navbar} from './components/Navbar';
import {HeroSection} from './components/HeroSection';
import {CardsSection} from './components/CardsSection';
import {InfoSection} from './components/InfoSection';
import {Footer} from './components/Footer';
import { createGlobalStyle } from 'styled-components';
import backgroundImage from './assets/background.jpg';

const GlobalStyle = createGlobalStyle`
::-webkit-scrollbar {
  width: 8px;
}
::-webkit-scrollbar-track {
  background-color: rgba(0, 0, 0, 0.8);
}

::-webkit-scrollbar-thumb {
  background-color: rgba(0, 0, 0, 0.5);
}
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Arial', sans-serif;
    background: url(${backgroundImage}) no-repeat center center fixed;
    background-size: cover;
    color: white;
    align-items: center;
    justify-content: center;
  }
`;

function App() {
  return (
    <div>
      <GlobalStyle />
      <Navbar />
      <HeroSection />
      <CardsSection />
      <InfoSection />
      <Footer />
    </div>
  );
}

export default App;