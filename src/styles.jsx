import styled from 'styled-components';
import { Link } from 'react-scroll';

// Navbar styles
export const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 20px;
  background: rgba(0, 0, 0, 0.8);
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
`;

export const Logo = styled.h1`
  margin: 0;
  font-size: 24px;
`;

export const NavLinks = styled.div`
  display: flex;
  gap: 20px;
`;

export const NavLink = styled(Link)`
  cursor: pointer;
  text-decoration: none;
  color: white;
  &:hover {
    color: #f00;
  }
`;

export const LoginButton = styled.button`
  background-color: #f00;
  color: white;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  &:hover {
    background-color: #c00;
  }
`;

// HeroSection styles
export const HeroContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  text-align: center;
`;

export const Title = styled.h1`
  font-size: 64px;
  margin-bottom: 20px;
  font-family: "EB Garamond", serif;
  color: White;
`;

// CardsSection styles
export const CardsContainer = styled.section`
  display: flex;
  justify-content: center;
  gap: 40px;
  padding: 40px 20px;
  flex-wrap: wrap;
`;

export const Card = styled.div`
  background: white;
  color: black;
  width: 300px;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  text-align: center;
`;

export const CardTitle = styled.h3`
  margin-bottom: 20px;
`;

export const CardImage = styled.img`
  width: 100%;
  height: auto;
  margin-bottom: 20px;
`;

export const CardButton = styled.button`
  background-color: #8B0000;
  color: white;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  &:hover {
    background-color: #660000;
  }
`;

// InfoSection styles
export const InfoContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 60px 20px;
  background: rgba(0, 0, 0, 0.8);
`;

export const InfoCard = styled.div`
  display: flex;
  align-items: center;
  background: white;
  color: black;
  width: 80%;
  margin-bottom: 20px;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
`;

export const DevImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-right: 20px;
`;

export const DevInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const DevName = styled.h3`
  margin: 0;
`;

export const DevDescription = styled.p`
  margin: 5px 0 0 0;
`;

// Footer styles
export const FooterContainer = styled.footer`
  padding: 20px;
  background: rgba(0, 0, 0, 0.8);
  text-align: center;
  color: white;
`;