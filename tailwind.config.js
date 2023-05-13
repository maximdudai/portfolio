/** @type {import('tailwindcss').Config} */
export const content = ["./src/**/*.{html,jsx}"];
export const darkMode =["class"];
export const theme = {
    extend: {
        screens: {
            sm: "640px",
            md: "768px",
            lg: "1024px",
            xl: "1280px",
            "2xl": "1536px",
        },
        colors: {
            dark: '#292929',
            light: '#dfdfdf'
        }
    },
};
export const plugins = [];