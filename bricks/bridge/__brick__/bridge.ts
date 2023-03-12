// Bridge pattern is about preferring composition over inheritance.
// Implementation details are pushed from a hierarchy to another object
// with a separate hierarchy.
export class About {
  theme?;
  constructor(theme) {
    this.theme = theme;
  }

  getContent() {
    return `About page in ${this.theme.getColor()}`;
  }
}

export class Careers {
  theme?;
  constructor(theme) {
    this.theme = theme;
  }

  getContent() {
    return `Careers page in ${this.theme.getColor()}`;
  }
}
export class DarkTheme {
  getColor() {
    return "Dark Black";
  }
}
class LightTheme {
  getColor() {
    return "Off white";
  }
}
class AquaTheme {
  getColor() {
    return "Light blue";
  }
}

// const darkTheme = new DarkTheme()

// const about = new About(darkTheme)
// const careers = new Careers(darkTheme)

// console.log(about.getContent() )// "About page in Dark Black"
// console.log(careers.getContent() )// "Careers page in Dark Black"
