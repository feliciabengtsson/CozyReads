import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
	:root {
	--color-neutral-light: white;
	--color-neutral-dark: black;
	
	--color-background: #F5F1E7;
	--color-secondary: #8B5E3C;
	--color-primary: #BFA58A;
	--color-accent: #3B3A30;
	}
	* {
	box-sizing: border-box;
	}  
	body {
		margin: 0;
		background: var(--color-background);
		color: var(--color-neutral-dark);
		min-height: 100vh;
		min-width: 320px;
		font-family: Playfair Display;
		font-style: normal;
	}
	h1 {
		color: var(--Secondary, #69472D);
		font-size: 36px;
		font-weight: 400;
	}
	h2 {
		color: var(--Secondary, #69472D);
		font-size: 24px;
		font-weight: 400;
	}
	h3 {
		color: var(--Color-dark, rgba(30, 30, 30, 0.90));
		font-size: 16px;
		font-weight: 600;
	}
	p {
		color: var(--Color-dark, rgba(30, 30, 30, 0.90));
		font-size: 16px;
				font-weight: 400;
	}
`;
 
export default GlobalStyle;