import { render, screen } from "@testing-library/react";
import React from "react";
import { Job } from "./Job";

describe("Test Job component", () => {
  beforeEach(() => {
    render(<Job />);
  });
  test("render component", () => {
    expect(screen.getByTestId("job")).toBeInTheDocument();
  });
  test("job has className equal to job", () => {
    expect(screen.getByTestId("job").className).toEqual("job");
  });
  test("render job-header", () => {
    expect(screen.getByTestId("job-header")).toBeInTheDocument();
  });
  test("job-header render text", () => {
    expect(
      screen.getByText(
        "Если хотите в нашу команду, то обращайтесь в удобную для вас соцсеть:"
      )
    ).toBeInTheDocument();
  });
  test("render job-cards", () => {
    expect(screen.getByTestId("job-cards")).toBeInTheDocument();
  });
  test("job-cards has className equal to job__cards", () => {
    expect(screen.getByTestId("job-cards").className).toEqual("job__cards");
  });
});
