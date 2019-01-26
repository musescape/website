import styled from 'styled-components';
import { margins } from '../../theme';

export const Nav = styled.nav`
  ${margins}
  
  @supports (display: grid) {  
    margin-top: 0;
  }

  grid-area: menu;
  justify-self: end;
  align-self: center;
    
  @media all and (max-width: 576px) {
    justify-self: start;
  }
`;

export const NavUl = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
`;

export const NavLi = styled.li`
  list-style-type: none;
  padding: 0;
  font-size: 1.1rem;
  margin-right: 0.5rem;
  
  a {
    text-decoration: none;
    text-transform: uppercase;
    color: white;
  }
`;
