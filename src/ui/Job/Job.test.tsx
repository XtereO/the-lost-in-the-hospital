import React from "react";
import { render, screen } from "@testing-library/react";
import { Job } from "./Job";

describe("Test Job component", () => {
  beforeEach(() => {
    render(<Job />);
  });
  test("should render component", () => {
    expect(screen.getByTestId("job"));
  });
});
