import type { Config } from "tailwindcss";
import { nextui } from "@nextui-org/react";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        "logo-mobile": "200px"},
      backgroundSize: {
        'auto': 'auto',
        'cover': 'cover',
        'contain': 'contain',
        '50%': '50%',
        '100%': '100%',
      },
      screens: {
        "xx": "380px",
        "xs": "400px",
        "sx": "450px",
        "ss": "500px",
      },
      boxShadow: {
        "3xl": "0 3px 16px rgba(0,0,0,.06)",
        "4xl": "0 10px 24px rgb(0 0 0/4%)",
        "5xl": "0px 10px 15px -3px rgba(0,0,0,0.1)",
        "6xl": "0 0 20px 18px rgb(0 0 0/3%)",
        "7xl": "0 0 10px 5px rgba(0,0,0,.03)",
      },
      dropShadow: {
        "3xl": "0 0 10px rgba(0, 0, 0, 0.8)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "blue-green": "#11d4ca",
        "blue-green-50": "#0e09ad",
        "white-gray": "#f2f2f2",
        "wellbeing-yellow": "#dac679",
        "thrustwhorthy-brown": "#e62525",
        "golden-serenity": "#0e09ad",
        "vital-green": "#0e09ad",
        "gray-50": "rgb(252,247,255)",
        "gray-border": "rgb(235,242,243)",
        "gray-text": "rgb(104, 106, 111)",
      },
      animation: {
        "animation1": "animation1 5s linear infinite",
        "animation2": "animation2 5s linear infinite",
        "animation3": "animation3 10s linear infinite",
        "animation4": "animation4 30s linear infinite",
        "animation5": "animation5 5s linear infinite",
      },
      keyframes: {
        "animation1": {
          "0%": { transform: "translate(0)" },
          "50%": { transform: "translate(-20px, -20px)" },
          "100%": { ransform: "translate(0)" },
        },
        "animation2": {
          "0%": { transform: "translate(0)" },
          "50%": { transform: "translate(20px, 20px)" },
          "100%": { ransform: "translate(0)" },
        },
        "animation3": {
          "0%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.15)" },
          "100%": { transform: "scale(1)" },
        },
        "animation4": {       
          "0%": { backgroundPositionY: "top", backgroundPositionX: "right" },   
          "12.5%": { backgroundPositionY: "top", backgroundPositionX: "center" },
          "25%": { backgroundPositionY: "top", backgroundPositionX: "left" },
          "37.5%": { backgroundPositionY: "center", backgroundPositionX: "left" },
          "50%": { backgroundPositionY: "bottom", backgroundPositionX: "left" },
          "62.5%": { backgroundPositionY: "bottom", backgroundPositionX: "center" },
          "75%": { backgroundPositionY: "bottom", backgroundPositionX: "right" },
          "87.5%": { backgroundPositionY: "center", backgroundPositionX: "right" },
          "100%": { backgroundPositionY: "top", backgroundPositionX: "right" }, 
        },
        "animation5": {
          "0%": { transform: "translate(0)" },
          "50%": { transform: "translate(-20px, 20px)" },
          "100%": { ransform: "translate(0)" },
        },
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
export default config;
