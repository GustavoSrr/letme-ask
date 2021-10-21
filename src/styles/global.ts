import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  :root {
    --primaryColor: #55A9E7;
    --primaryColorHover: #4C98CF;
    --primaryColorTransparent: rgba(85, 169, 231, 0.15);
    --primaryFocusColorTransparent: rgba(85, 169, 231, 0.25);
    --secondaryColor: #E86DE1;
    --secondaryColorHover: #CF61C9;
    --secondaryColorTransparent: rgba(232, 109, 225, 0.15);
    --secondaryFocusColorTransparent: rgba(232, 109, 225, 0.25);

    --grayColor: #d5d5d5;
    --blueColor: #206CE8;
    --yellowColor: #e0bf2c;
    --yellowColorTransparent: rgba(224, 191, 44, 0.15);
    --blueColorTransparent: rgba(32, 108, 232, 0.15);
    --dangerColor: #e73f5d;
    --dangerColorTransparent: rgba(231, 63, 93, 0.15);

    --googleColor: #ea4335;
    --googleColorHover: #D13E30;

    --backgroundColor: ${props => props.theme.colors.backgroundColor};
    --borderColor: ${props => props.theme.colors.borderColor};

    --textTitleColor: ${props => props.theme.colors.textTitleColor};
    --textParagraphColor: ${props => props.theme.colors.textParagraphColor};
    --textAccentColor: ${props => props.theme.colors.textAccentColor};
    --textAreaColor: ${props => props.theme.colors.textAreaColor};

    --highlighColor: ${props => props.theme.colors.highlighColor};
    --answeredColor: ${props => props.theme.colors.answeredColor};
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    transition: 0.1s;
  }

  body {
    background-color: var(--backgroundColor);
    color: var(--textTitleColor);
  }

  body,
  input,
  button,
  textarea {
    font-weight: normal;
    font-size: 16px;
    font-family: "Roboto", sans-serif;
  }

  h1 {
    font-family: 'Ubuntu', sans-serif;
    font-size: 24px;
    color: var(--textTitleColor);
    margin-top: 10px;
    margin-bottom: 10px;
  }

  label {
    font-family: 'Ubuntu', sans-serif;
    font-size: 20px;
    font-weight: bold;
    color: var(--textTitleColor);
    margin-top: 10px;
    margin-bottom: 10px;
  }
`
