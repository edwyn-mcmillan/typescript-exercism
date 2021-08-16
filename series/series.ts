class Series {
  public input: string;
  public digits: number[];

  constructor(input: string) {
    this.input = input;
    this.digits = input.split("").map((d) => Number(d));
  }

  public slices(value: number): number[][] {
    if (value > this.input.length) {
      throw new Error();
    }

    const result: number[][] = [];

    for (let i = 0; i < (this.digits.length -  (value - 1)); i ++) {
      result.push(this.digits.slice(i, (i + value)));
    }
    return result;
  }
}

export default Series;
