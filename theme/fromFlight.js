export default {
  labels: ["xs", "sm", "md", "lg", "xl"],
  breakpoints: ["20rem", "40rem", "50rem", "64rem", "80rem"],
  breakpointMap: [
    {
      label: "xs",
      size: "20rem"
    },
    {
      label: "sm",
      size: "40rem"
    },
    {
      label: "md",
      size: "50rem"
    },
    {
      label: "lg",
      size: "64rem"
    },
    {
      label: "xl",
      size: "80rem"
    }
  ],
  above: {
    xs: "@media (min-width: 20rem)",
    sm: "@media (min-width: 40rem)",
    md: "@media (min-width: 50rem)",
    lg: "@media (min-width: 64rem)",
    xl: "@media (min-width: 80rem)"
  },
  below: {
    xs: "@media (max-width: 19.99rem)",
    sm: "@media (max-width: 39.99rem)",
    md: "@media (max-width: 49.99rem)",
    lg: "@media (max-width: 63.99rem)",
    xl: "@media (max-width: 79.99rem)"
  },
  between: {
    "xs-sm": "@media (min-width: 20rem) and (max-width: 40rem)",
    "xs-md": "@media (min-width: 20rem) and (max-width: 50rem)",
    "xs-lg": "@media (min-width: 20rem) and (max-width: 64rem)",
    "xs-xl": "@media (min-width: 20rem) and (max-width: 80rem)",
    "sm-md": "@media (min-width: 40rem) and (max-width: 50rem)",
    "sm-lg": "@media (min-width: 40rem) and (max-width: 64rem)",
    "sm-xl": "@media (min-width: 40rem) and (max-width: 80rem)",
    "md-lg": "@media (min-width: 50rem) and (max-width: 64rem)",
    "md-xl": "@media (min-width: 50rem) and (max-width: 80rem)",
    "lg-xl": "@media (min-width: 64rem) and (max-width: 80rem)"
  },
  only: {
    xs: "@media (min-width: 20rem) and (max-width: 39.99rem)",
    sm: "@media (min-width: 40rem) and (max-width: 49.99rem)",
    md: "@media (min-width: 50rem) and (max-width: 63.99rem)",
    lg: "@media (min-width: 64rem) and (max-width: 79.99rem)",
    xl: "@media (min-width: 80rem)"
  },
  fontSizes: [
    "12px",
    "14px",
    "16px",
    "20px",
    "24px",
    "32px",
    "48px",
    "64px",
    "72px"
  ],
  space: ["0px", "8px", "16px", "24px", "32px", "40px", "48px", "56px", "64px"],
  fontWeights: {
    light: 300,
    regular: 400,
    semibold: 700
  },
  colors: {
    white: "#FFFFFF",
    black: "#000000",
    grey: "#878787",
    lightgrey: "#E8E8E8",
    tablegrey: "#F3F3F3",
    beige: "#f5f5dc",
    loadingBar: "#2f80ed",
    blue: "#2f80ed",
    red: "#FF0000",
    background: "#f7f7f7",
    darkgrey: "#333",
    mediumgrey: "#9a9a9a",
    highlight: "#2f80ed"
  },
  fonts: {
    primary: "Source Sans Pro"
  }
};
