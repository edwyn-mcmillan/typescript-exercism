export default class Allergies {
  index: { [key: string]: number } = {
    eggs: 1,
    peanuts: 2,
    shellfish: 4,
    strawberries: 8,
    tomatoes: 16,
    chocolate: 32,
    pollen: 64,
    cats: 128,
  };

  constructor(private input: number) {}

  allergicTo(food: string): boolean {
    const match = this.index[food];
    return Boolean(this.input & match); //Bitwise, sets each bit to 0 if one bit is 0.
  }

  list(): string[] {
    const result: string[] = [];
    for (const [key, value] of Object.entries(this.index)) {
      if (this.allergicTo(key)) result.push(key);
    }
    return result;
  }
}
