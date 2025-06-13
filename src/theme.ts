export const lightTheme = {
    background: "#ffffff",
    text: "#000000",
    primary: "#f57c00",
    secondary: "#333333",
};

export const darkTheme = {
    background: "#121212",
    text: "#ffffff",
    primary: "#f57c00",
    secondary: "#eeeeee",
};

// 👇 define tipo baseado nos objetos acima
export type ThemeType = typeof lightTheme;