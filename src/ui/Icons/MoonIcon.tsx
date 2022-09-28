import { ThemeContext } from "@core/context";
import React, { useContext } from "react";

export const MoonIcon = React.memo(() => {
  const theme = useContext(ThemeContext);
  return (
    <svg
      data-testid="moon-icon"
      width="60"
      height="60"
      viewBox="0 0 60 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M52.5 31.975C52.1067 36.2305 50.5097 40.286 47.8956 43.667C45.2816 47.0479 41.7587 49.6145 37.7393 51.0664C33.7198 52.5182 29.37 52.7953 25.1988 51.8652C21.0275 50.9351 17.2075 48.8364 14.1856 45.8144C11.1636 42.7925 9.06485 38.9725 8.13477 34.8012C7.20469 30.63 7.48179 26.2802 8.93365 22.2607C10.3855 18.2413 12.9521 14.7184 16.333 12.1044C19.714 9.49035 23.7695 7.89326 28.025 7.5C25.5335 10.8707 24.3346 15.0236 24.6463 19.2035C24.958 23.3834 26.7597 27.3126 29.7235 30.2765C32.6874 33.2403 36.6166 35.042 40.7965 35.3537C44.9764 35.6654 49.1293 34.4665 52.5 31.975Z"
        stroke={theme.icon}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});
