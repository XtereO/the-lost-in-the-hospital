import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import { CustomizedLink } from "./CustomizedLink";

describe("Test Link component", () => {
  beforeEach(() => {
    render(
      <CustomizedLink
        href="discord.com"
        color="rgba(0, 0, 0, 0.6)"
        activeColor="rgba(0, 0, 0, 0.8)"
      >
        Discord
      </CustomizedLink>
    );
  });
  test("render component", () => {
    expect(screen.getByTestId("link")).toBeInTheDocument();
  });
  test("link has text equal to 'Discord'", () => {
    expect(screen.getByText("Discord")).toBeInTheDocument();
  });
  test("link has className link", () => {
    expect(screen.getByTestId("link").className).toEqual("link");
  });
  test("link has href equal to discord.com", () => {
    expect(screen.getByTestId("link")).toHaveProperty(
      "href",
      "http://localhost/discord.com"
    );
  });
  test("link has color equal to rgba(0, 0, 0, 0.6)", () => {
    expect(screen.getByTestId("link").style.color).toEqual(
      "rgba(0, 0, 0, 0.6)"
    );
  });
  test("link handle mouse over and set color to rgba(0, 0, 0, 0.8)", () => {
    const link = screen.getByTestId("link");
    fireEvent.mouseOver(link);
    expect(link.style.color).toEqual("rgba(0, 0, 0, 0.8)");
  });
  test("link handle mouse out and set color to rgba(0, 0, 0, 0.6)", () => {
    const link = screen.getByTestId("link");
    fireEvent.mouseOver(link);
    fireEvent.mouseOut(link);
    expect(link.style.color).toEqual("rgba(0, 0, 0, 0.6)");
  });
});
