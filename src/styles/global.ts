import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  :root {
    --primaryColor: #55A9E7;
    --primaryColorHover: #4C98CF;
    --primaryColorTransparent: rgba(85, 169, 231, 0.15);
    --primaryFocusColorTransparent: rgba(85, 169, 231, 0.25);
    --secundaryColor: #E86DE1;
    --secundaryColorHover: #CF61C9;
    --secundaryColorTransparent: rgba(232, 109, 225, 0.15);
    --secundaryFocusColorTransparent: rgba(232, 109, 225, 0.25);

    --grayColor: #d5d5d5;
    --blueColor: #206CE8;
    --blueColorTransparent: rgba(32, 108, 232, 0.15);
    --dangerColor: #e73f5d;
    --dangerColorTransparent: rgba(231, 63, 93, 0.15);

    --googleColor: #ea4335;
    --googleColorHover: #D13E30;

    --backgroundColor: ${props => props.theme.colors.background};
    --borderGrayColor: #d5d5d5;

    --textBlackColor: #29292e;
    --textGrayColor: #737380;
    --textWhiteColor: #e5def7;
    --textAreaColor: #fefefe;

    --hightlighColor: #f4f0ff;
    --answeredColor: #dbdcdd;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    transition: 0.1s;
  }

  body {
    background-color: var(--backgroundColor);
    color: var(--textBlackColor);
  }

  body,
  input,
  button,
  textarea {
    font-weight: 400;
    font-size: 16px;
    font-family: "Roboto", sans-serif;
  }

  h1 {
    font-family: 'Ubuntu', sans-serif;
    font-size: 24px;
    color: var(--textBlackColor);
    margin-top: 10px;
    margin-bottom: 10px;
  }

  label {
    font-family: 'Ubuntu', sans-serif;
    font-size: 20px;
    font-weight: bold;
    color: var(--textBlackColor);
    margin-top: 10px;
    margin-bottom: 10px;
  }
`
