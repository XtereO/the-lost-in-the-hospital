import React from "react";
import { Banner } from "./Banner";

export const Home = React.memo(() => {
  return (
    <div data-testid="home">
      <Banner />
    </div>
  );
});
