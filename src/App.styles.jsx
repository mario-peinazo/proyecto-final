import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
	body {
		background-color: black;
        margin: 0px;
        font-family: sans-serif;
        color: white;
	}

    a {
        color: #b5b7b7;
        text-decoration:none;
    } &:hover {
        color:white;
    }

    a.active {
            color:white;
    }

    h1 {
        margin: 0px;
    font-size: 1.2rem;
    color: white;
    }
`;
