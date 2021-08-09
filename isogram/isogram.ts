class Isogram {
  static isIsogram(input: string): boolean {
    let result = true;
    const letters: string[] = [];
    const words = input
      .toLowerCase()
      .replace(/[^a-z]/, "")
      .split("");

    words.forEach((char) => {
      if (letters.includes(char)) {
        result = false;
      }
      letters.push(char);
    });
    return result;
  }
}

export default Isogram;
