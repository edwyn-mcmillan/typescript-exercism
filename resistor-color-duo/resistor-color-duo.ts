export class ResistorColour {
  private colours: string[];

  static colourArr = [
    "black",
    "brown",
    "red",
    "orange",
    "yellow",
    "green",
    "blue",
    "violet",
    "grey",
    "white",
  ];

  constructor(colours: string[]) {
    if (colours.length < 2) {
      throw Error("At least two colors need to be present");
    }
    this.colours = colours;
  }

  value = (): number => {
    return Number(
      this.colours
        .slice(0, 2)
        .map((colour) => ResistorColour.colourArr.indexOf(colour))
        .join("")
    );
  };
}
