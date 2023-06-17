import { ThemeState } from "../types/ThemeState";
import { DarkTheme, LightTheme, getTheme } from "./theme";

describe("getTheme", () => {
    it("get DarkTheme", () => {
        const theme = ThemeState.DARK;
        const result = getTheme(theme);
        expect(result).toEqual(DarkTheme);
    });
    it("get LightTheme", () => {
        const theme = ThemeState.LIGHT;
        const result = getTheme(theme);
        expect(result).toEqual(LightTheme);
    });
})