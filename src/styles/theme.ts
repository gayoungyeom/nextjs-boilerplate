import { DefaultTheme } from "styled-components"

const color = {
  primary: "orange",
  secondary: "green",
}

export type TColor = typeof color

export const theme: DefaultTheme = { color }
