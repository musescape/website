import styled from 'styled-components';

export const Section = styled.section`
  margin-top: 2rem;
  
  @supports (display: grid) {  
    margin-top: 0;
  }
  
  grid-area: subsection;

  @media all and (max-width: 992px) {
    grid-column-gap: 0.5rem;
  }
  
  h2 {
    font-size: 1.5em;
    font-weight: bold;
    margin-bottom: 1rem;
  }
`;

export const Projects = styled.section`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  // This is how you can make the block responsive
  // without media queries:
  //grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-template-rows: auto;
  grid-column-gap: 1rem;
  
  @media all and (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-column-gap: 0;
    grid-row-gap: 1rem;
  }
`;

export const Project = styled.figure`
  @supports (display: grid) {
    margin-top: 0;
    width: auto;
  }
  
  vertical-align: middle;
  width: auto;
  margin-left: 0;
  margin-right: 0;
  background-color: #fff;
  border-radius: 0.625rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  
  @media all and (max-width: 760px) {
    width: 100%;
    margin-top: 1rem;
  }
`;
