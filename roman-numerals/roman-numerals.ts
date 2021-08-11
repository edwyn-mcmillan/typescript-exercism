export default class RomanNumerals {
  static roman(input: number): string {
    const result: string[] = [];
    const numArr = String(input).split("");

    const methodsArr = [this.oneTranslate, this.tenTranslate, this.hundredTranslate, this.thousandTranslate];

    

    if (numArr.length === 1) {
      result.push(methodsArr[0](Number(numArr[0])));
    }

    if (numArr.length === 2) {
      result.push(this.tenTranslate(Number(numArr[0])));
      result.push(this.oneTranslate(Number(numArr[1])));
    }

    if (numArr.length === 3) {
      result.push(this.hundredTranslate(Number(numArr[0])));
      result.push(this.tenTranslate(Number(numArr[1])));
      result.push(this.oneTranslate(Number(numArr[2])));
    }

    if (numArr.length === 4) {
      result.push(this.thousandTranslate(Number(numArr[0])));
      result.push(this.hundredTranslate(Number(numArr[1])));
      result.push(this.tenTranslate(Number(numArr[2])));
      result.push(this.oneTranslate(Number(numArr[3])));
    }

    return result.join("");
  }

  static oneTranslate(n: number): string {
    const ones: string[] = [];
    if (n < 4) {
      ones.push("I".repeat(n));
    } else if (n === 4) {
      ones.push("IV");
    } else if (n === 5) {
      ones.push("V");
    } else if (n > 5 && n < 9) {
      ones.push("V" + "I".repeat(n - 5));
    } else if (n === 9) {
      ones.push("IX");
    }
    return ones.join("");
  }

  static tenTranslate(n: number): string {
    const tens: string[] = [];
    if (n < 4) {
      tens.push("X".repeat(n));
    } else if (n === 4) {
      tens.push("XL");
    } else if (n === 5) {
      tens.push("L");
    } else if (n > 5 && n < 9) {
      tens.push("L" + "X".repeat(n - 5));
    } else if (n === 9) {
      tens.push("XC");
    }
    return tens.join("");
  }

  static hundredTranslate(n: number): string {
    const hundreds: string[] = [];
    if (n < 4) {
      hundreds.push("C".repeat(n));
    } else if (n === 4) {
      hundreds.push("CD");
    } else if (n === 5) {
      hundreds.push("D");
    } else if (n > 5 && n < 9) {
      hundreds.push("D" + "C".repeat(n - 5));
    } else if (n === 9) {
      hundreds.push("CM");
    }
    return hundreds.join("");
  }

  static thousandTranslate(n: number): string {
    const thousands: string[] = [];
    if (n < 4) {
      thousands.push("M".repeat(n));
    } 
    return thousands.join("");
  }
}
