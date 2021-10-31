import {createGlobalStyle} from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    marin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    &::-webkit-scrollbar {
      width: 0.5rem;
    }

    & {
      ::-webkit-scrollbar-thumb {
        background-color: darkgrey;
      }
    }
  }
`

export default GlobalStyles