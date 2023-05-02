import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Audiowide&family=Black+Ops+One&family=Bruno+Ace+SC&family=Nova+Square&display=swap');

* {
    margin: 0;
    padding: 0;
}



body {
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    background-color: #f2f2f2;
    box-sizing: border-box;
    font-family: 'Audiowide', cursive,
                 'Black Ops One', cursive,
                 'Bruno Ace SC', cursive,
                 'Nova Square', cursive,
                 sans-serif;
}

:root {
--verdePrimario: #4D9B44;
--verdeSecundario: #006633;
--vermelhoPrimario: #c80000;
--vermelhoSecundario: #a80000;
--bgVerde: rgba(183, 229, 192, 0.5);
}

`;

export default GlobalStyle;
