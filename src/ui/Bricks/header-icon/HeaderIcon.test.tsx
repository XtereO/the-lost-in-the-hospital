import { render, screen } from "@testing-library/react";
import React from "react";
import { HeaderIcon } from "./HeaderIcon";
import { MoonIcon } from "../../Icons";

describe("Test HeaderIcon component", () => {
  beforeEach(() => {
    render(
      <HeaderIcon onClick={() => {}}>
        <MoonIcon />
      </HeaderIcon>
    );
  });
  test("should render header-icon", () => {
    expect(screen.getByTestId("header-icon")).toBeInTheDocument();
  });
  test("should has a className equal to header_icon", () => {
    expect(screen.getByTestId("header-icon").className).toEqual("header_icon");
  });
  test("should render icon", () => {
    expect(screen.getByTestId("moon-icon")).toBeInTheDocument();
  });
});
