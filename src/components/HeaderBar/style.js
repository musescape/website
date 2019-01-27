import styled from 'styled-components';
import { margins } from '../../theme';

export const Header = styled.header`
  grid-area: header;
  min-height: 3em;

  background: var(--background); // takes the :root setting from global

  display: grid;
  grid-template-columns: 1fr auto 1fr;
  position: fixed;
  width: 100%;
  
  grid-template-areas: "logo toggle menu";
  
  #nav-toggle:checked ~ nav {
		transform: scale(1,1);
	}

	#nav-toggle:checked ~ nav a {
		opacity: 1;
		transition: opacity 250ms ease-in-out 250ms;
	}    
  
	@media screen and (min-width: 768px) {
		#nav-toggle-label, #nav-toggle {
			display: none;
		}
	}
	
  @media screen and (max-width: 767px) {
    grid-template-areas: "toggle logo .";
	}
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

export const ToggleInput = styled.input`
  grid-area: toggle;
  align-self: center;
  justify-self: start;
  margin-left: 1em;
  visibility: hidden;
  width: 2.5rem;
  height: 2.5rem;

	:focus ~ #nav-toggle-label {
		outline: 3px solid rgba(lightblue, .75);
	}
`;

export const ToggleLabel = styled.label`
  grid-area: toggle;
  align-self: center;
  justify-self: start;
  
  height: 100%;
  margin-left: 1em;
  margin-top: 2.5em;
  
  display: flex;

	span,
	span::before,
	span::after {
		display: block;
		background: white;
		height: 2px;
		width: 2em;
		border-radius: 2px;
		position: relative;
	}

	span::before,
	span::after {
		content: '';
		position: absolute;
	}

	span::before {
		bottom: 7px;
	}

	span::after {
		top: 7px;
	}
`;
