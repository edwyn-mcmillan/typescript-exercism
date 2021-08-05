export default class Triangle {
  sides: number[];

  constructor(...sides: number[]) {
    /*
    .sort compares 2 values 
    if the result is negative, a is sorted before b
    if the result is positive, b is sorted before a
    if the result is 0 there are no order changes
  */

    this.sides = sides.sort((a, b) => a - b);
  }

  kind(): string {
    const [a, b, c] = this.sides;

    /*
    equilateral = all sides are the same length
    isosceles = atleast two sides are the same length
    scalene = all sides are different lengths
  */

    switch (true) {
      case a <= 0 || a + b <= c: //defining a triangle
        throw new Error("Not a triangle");
      case a === c:
        return "equilateral";
      case a === b || b === c:
        return "isosceles";
      default:
        return "scalene";
    }
  }
}
