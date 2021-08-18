class CollatzConjecture {
  static steps(input: number): number {
    if (input <= 0) {
      throw new Error("Only positive numbers are allowed");
    }

    let n = input;
    let stepCount = 0;

    while (n !== 1) {
      stepCount += 1;
      n = n % 2 ? n * 3 + 1 : n / 2;
    }
    return stepCount;
  }
}

export default CollatzConjecture;
