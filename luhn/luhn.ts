class Luhn {
  static valid(input: string): boolean {
    const cleanInput: number[] = input
      .split(" ")
      .join("")
      .split("")
      .reverse()
      .map((digit) => Number(digit));

    // Check for invalid input.
    if (cleanInput.length <= 1 || cleanInput.includes(NaN)) {
      return false;
    }

    let total = 0;
    for (let i = 0; i < cleanInput.length; i++) {
      i % 2 === 0 ? cleanInput[i] * 2 : cleanInput[i]
      cleanInput[i] > 9 ? cleanInput[i] - 9: cleanInput[i]
      total += cleanInput[i];
    }
    return total % 10 == 0;
  }
}

export default Luhn;


