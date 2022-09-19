import React from "react";

export const themes = {
  light: {
    appBg: "#F5F5F5",
    bannerBg: "#0D193F",
    header: "#0E215F",
    footer: "#0E215F",
    brandName: "rgba(255, 255, 255, 0.9)",
    navLink: "rgba(255, 255, 255, 0.6)",
    navLinkActive: "rgba(255, 255, 255, 0.9)",
    footerTopic: "rgba(255, 255, 255, 0.9)",
    footerSubTopic: "rgba(255, 255, 255, 0.8)",
    icon: "#F5F5F5",
    btnLight: "rgba(255, 255, 255, 0.9)",
    btnLightActive: "rgba(0, 0, 0, 0.9)",
    btnLightBackground: "transparent",
    btnLightActiveBackground: "rgba(255, 255, 255, 0.9)",
    bannerHeader: "rgb(255, 255, 255)",
    bannerDescription: "rgba(255, 255, 255, 0.8)",
    infoBlockHeader: "rgb(154, 154, 154)",
    infoBlockDescription: "rgba(0, 0, 0, 0.7)",
    footerInfoBlockHeader: "rgba(255, 255, 255, 0.9)",
    footerLink: "rgba(255, 255, 255, 0.5)",
    footerLinkActive: "rgba(255, 255, 255, 0.8)",
    jobCardBackground: "rgb(255, 255, 255)",
    jobCardHeader: "rgba(0, 0, 0, 0.9)",
    jobCardText: "rgba(0, 0, 0, 0.8)",
    jobCardLink: "rgba(0, 0, 0, 0.6)",
    jobCardLinkActive: "rgba(0, 0, 0, 0.8)",
    projectsNavigationBorderColor: "rgb(154, 154, 154)",
    projectsNavigationBlockGenre: "rgb(0, 0, 0)",
    projectsNavigationBlockNavLink: "rgb(0, 0, 0, 0.6)",
    projectsNavigationBlockNavLinkActive: "rgb(0, 0, 0, 0.8)",
  },
  dark: {
    appBg: "#F5F5F5",
    bannerBg: "#0D193F",
    header: "#0E215F",
    footer: "#0E215F",
    brandName: "rgba(255, 255, 255, 0.9)",
    navLink: "rgba(255, 255, 255, 0.6)",
    navLinkActive: "rgba(255, 255, 255, 0.9)",
    footerTopic: "rgba(255, 255, 255, 0.9)",
    footerSubTopic: "rgba(255, 255, 255, 0.8)",
    icon: "#F5F5F5",
    btnLight: "rgba(255, 255, 255, 0.9)",
    btnLightActive: "rgba(0, 0, 0, 0.9)",
    btnLightBackground: "transparent",
    btnLightActiveBackground: "rgba(255, 255, 255, 0.9)",
    bannerHeader: "rgb(255, 255, 255)",
    bannerDescription: "rgba(255, 255, 255, 0.8)",
    infoBlockHeader: "rgb(154, 154, 154)",
    infoBlockDescription: "rgba(0, 0, 0, 0.7)",
    footerInfoBlockHeader: "rgba(255,255,255,0.9)",
    footerLink: "rgba(255, 255, 255, 0.5)",
    footerLinkActive: "rgba(255, 255, 255, 0.8)",
    jobCardBackground: "rgb(255, 255, 255)",
    jobCardHeader: "rgba(0, 0, 0, 0.9)",
    jobCardText: "rgba(0, 0, 0, 0.8)",
    jobCardLink: "rgba(0, 0, 0, 0.6)",
    jobCardLinkActive: "rgba(0, 0, 0, 0.8)",
    projectsNavigationBorderColor: "rgb(154, 154, 154)",
    projectsNavigationBlockGenre: "rgb(0, 0, 0)",
    projectsNavigationBlockNavLink: "rgb(0, 0, 0, 0.6)",
    projectsNavigationBlockNavLinkActive: "rgb(0, 0, 0, 0.8)",
  },
};

export const ThemeContext = React.createContext(themes.light);
