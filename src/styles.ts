import { createGlobalStyle } from "styled-components";

export const colors = {
  black: "#1b1b1f",
  white: "#fff",
  grey: "#98989f",
  greyBlack: "#202127",
  blue: "#1464ff",
};

export const breakpoints = {
  desktop: "1366px",
  tablet: "768px",
};

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Inter Tight", sans-serif;
        list-style: none;
        text-decoration: none;
        scroll-behavior: smooth;
    }

    body{
      background-image: linear-gradient(135deg, ${colors.black} 40%, ${colors.blue} );
      background-color: ${colors.black};
      color: ${colors.white};
    }

    .container {
        max-width: ${breakpoints.desktop};
        width: 100%;
        margin: 0 auto;

        @media (max-width: ${breakpoints.desktop}) {
            max-width: 90%;
        }
    }
`;
