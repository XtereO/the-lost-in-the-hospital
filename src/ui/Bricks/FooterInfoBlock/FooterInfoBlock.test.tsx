import { render, screen } from "@testing-library/react";
import React from "react";
import { FooterInfoBlock } from "./FooterInfoBlock";

describe("Test FooterInfoBlock component", () => {
  beforeEach(() => {
    render(<FooterInfoBlock header={"Contacts"}>Discord</FooterInfoBlock>);
  });
  test("should render component", () => {
    expect(screen.getByTestId("footer-info-block")).toBeInTheDocument();
  });
  test("should className equal to footer_info_block", () => {
    expect(screen.getByTestId("footer-info-block").className).toEqual(
      "footer_info_block"
    );
  });
  test("should render footer-info-block-header", () => {
    expect(screen.getByTestId("footer-info-block-header")).toBeInTheDocument();
  });
  test("should footer-info-block-header has text equal to 'Contacts'", () => {
    expect(screen.getByText("Contacts")).toBeInTheDocument();
  });
  test("should footer-info-block-header has color equal to rgba(255, 255, 255, 0.9)", () => {
    expect(screen.getByTestId("footer-info-block-header").style.color).toEqual(
      "rgba(255, 255, 255, 0.9)"
    );
  });
  test("should footer-info-block-header has className equal to footer_info_block__header", () => {
    expect(screen.getByTestId("footer-info-block-header").className).toEqual(
      "footer_info_block__header"
    );
  });
  test("should render footer-info-block-details", () => {
    expect(screen.getByTestId("footer-info-block-details")).toBeInTheDocument();
  });
  test("should footer-info-block-details has text equal to 'Discord'", () => {
    expect(screen.getByText("Discord")).toBeInTheDocument();
  });
});
