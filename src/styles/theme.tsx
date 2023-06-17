import { DefaultTheme } from "styled-components";
import { Color } from "types/Color";
import { ThemeState } from "types/ThemeState";

export interface Theme extends DefaultTheme {
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

export const LightTheme: Theme = {
    type: ThemeState.LIGHT,
    color: {
        color_100: "#c6d7e8",
        color_200: "#a6c9e1",
        color_300: "#85c0df",
        color_400: "#5db6de",
        color_500: "#30a7d9",
        background: "#eee",
        main_text: "#333",
    }
}

export const DarkTheme: Theme = {
    type: ThemeState.DARK,
    color: {
        color_100: "#c6d7e8",
        color_200: "#a6c9e1",
        color_300: "#85c0df",
        color_400: "#5db6de",
        color_500: "#30a7d9",
        background: "#333",
        main_text: "#eee",
    }
}

export const getTheme = (theme: ThemeState) => {
    switch(theme) {
        case ThemeState.LIGHT:
            return LightTheme;
        case ThemeState.DARK:
            return DarkTheme;
    }
}