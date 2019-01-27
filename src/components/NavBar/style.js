import styled from 'styled-components';
import { margins } from '../../theme';

export const Nav = styled.nav`
  ${margins}
  
  @supports (display: grid) {  
    margin-top: 0;
  }
  
  @media all and (max-width: 576px) {
    justify-self: start;
  }
  
  @media screen and (min-width: 768px) {
    // all: unset; /* this causes issues with Edge, since it's unsupported */
    
    /* start Edge support stuff */
    position: relative;
    text-align: left;
    transition: none;
    transform: scale(1,1);
    background: none;
    top: initial;
    left: initial;
    /* end Edge support stuff */	
    
    grid-area: menu;
    justify-self: end;    
	}
  
  @media screen and (max-width: 767px) {
    background: var(--background);
    
    position: absolute;
    left: -1em;
    top: 3em;
    width: 100%;

    transform: scale(1, 0);
    transform-origin: top;
    transition: transform 400ms ease-in-out;
	}
`;

export const NavUl = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  
  display: flex;
  
  @media screen and (max-width: 767px) {	
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
	}
`;

export const NavLi = styled.li`
  list-style-type: none;
  padding: 0;
  font-size: 1.1rem;
  margin-right: 0.5rem;
  width: 100%;
  
  margin-bottom: 1em;
	margin-left: 1em;
  
  a {
    text-decoration: none;
    text-transform: uppercase;
    color: white;
  }
  
  a {
		color: white;
		text-decoration: none;
		font-size: 1.2rem;
		text-transform: uppercase;
		opacity: 0;
		transition: opacity 150ms ease-in-out;
	}
	
	a:hover {
		color: #000;
	}

  @media screen and (max-width: 767px) {
	  margin-top: 0.5em;
	  margin-left: 2em;
	}

  @media screen and (min-width: 768px) {
    margin-top: 1em;
	  margin-left: 2em;
	  
		a {
			opacity: 1;
			position: relative;
		}
		
		a::before {
			content: '';
			display: block;
			height: 5px;
			background: black;
			position: absolute;
			bottom: -.5em;
			left: 0;
			right: 0;
			transform: scale(0, 1);
			transition: transform ease-in-out 250ms;
		}
		
		a:hover::before {
			transform: scale(1,1);
		}
	}
`;
