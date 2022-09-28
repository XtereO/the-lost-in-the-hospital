import { mainActions, mainReducer } from "./reducer";

describe("Test main reducer", () => {
  test("set theme to dark", () => {
    expect(mainReducer(undefined, mainActions.setTheme("dark"))).toHaveProperty(
      "theme",
      "dark"
    );
  });
  test("set language to en", () => {
    expect(
      mainReducer(undefined, mainActions.setLanguage("en"))
    ).toHaveProperty("language", "en");
  });
});
