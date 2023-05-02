import { DefaultTheme } from "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      text: {
        primary: string;
      };
      background: {
        primary: string;
        hover: string;
        darker: string;
      };
      border: {
        primary: string;
      };
      brand: {
        primary: string;
      };
    };
    fontSize: string;
  }
}

export const theme: DefaultTheme = {
  colors: {
    text: {
      primary: "var(--text-color)",
    },
    background: {
      primary: "var(--background-color-1)",
      hover: "var(--background-color-2)",
      darker: "var(--background-color-3)",
    },
    border: {
      primary: "var(--border-color)",
    },
    brand: {
      primary: "var(--brand-color)",
    },
  },
  fontSize: "var(--urban-font-size)",
};
