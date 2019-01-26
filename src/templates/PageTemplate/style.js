import styled from 'styled-components';
import { margins } from '../../theme';

export const Page = styled.div`
  display: grid;
  grid-gap: 2rem 1rem;
  grid-template-columns: 2fr 6fr 4fr;
  grid-template-rows: 3rem auto;
  grid-template-areas:
          "header header header"
          "content content sidebar"
          "subsection subsection subsection"
          "footer footer footer";
          

  
  @media all and (max-width: 768px) {
    grid-template-areas:
          "header header header"
          "content content content"
          "sidebar sidebar sidebar"
          "subsection subsection subsection"
          "footer footer footer";
  }
  
  @media all and (max-width: 576px) {
    grid-gap: 2rem 0;
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    grid-template-areas:
            "header"
            "content"
            "sidebar"
            "subsection"
            "footer";
  }
`;

export const Main = styled.main`
  margin-top: 2rem;
  
  ${margins}
  
  @supports (display: grid) {  
    margin-top: 0;
    width: auto;
  }
  
  /*--- Fallbacks ---*/
  width: 69%;
  display: inline-block;
  vertical-align: top;
  /*--- Fallbacks ---*/
  
  grid-area: content;
  
  h2 {
    font-size: 1.5em;
    margin-bottom: 1rem;
    font-weight: bold;
  }
  
  p {
    margin-bottom: 0;
  }
`;
