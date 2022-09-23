import { render, screen } from "@testing-library/react";
import React from "react";
import { languages } from "../../../context";
import { ProductNavigationBlock } from "./ProductNavigationBlock";

describe("Test ProductNavigationBlock component", () => {
  const topic = languages.en.projects[0].products[0].topics[1];
  beforeEach(() => {
    render(<ProductNavigationBlock topic={{ ...topic, isActive: true }} />);
  });
  test("should render component", () => {
    expect(screen.getByTestId("product-navigation-block")).toBeInTheDocument();
  });
  test("should product-navigation-block has className equal to product_navigation_block", () => {
    expect(screen.getByTestId("product-navigation-block").className).toEqual(
      "product_navigation_block"
    );
  });
  test("should render topic-link", () => {
    expect(screen.getByTestId("topic-link")).toBeInTheDocument();
  });
  test("should topic-link has color equal to rgba(75, 85, 99, 0.6)", () => {
    expect(screen.getByTestId("topic-link").className).toEqual(
      "rgba(75, 85, 99, 0.6)"
    );
  });
  test("should topic-link has className equal to topic_link", () => {
    expect(screen.getByTestId("topic-link").className).toEqaul("topic_link");
  });
});
