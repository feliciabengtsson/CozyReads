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
		display: flex;
		flex-direction: column;
		margin: 0;
		background: var(--color-background);
		color: var(--color-neutral-dark);
		min-height: 100vh;
		min-width: 320px;
		overflow: hidden;
	}
	a {
		color: white;
		&:hover {
			color: var(--color-accent);
		}
		&:active {
			color: var(--color-secondary);
		}
	}
`;
 
export default GlobalStyle;