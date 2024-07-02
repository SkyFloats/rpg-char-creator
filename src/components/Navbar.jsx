import { NavbarContainer, Logo, NavLinks, NavLink, LoginButton } from '../styles';

export function Navbar() {
  return (
    <NavbarContainer>
      <Logo>SkyRPG</Logo>
      <NavLinks>
        <NavLink to="cards" smooth={true} duration={1000}>Home</NavLink>
        <NavLink to="info" smooth={true} duration={1000}>Mais Informações</NavLink>
        <NavLink to="contact" smooth={true} duration={1000}>Contate o Dev</NavLink>
      </NavLinks>
      <LoginButton>Login</LoginButton>
    </NavbarContainer>
  );
}