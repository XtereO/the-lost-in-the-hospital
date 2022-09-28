import { render, screen } from "@testing-library/react";
import React from "react";
import { InfoBlock } from "./InfoBlock";

describe("Test InfoBlock component", () => {
  beforeEach(() => {
    render(<InfoBlock header="Topic" description="There's a lot of text" />);
  });
  test("render component", () => {
    expect(screen.getByTestId("info-block")).toBeInTheDocument();
  });
  test("info-block has a className equal to info_block", () => {
    expect(screen.getByTestId("info-block").className).toEqual("info_block");
  });
  test("render info-block-header", () => {
    expect(screen.getByTestId("info-block-header")).toBeInTheDocument();
  });
  test("info-block-header render text equal to 'Topic'", () => {
    expect(screen.getByText("Topic")).toBeInTheDocument();
  });
  test("info-block-header has className equal to info_block__header", () => {
    expect(screen.getByTestId("info-block-header").className).toEqual(
      "info_block__header"
    );
  });
  test("info-block-header has color equal to rgb(154, 154, 154)", () => {
    expect(screen.getByTestId("info-block-header").style.color).toEqual(
      "rgb(154, 154, 154)"
    );
  });
  test("render info-block-description", () => {
    expect(screen.getByTestId("info-block-description")).toBeInTheDocument();
  });
  test("info-block-description has className equal to info_block__description", () => {
    expect(screen.getByTestId("info-block-description").className).toEqual(
      "info_block__description"
    );
  });
  test("info-block-description has color equal to rgba(0, 0, 0, 0.7)", () => {
    expect(screen.getByTestId("info-block-description").style.color).toEqual(
      "rgba(0, 0, 0, 0.7)"
    );
  });
  test("info-block-description render text equal to 'There's a lot of text'", () => {
    expect(screen.getByText("There's a lot of text")).toBeInTheDocument();
  });
});
