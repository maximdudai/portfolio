/** @type {import('tailwindcss').Config} */
export const content = ["./src/**/*.{html,jsx}"];
export const darkMode =["class"];
export const theme = {
    extend: {
        screens: {
            'tablet': '640px',
      
            'laptop': '1024px',
      
            'desktop': '1280px',
          },
        colors: {
            dark: '#292929',
            light: '#dfdfdf'
        }
    },
};
export const plugins = [];