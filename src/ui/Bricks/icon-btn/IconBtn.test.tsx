import { render, screen } from "@testing-library/react";
import { MoonIcon } from "@ui/icons";
import React from "react";
import { IconBtn } from "./IconBtn";

describe("Test IconBtn component", () => {
  beforeEach(() => {
    render(
      <IconBtn onClick={() => {}}>
        <MoonIcon />
      </IconBtn>
    );
  });
  test("render component", () => {
    expect(screen.getByTestId("icon-btn")).toBeInTheDocument();
  });
  test("render children", () => {
    expect(screen.getByTestId("moon-icon")).toBeInTheDocument();
  });
  test("icon-btn's className equal to icon_btn", () => {
    expect(screen.getByTestId("icon-btn").className).toEqual("icon_btn");
  });
});
