import styled from 'styled-components';

export const Nav = styled.nav`
  margin-top: 2rem;
  
  @supports (display: grid) {  
    margin-top: 0;
  }

  grid-area: menu;
  align-self: center;
  justify-self: end;
    
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
`;
