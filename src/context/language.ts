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
    infoBlocks: [
      { header: "О нас", description: "Тут много текста" },
      { header: "Topic 2", description: "There's a lot of text" },
      { header: "Topic 3", description: "There's a lot of text" },
    ],
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
    infoBlocks: [
      { header: "About us", description: "There's a lot of text" },
      { header: "Topic 2", description: "There's a lot of text" },
      { header: "Topic 3", description: "There's a lot of text" },
    ],
  },
};

export const LanguageContext = React.createContext(languages.ru);
