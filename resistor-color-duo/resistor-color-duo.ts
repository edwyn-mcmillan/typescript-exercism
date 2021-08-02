enum ColourNum {
  black, //implicity 0
  brown,
  red,
  orange,
  yellow,
  green,
  blue,
  violet,
  grey,
  white,
}

export class ResistorColour {
  constructor(private colours: (keyof typeof ColourNum)[]) {
    if (colours.length < 2) {
      throw Error("At least two colors need to be present");
    }
    this.colours = colours;
  }

  value = (): number =>
    Number(
      this.colours
        .slice(0, 2)
        .reduce((str, colour) => str + ColourNum[colour], "")
    );
}
