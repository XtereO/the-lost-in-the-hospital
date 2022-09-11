import { render, screen } from "@testing-library/react";
import React from "react";
import { Projects } from "./Projects";

describe("Test Projects component", () => {
  beforeEach(() => {
    render(<Projects />);
  });
  test("should render component", () => {
    expect(screen.getByTestId("projects")).toBeInTheDocument();
  });
});
