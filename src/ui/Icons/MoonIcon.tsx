import { ThemeContext } from "@core/context";
import React, { useContext } from "react";

export const MoonIcon = React.memo(() => {
  const theme = useContext(ThemeContext);
  return (
    <svg
      data-testid="moon-icon"
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M35 21.3167C34.7378 24.1537 33.6731 26.8573 31.9304 29.1113C30.1877 31.3653 27.8392 33.0763 25.1595 34.0442C22.4799 35.0121 19.58 35.1969 16.7992 34.5768C14.0184 33.9568 11.4717 32.5576 9.45704 30.543C7.44243 28.5283 6.04323 25.9816 5.42318 23.2008C4.80313 20.42 4.98786 17.5201 5.95577 14.8405C6.92367 12.1608 8.63472 9.81228 10.8887 8.06959C13.1427 6.3269 15.8463 5.26218 18.6833 5C17.0224 7.24711 16.2231 10.0157 16.4309 12.8024C16.6387 15.589 17.8398 18.2084 19.8157 20.1843C21.7916 22.1602 24.411 23.3613 27.1976 23.5691C29.9843 23.7769 32.7529 22.9776 35 21.3167Z"
        stroke={theme.icon}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});
