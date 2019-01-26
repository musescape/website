import styled from 'styled-components';

export const Aside = styled.aside`
  margin-top: 2rem;
  
  @supports (display: grid) {  
    margin-top: 0;
    width: auto;
  }

  width: 30%;
  display: inline-block;
  vertical-align: top;
  padding: 1rem;
  
  grid-area: sidebar;
  
  h3 {
    font-size: 1.25em;
    font-weight: bold;
    margin-bottom: 1rem;
  }
`;
