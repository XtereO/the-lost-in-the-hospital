import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Banner } from "./Banner";

describe("Test Banner component", () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <Banner />
      </BrowserRouter>
    );
  });
  test("should render component", () => {
    expect(screen.getByTestId("banner")).toBeInTheDocument();
  });
  test("should backgroundColor equal to #0D193F", () => {
    expect(screen.getByTestId("banner").style.backgroundColor).toEqual(
      "rgb(13, 25, 63)"
    );
  });
  test("should banner has a className equal to banner", () => {
    expect(screen.getByTestId("banner").className).toEqual("banner");
  });
  test("should rendrer banner-container", () => {
    expect(screen.getByTestId("banner-container")).toBeInTheDocument();
  });
  test("should banner-container has a className equal to banner__container", () => {
    expect(screen.getByTestId("banner-container").className).toEqual(
      "banner__container"
    );
  });
  test("should render banner-container-header", () => {
    expect(screen.getByTestId("banner-container-header")).toBeInTheDocument();
  });
  test("should banner-container-header has a className equal to banner__container__header", () => {
    expect(screen.getByTestId("banner-container-header").className).toEqual(
      "banner__container__header"
    );
  });
  test("should render text in banner-container-header BroToUniverse", () => {
    expect(screen.getByText("BroToUniverse")).toBeInTheDocument();
  });
  test("should banner-container-header has a color equal to rgba(255, 255, 255, 1)", () => {
    expect(screen.getByTestId("banner-container-header").style.color).toEqual(
      "rgb(255, 255, 255)"
    );
  });
  test("should render banner-container-description", () => {
    expect(
      screen.getByTestId("banner-container-description")
    ).toBeInTheDocument();
  });
  test("should banner-container-description has a className equal to banner__container__description", () => {
    expect(
      screen.getByTestId("banner-container-description").className
    ).toEqual("banner__container__description");
  });
  test("should banner-container-description color equal to rgba(255, 255, 255, 0.8)", () => {
    expect(
      screen.getByTestId("banner-container-description").style.color
    ).toEqual("rgba(255, 255, 255, 0.8)");
  });
  test("should banner-container-description render text Команда разработки игр", () => {
    expect(screen.getByText("Команда разработки игр")).toBeInTheDocument();
  });
  test("should render banner-container-button-group", () => {
    expect(
      screen.getByTestId("banner-container-button-group")
    ).toBeInTheDocument();
  });
  test("should banner-container-button-group has a className equal to banner__container__button_group", () => {
    expect(
      screen.getByTestId("banner-container-button-group").className
    ).toEqual("banner__container__button_group");
  });
  test("should render button with projects", () => {
    expect(screen.getByText("Проекты")).toBeInTheDocument();
  });
  test("should render button with job", () => {
    expect(screen.getByText("Работа")).toBeInTheDocument();
  });
  test("should button projects navigate to /projects", () => {
    fireEvent.click(screen.getByText("Проекты"));
    expect(window.location.pathname).toEqual(
      "/projects/the-lost-in-the-hospital"
    );
  });
  test("should button job navigate to /job", () => {
    fireEvent.click(screen.getByText("Работа"));
    expect(window.location.pathname).toEqual("/job");
  });
});
