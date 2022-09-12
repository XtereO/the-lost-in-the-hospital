import React from "react";

export const languages = {
  ru: {
    brandName: "BroToUniverse",
    bannerDescription: "Команда разработки игр",
    navLinkProjects: "Проекты",
    navLinkHome: "Главная",
    navLinkJob: "Работа",
    footerSocTopic: "Мы в соцсетях",
    discord: "Дискорд",
    telegram: "Телеграм",
    vkontakte: "ВКонтакте",
    gameTheLostInTheHospital: "The Lost In The Hospital",
  },
  en: {
    brandName: "BroToUniverse",
    bannerDescription: "Game developers teamp",
    navLinkProjects: "Projects",
    navLinkHome: "Home",
    navLinkJob: "Job",
    footerSocTopic: "We in soc",
    discord: "Discord",
    telegram: "Telegram",
    vkontakte: "VKontakte",
    gameTheLostInTheHospital: "The Lost In The Hospital",
  },
};

export const LanguageContext = React.createContext(languages.ru);
