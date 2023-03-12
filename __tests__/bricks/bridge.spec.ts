import {
  DarkTheme,
  About,
  Careers,
} from "../../bricks/bridge/__brick__/bridge";

describe("Bridge es6 test", () => {
  it("We can create a bridge", () => {
    const darkTheme = new DarkTheme();

    const about = new About(darkTheme);
    const careers = new Careers(darkTheme);

    expect(about.getContent()).toBe("About page in Dark Black");
    expect(careers.getContent()).toBe("Careers page in Dark Black");
  });
});
