import { render, screen } from "@testing-library/react";
import React from "react";
import { JobCard } from "./JobCard";

describe("Test JobCard component", () => {
  beforeEach(() => {
    render(<JobCard header="3D Modeller" description="Do models" />);
  });
  test("render component", () => {
    expect(screen.getByTestId("job-card")).toBeInTheDocument();
  });
  test("job-card has className equal to job_card", () => {
    expect(screen.getByTestId("job-card").className).toEqual("job_card");
  });
  test("job-card has backgroundColor equal to rgb(255, 255, 255)", () => {
    expect(screen.getByTestId("job-card").style.backgroundColor).toEqual(
      "rgb(255, 255, 255)"
    );
  });
  test("render job-card-header", () => {
    expect(screen.getByTestId("job-card-header")).toBeInTheDocument();
  });
  test("job-card-header has text equal to '3D Modeller'", () => {
    expect(screen.getByText("3D Modeller")).toBeInTheDocument();
  });
  test("job-card-header has className equal to job_card__header", () => {
    expect(screen.getByTestId("job-card-header").className).toEqual(
      "job_card__header"
    );
  });
  test("job-card-header has color equal to rgba(0, 0, 0, 0.9)", () => {
    expect(screen.getByTestId("job-card-header").style.color).toEqual(
      "rgba(0, 0, 0, 0.9)"
    );
  });
  test("render job-card-description", () => {
    expect(screen.getByTestId("job-card-description")).toBeInTheDocument();
  });
  test("job-card-description has text equal to 'Do models'", () => {
    expect(screen.getByText("Do models")).toBeInTheDocument();
  });
  test("job-card-description has className equal to job_card__description", () => {
    expect(screen.getByTestId("job-card-description").className).toEqual(
      "job_card__description"
    );
  });
  test("job-card-description has color equal to rgba(0, 0, 0, 0.8)", () => {
    expect(screen.getByTestId("job-card-description").style.color).toEqual(
      "rgba(0, 0, 0, 0.8)"
    );
  });
  test("render job-card-links", () => {
    expect(screen.getByTestId("job-card-links")).toBeInTheDocument();
  });
  test("job-card-links has className equal to job_card__links", () => {
    expect(screen.getByTestId("job-card-links").className).toEqual(
      "job_card__links"
    );
  });
  test("job-card-links has link 'Дискорд'", () => {
    expect(screen.getByText("Дискорд")).toBeInTheDocument();
  });
  test("job-card-links has link 'Телеграм'", () => {
    expect(screen.getByText("Телеграм")).toBeInTheDocument();
  });
  test("job-card-links has link 'ВКонтакте'", () => {
    expect(screen.getByText("ВКонтакте")).toBeInTheDocument();
  });
});
