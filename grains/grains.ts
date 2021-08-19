export default class Grains {
  static square(square: number): number {
    if (square <= 0 || square > 64) {
      throw Error;
    }

    return Math.pow(2, square - 1);
  }

  static total(): number {
    let sum = 0;
    for (let i = 0; i <= 64; i++) {
      sum += Math.pow(2, i - 1);
    }
    return sum;
  }
}
