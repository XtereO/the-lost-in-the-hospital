import { render, screen } from "@testing-library/react";
import { MoonIcon } from "@ui/icons";
import React from "react";
import { HeaderIcon } from "./HeaderIcon";

describe("Test HeaderIcon component", () => {
  beforeEach(() => {
    render(
      <HeaderIcon onClick={() => {}}>
        <MoonIcon />
      </HeaderIcon>
    );
  });
  test("render header-icon", () => {
    expect(screen.getByTestId("header-icon")).toBeInTheDocument();
  });
  test("has a className equal to header_icon", () => {
    expect(screen.getByTestId("header-icon").className).toEqual("header_icon");
  });
  test("render icon", () => {
    expect(screen.getByTestId("moon-icon")).toBeInTheDocument();
  });
});
