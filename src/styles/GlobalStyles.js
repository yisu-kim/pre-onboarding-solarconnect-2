import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

export const GlobalStyles = createGlobalStyle` 
    ${reset}
    a{
        text-decoration: none;
        color: inherit;
    }
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-size: 14px;
        background-color: #fff;
        color: #636363;
        display: flex;
        min-width: 1000px;
        justify-content: center;
        align-items: center;
        margin: 0 auto;
        padding-top: 80px;
    }
    input, button {
        background-color: transparent;
        border: none;
        outline: none;
    }
`;
