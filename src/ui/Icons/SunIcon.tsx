import { ThemeContext } from "@core/context";
import React, { useContext } from "react";

export const SunIcon = React.memo(() => {
  const theme = useContext(ThemeContext);

  return (
    <svg
      data-testid="sun-icon"
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20.0001 28.3333C24.6025 28.3333 28.3334 24.6024 28.3334 20C28.3334 15.3976 24.6025 11.6667 20.0001 11.6667C15.3977 11.6667 11.6667 15.3976 11.6667 20C11.6667 24.6024 15.3977 28.3333 20.0001 28.3333Z"
        stroke={theme.icon}
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20 3.33334V6.66668"
        stroke={theme.icon}
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20 33.3333V36.6667"
        stroke={theme.icon}
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.33325 8.33334L9.99992 10"
        stroke={theme.icon}
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M30 30L31.6667 31.6667"
        stroke={theme.icon}
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.33325 20H6.66659"
        stroke={theme.icon}
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M33.3333 20H36.6666"
        stroke={theme.icon}
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.33325 31.6667L9.99992 30"
        stroke={theme.icon}
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M30 10L31.6667 8.33334"
        stroke={theme.icon}
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});
