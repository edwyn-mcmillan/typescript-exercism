class Matrix {
  public rows: number[][];
  public columns: number[][];

  constructor(input: string) {
    this.rows = input
      .split("\n")
      .map((row) => row.split(" ").map((int) => Number(int)));
    
    this.columns = [];
    for(let i = 0; i < this.rows.length; i++){
      this.columns.push(this.rows.map(row => row[i]));
    }
  }
}

export default Matrix;
