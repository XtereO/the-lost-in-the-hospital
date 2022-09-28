import { Home } from "@ui/home";
import { Job } from "@ui/Job";
import { Projects } from "@ui/projects";
import React from "react";
import { Route, Routes } from "react-router-dom";

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
