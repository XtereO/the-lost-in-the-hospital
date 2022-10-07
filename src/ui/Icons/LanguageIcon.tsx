import { ThemeContext } from "@core/context";
import React, { useContext } from "react";

export const LanguageIcon = React.memo(() => {
  const theme = useContext(ThemeContext);
  return (
    <svg
      data-testid="language-icon"
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20 36.6667C29.2048 36.6667 36.6667 29.2048 36.6667 20C36.6667 10.7953 29.2048 3.33334 20 3.33334C10.7953 3.33334 3.33334 10.7953 3.33334 20C3.33334 29.2048 10.7953 36.6667 20 36.6667Z"
        stroke={theme.icon}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.33334 20H36.6667"
        stroke={theme.icon}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20 3.33334C24.1688 7.89727 26.5379 13.8201 26.6667 20C26.5379 26.18 24.1688 32.1028 20 36.6667C15.8312 32.1028 13.4621 26.18 13.3333 20C13.4621 13.8201 15.8312 7.89727 20 3.33334V3.33334Z"
        stroke={theme.icon}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});
