import { languages } from "@core/context";
import { render, screen } from "@testing-library/react";
import React from "react";
import { Topic } from "./Topic";

describe("Test Topic component", () => {
  const topic = languages.en.projects[0].products[0].topics[1];
  beforeEach(() => {
    const mockIntersectionObserver = jest.fn();
    mockIntersectionObserver.mockReturnValue({
      observe: jest.fn().mockReturnValue(null),
      unobserve: jest.fn().mockReturnValue(null),
      disconnect: jest.fn().mockReturnValue(null),
    });
    window.IntersectionObserver = mockIntersectionObserver;
    render(<Topic topic={topic} />);
  });
  test("render component", () => {
    expect(screen.getByTestId("topic")).toBeInTheDocument();
  });
  test("topic has a className equal to topic", () => {
    expect(screen.getByTestId("topic").className).toEqual("topic");
  });
  test("render topic-title", () => {
    expect(screen.getByTestId("topic-title")).toBeInTheDocument();
  });
  test("topic-title has a text equal to Horrors", () => {
    expect(screen.getByText(topic.title)).toBeInTheDocument();
  });
  test("topic-title has a className equal to topic__title", () => {
    expect(screen.getByTestId("topic-title").className).toEqual("topic__title");
  });
  test("topic-title has a color equal to rgba(0, 0, 0, 0.9)", () => {
    expect(screen.getByTestId("topic-title").style.color).toEqual(
      "rgba(0, 0, 0, 0.9)"
    );
  });
  test("render description", () => {
    expect(screen.getByTestId("topic-description")).toBeInTheDocument();
  });
  test("topic-description has color equal to rgba(0, 0, 0, 0.8)", () => {
    expect(screen.getByTestId("topic-description").style.color).toEqual(
      "rgba(0, 0, 0, 0.8)"
    );
  });
  test("topic-description has className eqaul to topic__text", () => {
    expect(screen.getByTestId("topic-description").className).toEqual(
      "topic__text"
    );
  });
  test("render topic-sub-topic", () => {
    expect(screen.getAllByTestId("topic-sub-topic")[0]).toBeInTheDocument();
  });
});
