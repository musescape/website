import styled from 'styled-components';

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
