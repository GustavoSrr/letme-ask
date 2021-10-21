import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;

    colors: {
      backgroundColor: string;

      borderColor: string;

      textTitleColor: string;
      textParagraphColor: string;
      textAccentColor: string;
      textAreaColor: string;

      highlighColor: string;
      answeredColor: string;
    }
  }
}
