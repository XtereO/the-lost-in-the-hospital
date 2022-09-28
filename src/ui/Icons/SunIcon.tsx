import { ThemeContext } from "@core/context";
import React, { useContext } from "react";

export const SunIcon = React.memo(() => {
  const theme = useContext(ThemeContext);
  return (
    <svg
      data-testid="sun-icon"
      width="60"
      height="60"
      viewBox="0 0 60 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M30 42.5C36.9036 42.5 42.5 36.9036 42.5 30C42.5 23.0964 36.9036 17.5 30 17.5C23.0964 17.5 17.5 23.0964 17.5 30C17.5 36.9036 23.0964 42.5 30 42.5Z"
        stroke={theme.icon}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M30 5V10"
        stroke={theme.icon}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M30 50V55"
        stroke={theme.icon}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.5 12.5L15 15"
        stroke={theme.icon}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M45 45L47.5 47.5"
        stroke={theme.icon}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5 30H10"
        stroke={theme.icon}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M50 30H55"
        stroke={theme.icon}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.5 47.5L15 45"
        stroke={theme.icon}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M45 15L47.5 12.5"
        stroke={theme.icon}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});
