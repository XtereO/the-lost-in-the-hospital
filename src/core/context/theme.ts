import React from "react";

export const themes = {
  light: {
    app: {
      background: "#F5F5F5",
      brandName: "rgba(255, 255, 255, 0.9)",
    },
    banner: {
      background: "#0D193F",
      header: "rgb(255, 255, 255)",
      description: "rgba(255, 255, 255, 0.8)",
    },
    header: {
      background: "#0E215F",
      navLink: "rgba(255, 255, 255, 0.6)",
      navLinkActive: "rgba(255, 255, 255, 0.9)",
    },
    footer: {
      topic: "rgba(255, 255, 255, 0.9)",
      subTopic: "rgba(255, 255, 255, 0.8)",
      background: "#0E215F",
      infoBlockHeader: "rgba(255, 255, 255, 0.9)",
      link: "rgba(255, 255, 255, 0.5)",
      linkActive: "rgba(255, 255, 255, 0.8)",
    },
    job: {
      cardBackground: "rgb(255, 255, 255)",
      cardHeader: "rgba(0, 0, 0, 0.9)",
      cardText: "rgba(0, 0, 0, 0.8)",
      cardLink: "rgba(0, 0, 0, 0.6)",
      cardLinkActive: "rgba(0, 0, 0, 0.8)",
    },
    projects: {
      navBlock: {
        borderColor: "rgb(154, 154, 154)",
        genre: "rgb(0, 0, 0)",
        navLink: "rgb(0, 0, 0, 0.6)",
        navLinkActive: "rgb(0, 0, 0, 0.8)",
      },
      content: {
        topicTitle: "rgba(0, 0, 0, 0.9)",
        subTopicTitle: "rgba(0, 0, 0, 0.9)",
        text: "rgba(0, 0, 0, 0.8)",
      },
      productNavBlock: {
        header: "rgb(0, 0, 0)",
        hashLink: "rgba(75, 85, 99, 0.6)",
        hashLinkActive: "rgba(75, 85, 99, 0.9)",
      },
    },
    icon: "#F5F5F5",
    btnLight: {
      color: "rgba(255, 255, 255, 0.9)",
      colorActive: "rgba(0, 0, 0, 0.9)",
      background: "transparent",
      backgroundActive: "rgba(255, 255, 255, 0.9)",
    },
    infoBlock: {
      header: "rgb(154, 154, 154)",
      description: "rgba(0, 0, 0, 0.7)",
    },
  },
  dark: {
    app: {
      background: "#F5F5F5",
      brandName: "rgba(255, 255, 255, 0.9)",
    },
    banner: {
      background: "#0D193F",
      header: "rgb(255, 255, 255)",
      description: "rgba(255, 255, 255, 0.8)",
    },
    header: {
      background: "#0E215F",
      navLink: "rgba(255, 255, 255, 0.6)",
      navLinkActive: "rgba(255, 255, 255, 0.9)",
    },
    footer: {
      topic: "rgba(255, 255, 255, 0.9)",
      subTopic: "rgba(255, 255, 255, 0.8)",
      background: "#0E215F",
      infoBlockHeader: "rgba(255, 255, 255, 0.9)",
      link: "rgba(255, 255, 255, 0.5)",
      linkActive: "rgba(255, 255, 255, 0.8)",
    },
    job: {
      cardBackground: "rgb(255, 255, 255)",
      cardHeader: "rgba(0, 0, 0, 0.9)",
      cardText: "rgba(0, 0, 0, 0.8)",
      cardLink: "rgba(0, 0, 0, 0.6)",
      cardLinkActive: "rgba(0, 0, 0, 0.8)",
    },
    projects: {
      navBlock: {
        borderColor: "rgb(154, 154, 154)",
        genre: "rgb(0, 0, 0)",
        navLink: "rgb(0, 0, 0, 0.6)",
        navLinkActive: "rgb(0, 0, 0, 0.8)",
      },
      content: {
        topicTitle: "rgba(0, 0, 0, 0.9)",
        subTopicTitle: "rgba(0, 0, 0, 0.9)",
        text: "rgba(0, 0, 0, 0.8)",
      },
      productNavBlock: {
        header: "rgb(0, 0, 0)",
        hashLink: "rgba(75, 85, 99, 0.6)",
        hashLinkActive: "rgba(75, 85, 99, 0.9)",
      },
    },
    icon: "#F5F5F5",
    btnLight: {
      color: "rgba(255, 255, 255, 0.9)",
      colorActive: "rgba(0, 0, 0, 0.9)",
      background: "transparent",
      backgroundActive: "rgba(255, 255, 255, 0.9)",
    },
    infoBlock: {
      header: "rgb(154, 154, 154)",
      description: "rgba(0, 0, 0, 0.7)",
    },
  },
};

export const ThemeContext = React.createContext(themes.light);
