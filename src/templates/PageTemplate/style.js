import styled from 'styled-components';

export const Page = styled.div`
  display: grid;
  margin: 0 2rem;
  grid-gap: 2rem 1rem;
  grid-template-columns: 2fr 6fr 4fr;
  grid-template-rows: 3rem auto;
  grid-template-areas:
          "logo menu menu"
          "content content sidebar"
          "subsection subsection subsection"
          "footer footer footer";
          
  @media all and (max-width: 992px) {
    margin: 0 1rem;
  }
  
  @media all and (max-width: 768px) {
    grid-template-areas:
          "logo menu menu"
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
            "logo"
            "menu"
            "content"
            "sidebar"
            "subsection"
            "footer";
  }
`;

export const Main = styled.main`
  margin-top: 2rem;
  
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
  
  @media all and (max-width: 760px) {
    display: block;
    width: 100%;
  }
  
  h2 {
    font-size: 1.5em;
    margin-bottom: 1rem;
    font-weight: bold;
  }
  
  p {
    margin-bottom: 0;
  }
`;
