import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
 *{
     margin: 0;
     padding: 0;
     box-sizing: border-box;
 }
 html, border-style, #root{
    width: 100%;
    height: 100%;
    min-width: 360px;
 }
 *, input{
     border: 0;
     background: none;
     font-family: Roboto, sans-serif;
 }
 html {
    background: var(--white);
 }
 :root{ 
     --white: #ffffff;
     --black: #000000;
     --filter-color: #323232;
     --filter-background: #D18000;
     --header: #5C16C5;
     --background: #2D0C5E;
     --subtitle: #646464;
 }
`;
