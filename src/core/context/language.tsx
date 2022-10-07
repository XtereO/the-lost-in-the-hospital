import { Project } from "@core/models";
import React from "react";

const ru = {
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
    { title: "Дискорд", href: "" },
    { title: "Телеграм", href: "" },
    { title: "ВКонтакте", href: "" },
  ],
  jobsHeader:
    "Если хотите в нашу команду, то обращайтесь в удобную для вас соцсеть:",
  jobs: [
    {
      header: "Левел-дизайнер",
      description:
        "Визуальное оформление игровых уровней. Интеграция и настройка игрового контента. Участие в работе над игровым балансом.",
    },
    {
      header: "Композитор",
      description:
        "Изготовление звуковых эффектов, музыкальное оформление локаций, событий и по возможности озвучка текста.",
    },
    {
      header: "3D Моделлер",
      description:
        "В задачи будет входить создание игровых моделей-Ассетов под UN5, стилистика начало-середина XX века.",
    },
    {
      header: "2D Художник",
      description:
        "В задачи будет входить создание стилистических текстур, материалов для моделей, по возможности концепт-арты под проект.",
    },
    {
      header: "Разработчик-Программист на blueprint и C++ в Unreal Engine 5",
      description:
        "В задачи будет входить Разработка геймплея, игровых механик.",
    },
  ],
  navigation: "Навигация",
  projects: [
    {
      genre: "Хорроры",
      products: [
        {
          title: "The Lost In The Hospital",
          to: "/projects/the-lost-in-the-hospital",
          topics: [
            { title: "Сюжет", hash: "plot", subTopics: [] },
            {
              title: "Механики",
              hash: "mechanicks",
              subTopics: [
                {
                  title: "Моргание",
                  hash: "blinking",
                  description: <div>super</div>,
                },
              ],
            },
          ],
        },
      ],
    },
  ] as Project[],
};

const en: typeof ru = {
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
    { title: "Дискорд", href: "" },
    { title: "Телеграм", href: "" },
    { title: "ВКонтакте", href: "" },
  ],
  jobsHeader:
    "Если хотите в нашу команду, то обращайтесь в удобную для вас соцсеть:",
  jobs: [
    {
      header: "Левел-дизайнер",
      description:
        "Визуальное оформление игровых уровней. Интеграция и настройка игрового контента. Участие в работе над игровым балансом.",
    },
    {
      header: "Композитор",
      description:
        "Изготовление звуковых эффектов, музыкальное оформление локаций, событий и по возможности озвучка текста.",
    },
    {
      header: "3D Моделлер",
      description:
        "В задачи будет входить создание игровых моделей-Ассетов под UN5, стилистика начало-середина XX века.",
    },
    {
      header: "2D Художник",
      description:
        "В задачи будет входить создание стилистических текстур, материалов для моделей, по возможности концепт-арты под проект.",
    },
    {
      header: "Разработчик-Программист на blueprint и C++ в Unreal Engine 5",
      description:
        "В задачи будет входить Разработка геймплея, игровых механик.",
    },
  ],
  navigation: "Навигация",
  projects: [
    {
      genre: "Хорроры",
      products: [
        {
          title: "The Lost In The Hospital",
          to: "/projects/the-lost-in-the-hospital",
          topics: [
            { title: "Сюжет", hash: "plot", subTopics: [] },
            {
              title: "Механики",
              hash: "mechanicks",
              subTopics: [
                {
                  title: "Моргание",
                  hash: "blinking",
                  description: <div>super</div>,
                },
              ],
            },
          ],
        },
      ],
    },
  ] as Project[],
};

export const languages = {
  ru,
  en,
};

export const LanguageContext = React.createContext(languages.ru);
