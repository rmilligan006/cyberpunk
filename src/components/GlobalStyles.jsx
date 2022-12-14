import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
* {
margin: 0;
padding: 0;
box-sizing: border-box;
}
html{
    &::-webkit-scrollbar{
        width: 0.5rem;
    }
    &::-webkit-scrollbar-thumb{
        background-color: #c41c16;
    }
    &::-webkit-scrollbar-track {
        background: white;
    }
}
body {
    font-family: 'Rajdhani', sans-serif;
    width: 100%;
    background: #890596;
    overflow-y: auto; 
}
h2{
    font-size: 3rem;
    font-family: 'Antonio', sans-serif;
    font-weight: lighter;
    color: #293462;
}
h3 {
    font-size: 1.5rem;
    color: #790252;
    padding: 1.5rem 0rem;
}
p{
    font-size: 1.2rem;
    line-height: 100%;
    color: #6E85B2;
}
img {
    display: block;
}
`;
export default GlobalStyles;
