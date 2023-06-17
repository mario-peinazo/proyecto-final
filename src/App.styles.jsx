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

    p {
        color: #b5b7b7;
        &:hover {
            color: #b5b7b7;
        }
    }

    h4 {
        color: rgb(181, 183, 183);
        font-weight: 400;
        &:hover {
            color: rgb(181, 183, 183);
         }
    }
`;
