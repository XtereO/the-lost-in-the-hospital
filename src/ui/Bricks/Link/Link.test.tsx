import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import { Link } from "./Link";

describe("Test Link component", () => {
  beforeEach(() => {
    render(
      <Link
        href="discord.com"
        color="rgba(0, 0, 0, 0.6)"
        activeColor="rgba(0, 0, 0, 0.8)"
      >
        Discord
      </Link>
    );
  });
  test("should render component", () => {
    expect(screen.getByTestId("link")).toBeInTheDocument();
  });
  test("should link has text equal to 'Discord'", () => {
    expect(screen.getByText("Discord")).toBeInTheDocument();
  });
  test("should link has className link", () => {
    expect(screen.getByTestId("link").className).toEqual("link");
  });
  test("should link has href equal to discord.com", () => {
    expect(screen.getByTestId("link")).toHaveProperty(
      "href",
      "http://localhost/discord.com"
    );
  });
  test("should link has color equal to rgba(0, 0, 0, 0.6)", () => {
    expect(screen.getByTestId("link").style.color).toEqual(
      "rgba(0, 0, 0, 0.6)"
    );
  });
  test("should link handle mouse over and set color to rgba(0, 0, 0, 0.8)", () => {
    const link = screen.getByTestId("link");
    fireEvent.mouseOver(link);
    expect(link.style.color).toEqual("rgba(0, 0, 0, 0.8)");
  });
  test("should link handle mouse out and set color to rgba(0, 0, 0, 0.6)", () => {
    const link = screen.getByTestId("link");
    fireEvent.mouseOver(link);
    fireEvent.mouseOut(link);
    expect(link.style.color).toEqual("rgba(0, 0, 0, 0.6)");
  });
});
