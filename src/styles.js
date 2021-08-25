import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const lightTheme = {
  blue: "#0095f6",
  borderColor: "rgb(219, 219, 219)",
};
export const darkTheme = {
  fontColor: "white",
  bgColor: "lightgray",
};

export const GlobalStyles = createGlobalStyle`
  ${reset}
  input {
      all:unset;
    }
    * {
      box-sizing:border-box;
    }
  body {
    background-color: #FAFAFA;
        font-size:14px;
        font-family:'Open Sans', sans-serif;
    }
    a {
      text-decoration: none;
  }
`;
