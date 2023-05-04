import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const lightTheme = {
  fontColor: "#2c2c2c",
  bgColor: "white",
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
    background-color: ${(props) => props.theme.bgColor};
  }
`;