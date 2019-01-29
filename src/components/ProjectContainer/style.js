import styled from 'styled-components';

export const ProjectHeading = styled.h2`
  font-size: 1.5em;
  font-weight: bold;
  margin-bottom: 1rem;
`;

export const ProjectContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  
  // This is how you can make the block responsive
  // without media queries:
  // grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  
  grid-template-rows: auto;
  grid-column-gap: 1rem;
  
  @media all and (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-column-gap: 0;
    grid-row-gap: 1rem;
  }
`;
