export default class Robot {
  public name: string;
  public nameDB: string[] = [];

  constructor() {
    this.name = this.getName();
  }

  randomCharacter(): string {
    return "ABCDEFGHIJKLMNOPQRSTUVWXYZ"[Math.floor(Math.random() * 26)];
  }

  randomDigit(): string {
    return "0123456789"[Math.floor(Math.random() * 10)];
  }

  randomName(): string {
    const randomName =
      this.randomCharacter() +
      this.randomCharacter() +
      this.randomDigit() +
      this.randomDigit() +
      this.randomDigit();

    return randomName;
  }

  public getName(): string {
    let newName = this.randomName();
    while (this.nameDB.includes(newName)) {
      newName = this.randomName();
    }
    this.nameDB.push(newName)
    return newName;
  }

  public resetName(): void {
    this.name = this.getName();
  }

  public static releaseNames(): void {
    console.log('---');
  }
}
