import styled from 'styled-components';
import { margins } from '../../theme';

export const Footer = styled.footer`
  ${margins}
  
  @supports (display: grid) {  
    margin-top: 0;
  }
  
  grid-area: footer;
`;
