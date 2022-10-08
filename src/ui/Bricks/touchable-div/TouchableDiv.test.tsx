import { render, screen } from "@testing-library/react";
import React from "react";
import { TouchableDiv } from "./TouchableDiv";

describe("Test TouchableDiv", () => {
  beforeEach(() => {
    render(
      <TouchableDiv className="class" isActive={false} onClick={() => {}}>
        Div
      </TouchableDiv>
    );
  });
  test("render component", () => {
    expect(screen.getByTestId("touchable-div")).toBeInTheDocument();
  });
  test("render children", () => {
    expect(screen.getByText("Div")).toBeInTheDocument();
  });
  test("touchable-div's color equal to rgba(0, 0, 0, 0.6)", () => {
    expect(screen.getByTestId("touchable-div").style.color).toEqual(
      "rgba(0, 0, 0, 0.6)"
    );
  });
  test("touchable-div's className equal to 'class'", () => {
    expect(screen.getByTestId("touchable-div").className).toEqual("class");
  });
});
