import React from "react";

const light = {
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
    navLink: {
      default: "rgba(255, 255, 255, 0.6)",
      active: "rgba(255, 255, 255, 0.9)",
    },
  },
  footer: {
    topic: "rgba(255, 255, 255, 0.9)",
    subTopic: "rgba(255, 255, 255, 0.8)",
    background: "#0E215F",
    infoBlockHeader: "rgba(255, 255, 255, 0.9)",
    link: {
      default: "rgba(255, 255, 255, 0.5)",
      active: "rgba(255, 255, 255, 0.8)",
    },
  },
  job: {
    cardBackground: "rgb(255, 255, 255)",
    cardHeader: "rgba(0, 0, 0, 0.9)",
    cardText: "rgba(0, 0, 0, 0.8)",
    cardLink: {
      default: "rgba(0, 0, 0, 0.6)",
      active: "rgba(0, 0, 0, 0.8)",
    },
  },
  projects: {
    navBlock: {
      borderColor: "rgb(154, 154, 154)",
      genre: "rgb(0, 0, 0)",
      navLink: {
        default: "rgb(0, 0, 0, 0.6)",
        active: "rgb(0, 0, 0, 0.8)",
      },
    },
    content: {
      topicTitle: "rgba(0, 0, 0, 0.9)",
      subTopicTitle: "rgba(0, 0, 0, 0.9)",
      text: "rgba(0, 0, 0, 0.8)",
    },
    productNavBlock: {
      header: "rgb(0, 0, 0)",
      hashLink: {
        default: "rgba(75, 85, 99, 0.6)",
        active: "rgba(75, 85, 99, 0.9)",
      },
    },
  },
  icon: "#F5F5F5",
  btnLight: {
    default: {
      color: "rgba(255, 255, 255, 0.9)",
      background: "transparent",
      borderColor: "rgba(255, 255, 255, 0.9)",
    },
    active: {
      color: "rgba(0, 0, 0, 0.9)",
      background: "rgba(255, 255, 255, 0.9)",
      borderColor: "rgba(0, 0, 0, 0.9)",
    },
  },
  iconBtn: {
    default: {
      background: "none",
    },
    active: {
      background: "rgba(191,191,191,0.15)",
    },
  },
  infoBlock: {
    header: "rgb(154, 154, 154)",
    description: "rgba(0, 0, 0, 0.7)",
  },
};

const dark: typeof light = {
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
    navLink: {
      default: "rgba(255, 255, 255, 0.6)",
      active: "rgba(255, 255, 255, 0.9)",
    },
  },
  footer: {
    topic: "rgba(255, 255, 255, 0.9)",
    subTopic: "rgba(255, 255, 255, 0.8)",
    background: "#0E215F",
    infoBlockHeader: "rgba(255, 255, 255, 0.9)",
    link: {
      default: "rgba(255, 255, 255, 0.5)",
      active: "rgba(255, 255, 255, 0.8)",
    },
  },
  job: {
    cardBackground: "rgb(255, 255, 255)",
    cardHeader: "rgba(0, 0, 0, 0.9)",
    cardText: "rgba(0, 0, 0, 0.8)",
    cardLink: {
      default: "rgba(0, 0, 0, 0.6)",
      active: "rgba(0, 0, 0, 0.8)",
    },
  },
  projects: {
    navBlock: {
      borderColor: "rgb(154, 154, 154)",
      genre: "rgb(0, 0, 0)",
      navLink: {
        default: "rgb(0, 0, 0, 0.6)",
        active: "rgb(0, 0, 0, 0.8)",
      },
    },
    content: {
      topicTitle: "rgba(0, 0, 0, 0.9)",
      subTopicTitle: "rgba(0, 0, 0, 0.9)",
      text: "rgba(0, 0, 0, 0.8)",
    },
    productNavBlock: {
      header: "rgb(0, 0, 0)",
      hashLink: {
        default: "rgba(75, 85, 99, 0.6)",
        active: "rgba(75, 85, 99, 0.9)",
      },
    },
  },
  icon: "#F5F5F5",
  btnLight: {
    default: {
      color: "rgba(255, 255, 255, 0.9)",
      background: "transparent",
      borderColor: "rgba(255, 255, 255, 0.9)",
    },
    active: {
      color: "rgba(0, 0, 0, 0.9)",
      background: "rgba(255, 255, 255, 0.9)",
      borderColor: "rgba(0, 0, 0, 0.9)",
    },
  },
  iconBtn: {
    default: {
      background: "none",
    },
    active: {
      background: "rgba(191,191,191,0.15)",
    },
  },
  infoBlock: {
    header: "rgb(154, 154, 154)",
    description: "rgba(0, 0, 0, 0.7)",
  },
};

export const themes = {
  light,
  dark,
};

export const ThemeContext = React.createContext(themes.light);
