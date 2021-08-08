export default class PerfectNumbers {
  static classify(input: number): string {
    const resultArr = [];
    let total = 0;

    if (input <= 0) {
      throw new Error("Classification is only possible for natural numbers.");
    }

    //find factors of input
    for (let i = 0; i < input; i++) {
      if (input % i === 0) {
        resultArr.push(i);
      }
    }

    //sum of factors
    resultArr.forEach((n) => {
      total += n;
    });

    if (total === input) {
      return "perfect";
    } else if (total > input) {
      return "abundant";
    } else if (total < input) {
      return "deficient";
    }
    return "Error";
  }
}

