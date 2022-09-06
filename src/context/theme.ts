import React from "react";

export const themes = {
  light: {
    appBg: "F5F5F5",
    header: "#0E215F",
    footer: "#0E215F",
    brandName: "rgba(255, 255, 255, 0.9)",
    navLink: "rgba(255, 255, 255, 0.6)",
    navLinkActive: "rgba(255, 255, 255, 0.9)",
    footerTopic: "rgba(255, 255, 255, 0.9)",
    footerSubTopic: "rgba(255, 255, 255, 0.8)",
    icon: "#F5F5F5",
  },
  dark: {
    appBg: "F5F5F5",
    header: "#0E215F",
    footer: "#0E215F",
    brandName: "rgba(255, 255, 255, 0.9)",
    navLink: "rgba(255, 255, 255, 0.6)",
    navLinkActive: "rgba(255, 255, 255, 0.9)",
    footerTopic: "rgba(255, 255, 255, 0.9)",
    footerSubTopic: "rgba(255, 255, 255, 0.8)",
    icon: "#F5F5F5",
  },
};

export const ThemeContext = React.createContext(themes.light);
