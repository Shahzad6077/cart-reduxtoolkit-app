import { createMuiTheme } from "@material-ui/core";
import "@material-ui/core/styles";
interface customColors {
  red?: string;
  black?: string;
  black2?: string;
  yellow?: string;
  gray?: string;
  gray2?: string;
  smoke?: string;

  blue1?: string;
  orange?: string;
}
declare module "@material-ui/core/styles/createPalette" {
  interface PaletteOptions {
    customColors?: customColors;
  }
  interface Palette {
    customColors?: customColors;
  }
}

const themeProvider = createMuiTheme({
  palette: {
    customColors: {
      gray: "#F4F2F6",
      black: "#392d40",
      black2: "#222326",
      red: "#e75353",
      smoke: "#b8fcc6",
      yellow: " #f6d586",
      gray2: "#b8b8b8",
      blue1: "#414a72",
      orange: "#ff5e57",
    },
    primary: { main: "#222326" },
    secondary: { main: "#392d40", contrastText: "#ececec" },
    text: {
      secondary: "white",
    },
  },
});

themeProvider.typography.h2 = {
  fontFamily: "Quicksand, sans-serif",
  fontSize: "max(26px, min(6vw, 5.75rem))",
};
themeProvider.typography.h3 = {
  fontSize: "max(26px, min(6vw, 2.75rem))",
};
themeProvider.typography.h4 = {
  fontSize: "max(26px, min(6vw, 1.75rem))",
};
themeProvider.typography.h5 = {
  fontSize: "max(22px, min(6vw, 1.25rem))",
};
themeProvider.typography.body1 = {
  fontSize: "max(18px, min(1.6vw, 20px))",
};
themeProvider.typography.body2 = {
  fontSize: "max(18px, min(1.6vw, 24px))",
};
themeProvider.typography.subtitle1 = {
  color: "#fff",
  fontFamily: "Quicksand",
  fontSize: "max(18px, min(1.6vw, 24px))",
};
themeProvider.typography.subtitle2 = {
  color: "#fff",
  fontFamily: "Quicksand",
  fontSize: "max(18px, min(1.6vw, 20px))",
};

export default themeProvider;
