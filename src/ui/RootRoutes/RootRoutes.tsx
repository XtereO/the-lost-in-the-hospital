import React from "react";
import { Route, Routes } from "react-router-dom";
import { Job } from "../Job";
import { Home } from "../Home";
import { Projects } from "../Projects";

export const RootRoutes = React.memo(() => {
  return (
    <Routes data-testid="root-routes">
      <Route data-testid="route-job" path="/job" element={<Job />} />
      <Route
        data-testid="route-projects"
        path="/projects/:productLink"
        element={<Projects />}
      />
      <Route data-testid="route-home" path="*" element={<Home />} />
    </Routes>
  );
});
