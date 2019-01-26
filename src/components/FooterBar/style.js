import styled from 'styled-components';

export const Footer = styled.footer`
  margin-top: 2rem;
  
  @supports (display: grid) {  
    margin-top: 0;
  }
  
  grid-area: footer;
`;
