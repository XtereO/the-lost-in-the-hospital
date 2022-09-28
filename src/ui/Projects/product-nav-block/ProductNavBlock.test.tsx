import { languages } from "@core/context";
import { render, screen } from "@testing-library/react";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import { ProductNavBlock } from "./ProductNavBlock";

describe("Test ProductNavigationBlock component", () => {
  const topic = languages.en.projects[0].products[0].topics[1];
  beforeEach(() => {
    render(
      <BrowserRouter>
        <ProductNavBlock topic={topic} activeHash={"hash"} />
      </BrowserRouter>
    );
  });
  test("render component", () => {
    expect(screen.getByTestId("product-navigation-block")).toBeInTheDocument();
  });
  test("product-navigation-block has className equal to product_navigation_block", () => {
    expect(screen.getByTestId("product-navigation-block").className).toEqual(
      "product_navigation_block"
    );
  });
  test("render product-navigation-block-topic", () => {
    expect(
      screen.getByTestId("product-navigation-block-topic")
    ).toBeInTheDocument();
  });
  test("product-navigation-block-topic's className equal to product_navigation_block__topic", () => {
    expect(
      screen.getByTestId("product-navigation-block-topic").className
    ).toEqual("product_navigation_block__topic");
  });
  test("render product-navigation-block-topic-ellipse", () => {
    expect(
      screen.getByTestId("product-navigation-block-topic-ellipse")
    ).toBeInTheDocument();
  });
  test("product-navigation-block-topic-ellipse's className equal to product_navigation_block__topic__ellipse", () => {
    expect(
      screen.getByTestId("product-navigation-block-topic-ellipse").className
    ).toEqual("product_navigation_block__topic__ellipse");
  });
  test("product-navigation-block-topic-ellipse's backgroundColor equal to rgba(75, 85, 99, 0.6)", () => {
    expect(
      screen.getByTestId("product-navigation-block-topic-ellipse").style
        .backgroundColor
    ).toEqual("rgba(75, 85, 99, 0.6)");
  });
  test("render product-navigation-block-topic-link", () => {
    expect(
      screen.getByTestId("product-navigation-block-topic-link")
    ).toBeInTheDocument();
  });
  test(`topic-link's text equal to ${topic.title}`, () => {
    expect(screen.getAllByText(topic.title)[0]).toBeInTheDocument();
  });
  test("render product-navigation-block-subtopics", () => {
    expect(
      screen.getByTestId("product-navigation-block-subtopics")
    ).toBeInTheDocument();
  });
  test("product-navigation-block-subtopics' has className equal to product_navigation_block__subtopics", () => {
    expect(
      screen.getByTestId("product-navigation-block-subtopics").className
    ).toEqual("product_navigation_block__subtopics");
  });
});
