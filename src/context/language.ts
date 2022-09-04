import React from "react";

export const languages = {
  ru: {
    brandName: "BroToUniverse",
    navLinkProjects: "Проекты",
    navLinkJob: "Работа",
    footerSocTopic: "Мы в соцсетях",
    discord: "Дискорд",
    telegram: "Телеграм",
    vkontakte: "ВКонтакте",
    gameTheLostInTheHospital: "The Lost In The Hospital",
  },
  en: {
    brandName: "BroToUniverse",
    navLinkProjects: "Projects",
    navLinkJob: "Job",
    footerSocTopic: "We in soc",
    discord: "Discord",
    telegram: "Telegram",
    vkontakte: "VKontakte",
    gameTheLostInTheHospital: "The Lost In The Hospital",
  },
};

export const LanguageContext = React.createContext(languages.ru);
