import { render, screen } from "@testing-library/react";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Footer } from "./Footer";

describe("Test Footer component", () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>
    );
  });
  test("render component", () => {
    expect(screen.getByTestId("footer"));
  });
  test("has className equal to footer", () => {
    expect(screen.getByTestId("footer").className).toEqual("footer");
  });
  test("backgroundColor equal to rgb(14, 33, 95)", () => {
    expect(screen.getByTestId("footer").style.backgroundColor).toEqual(
      "rgb(14, 33, 95)"
    );
  });
  test("render info-block with brand name", () => {
    expect(screen.getByText("BroToUniverse")).toBeInTheDocument();
  });
  test("render brand-logo", () => {
    expect(screen.getByTestId("brand-logo")).toBeInTheDocument();
  });
  test("render info-block with projects", () => {
    expect(screen.getByText("Проекты")).toBeInTheDocument();
  });
  test("render game the-lost-in-the-hospital", () => {
    expect(screen.getByText("The Lost In The Hospital")).toBeInTheDocument();
  });
  test("render info-block with Contacts", () => {
    expect(screen.getByText("Контакты")).toBeInTheDocument();
  });
  test("render discord link", () => {
    expect(screen.getByText("Дискорд")).toBeInTheDocument();
  });
  test("render telegram link", () => {
    expect(screen.getByText("Телеграм")).toBeInTheDocument();
  });
  test("render vkontakte link", () => {
    expect(screen.getByText("ВКонтакте")).toBeInTheDocument();
  });
});
