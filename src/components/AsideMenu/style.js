import styled from 'styled-components';
import { margins } from '../../theme';

export const Aside = styled.aside`
  ${margins}
  
  @supports (display: grid) {  
    margin-top: 0;
    width: auto;
  }

  width: 30%;
  display: inline-block;
  vertical-align: top;
  
  grid-area: sidebar;
  
  h3 {
    font-size: 1.25em;
    font-weight: bold;
    margin-bottom: 1rem;
  }
`;
