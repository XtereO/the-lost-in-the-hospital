import React from "react";
import { render, screen } from "@testing-library/react";
import { Job } from "./Job";

describe("Test Job component", () => {
  beforeEach(() => {
    render(<Job />);
  });
  test("should render component", () => {
    expect(screen.getByTestId("job")).toBeInTheDocument();
  });
  test("should job has className equal to job", () => {
    expect(screen.getByTestId("job").className).toEqual("job");
  });
  test("should render job-header", () => {
    expect(screen.getByTestId("job-header")).toBeInTheDocument();
  });
  test("should job-header render text", () => {
    expect(
      screen.getByText(
        "Если хотите в нашу команду, то обращайтесь в удобную для вас соцсеть:"
      )
    ).toBeInTheDocument();
  });
  test("should render job-cards", () => {
    expect(screen.getByTestId("job-cards")).toBeInTheDocument();
  });
  test("should job-cards has className equal to job__cards", () => {
    expect(screen.getByTestId("job-cards").className).toEqual("job__cards");
  });
});
