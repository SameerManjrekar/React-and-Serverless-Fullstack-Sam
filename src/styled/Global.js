import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        margin: 0;
        box-sizing: border-box;
        color: #333;
        font-family: sans-serif;
        font-weight: 300;
    }

    h1, h2 {
        margin-bottom: 2rem;
    }
`;
