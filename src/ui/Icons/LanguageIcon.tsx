import React, { useContext } from "react";
import { ThemeContext } from "../../context";

export const LanguageIcon = React.memo(() => {
  const theme = useContext(ThemeContext);
  return (
    <svg
      data-testid="language-icon"
      width="60"
      height="60"
      viewBox="0 0 60 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M30 55C43.8071 55 55 43.8071 55 30C55 16.1929 43.8071 5 30 5C16.1929 5 5 16.1929 5 30C5 43.8071 16.1929 55 30 55Z"
        stroke={theme.icon}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5 30H55"
        stroke={theme.icon}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M30 5C36.2532 11.8459 39.8069 20.7301 40 30C39.8069 39.2699 36.2532 48.1541 30 55C23.7468 48.1541 20.1931 39.2699 20 30C20.1931 20.7301 23.7468 11.8459 30 5V5Z"
        stroke={theme.icon}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});
