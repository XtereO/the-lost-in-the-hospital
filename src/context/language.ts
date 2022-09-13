import React from "react";

export const languages = {
  ru: {
    brandName: "BroToUniverse",
    bannerDescription: "Команда разработки игр",
    navLinkProjects: "Проекты",
    navLinkHome: "Главная",
    navLinkJob: "Работа",
    footerSocTopic: "Контакты",
    infoBlocks: [
      { header: "О нас", description: "Тут много текста" },
      { header: "Topic 2", description: "There's a lot of text" },
      { header: "Topic 3", description: "There's a lot of text" },
    ],
    contacts: [
      { title: "Дискорд", link: "" },
      { title: "Телеграм", link: "" },
      { title: "ВКонтакте", link: "" },
    ],
    projects: [
      {
        title: "The Lost In The Hospital",
        link: "/projects/the-lost-in-the-hospital",
      },
    ],
  },
  en: {
    brandName: "BroToUniverse",
    bannerDescription: "Game developers teamp",
    navLinkProjects: "Projects",
    navLinkHome: "Home",
    navLinkJob: "Job",
    footerSocTopic: "Contacts",
    infoBlocks: [
      { header: "About us", description: "There's a lot of text" },
      { header: "Topic 2", description: "There's a lot of text" },
      { header: "Topic 3", description: "There's a lot of text" },
    ],
    contacts: [
      { title: "Discord", link: "" },
      { title: "Telegram", link: "" },
      { title: "VKontakte", link: "" },
    ],
    projects: [
      {
        title: "The Lost In The Hospital",
        link: "/projects/the-lost-in-the-hospital",
      },
    ],
  },
};

export const LanguageContext = React.createContext(languages.ru);
