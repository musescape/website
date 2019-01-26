import styled from 'styled-components';
import { margins } from '../../theme';

export const Header = styled.header`
  grid-area: header;

  background: var(--background); // takes the :root setting

  display: grid;
  grid-gap: 2rem 1rem;
  grid-template-columns: 2fr 6fr 4fr;
  grid-template-rows: 1fr;
  grid-template-areas:
          "logo menu menu";
`;

export const Logo = styled.div`
  grid-area: logo;
  align-self: center;
  
  ${margins}
  
  h1 a {
    font-size: 2em;
    font-weight: bold;
    margin: 0;
    text-decoration: none;
    color: black;
  }
`;
