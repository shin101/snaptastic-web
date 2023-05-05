import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const lightTheme = {
  fontColor: "#2c2c2c",
  bgColor: "white",
  accent: "#fafafa",
  borderColor: "rgb(219, 219, 219)"
};

export const darkTheme = {
  fontColor: "lightray",
  bgColor: "white",
}; 

// global style will apply style globally
export const GlobalStyles = createGlobalStyle`
  ${reset}
  input {
    all:unset;
  }
  body {
    background-color: #FAFAFA;
    font-size: 15px;
    color: rgb(38, 38, 38);
  }
`;