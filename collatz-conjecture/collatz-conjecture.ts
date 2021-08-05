class CollatzConjecture {
  static steps(input: number): number {
    let n = input;
    let stepCount = 0;

    if (n <= 0) {
      throw new Error("Only positive numbers are allowed");
    }

    while (n) {
      switch (true) {
        case n === 1: //endpoint
          return stepCount;
        case n % 2 === 0: //n is even
          stepCount++;
          n = n / 2;
          break;
        default: //n is odd
          stepCount++;
          n = n * 3 + 1;
          break;
      }
    }
    return stepCount;
  }
}

export default CollatzConjecture;
