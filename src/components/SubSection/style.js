import styled from 'styled-components';
import { margins } from '../../theme';

export const SectionContainer = styled.section`
  ${margins}
  
  @supports (display: grid) {  
    margin-top: 0;
  }
  
  grid-area: subsection;

  @media all and (max-width: 992px) {
    grid-column-gap: 0.5rem;
  }
`;
