import theme from "styles/theme";

type CustomTheme = typeof theme;
declare module "styled-components" {
    export interface DefaultTheme extends CustomTheme {
        type: ThemeState;
        color: {
            color_100: Color;
            color_200: Color;
            color_300: Color;
            color_400: Color;
            color_500: Color;
            background: Color;
            main_text: Color;
        }
    }
}