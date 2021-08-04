export default class Squares {
    
  squareOfSum: number;
  sumOfSquares: number;
  difference: number;

  constructor(n: number) {

    //Sum of the first n Positive Integers
    //5 = (1 + 2 + 3 + 4 + 5) = 15
    let sum = n * (n + 1) / 2;
    this.squareOfSum = Math.pow(sum, 2);

    //5 = (1² + 2² + 3² + 4² + 5²)
    this.sumOfSquares = (n * (n + 1) * (2 * n + 1)) / 6;

    this.difference = this.squareOfSum - this.sumOfSquares;
  }
}
