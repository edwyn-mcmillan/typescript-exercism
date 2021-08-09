class Isogram {
  static isIsogram(input: string): boolean {
    const letters: string[] = [];
    const words = input
      .toLowerCase()
      .replace(/[^a-z]/, "")
      .split("");
    words.map((char) => {
      if (letters.includes(char)) {
        return false;
      }
      letters.push(char);
    });
    return true;
  }
}

export default Isogram;
