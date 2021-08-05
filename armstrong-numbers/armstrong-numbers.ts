class ArmstrongNumbers {
  static isArmstrongNumber = (input: number): boolean => {
    let result: number = 0;
    let numArr = input.toString().split("").map(Number);

    numArr.map((n) => (result += Math.pow(n, numArr.length)));

    return result === input ? true : false;
  };
}

export default ArmstrongNumbers;
