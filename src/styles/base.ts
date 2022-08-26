import { createGlobalStyle } from "styled-components";

const GlobalBase = createGlobalStyle`

:root {

    --color-white: #FFFFFF;

    --color-primary: #FF577F;
    --color-primary-focus: #FF427F;
    --color-primary-negative: #59323F;

    --color-grey-4: #121214;
    --color-grey-3: #212529;
    --color-grey-2: #343B41;
    --color-grey-1: #868E96;
    --color-grey-0: #F8F9FA;

    --color-sucess: #3FE864;
    --color-negative: #E83F5B;

    --font-base: 'Inter', sans-serif;
}

`;
export default GlobalBase;
