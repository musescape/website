import reset from './reset';

const globalStyles = `
	${reset}
	
  @import url('https://fonts.googleapis.com/css?family=Work+Sans:300,600');
  
  :root {
    --background: rgba(0, 214, 170, .85);
  }

  *, *::before, *::after {
    box-sizing: border-box;
  }
  
  html {
    font-size: 16px;
    font-family: Georgia, serif;
  }
  
  body {
    background-color: #fbfbfb;
  }
  
  h1, h2, h3 {
    margin-top: 0;
  }
  
  @media all and (max-width: 768px) {
    html {
      font-size: 14px;
    }
  }
`;

const color = {
	black: '#212121',
	gray: '#616161',
	white: '#fff',
	primary: '#1976d2',
	secondary: '#7032d2',
	danger: '#d32f2f',
	alert: '#ffa000',
	success: '#388e3c',
};

export {
	globalStyles,
	color
};
