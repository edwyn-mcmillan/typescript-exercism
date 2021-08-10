export default class Anagram {
  private word: string;

  constructor(input: string) {
    this.word = input.toLowerCase();
  }

  matches(...wordList: string[]): string[] {
    const result: string[] = [];
    wordList.forEach((word) => {
      this.isAnagram(word) ? result.push(word) : null;
    });
    return result;
  }

  private isAnagram(wordFromList: string) {
    if (this.isSameWord(wordFromList)) return false;
    return this.sortedLetters(this.word) === this.sortedLetters(wordFromList);
  }

  private isSameWord(word: string): boolean {
    return word.toLowerCase() === this.word;
  }

  private sortedLetters(word: string): string {
    return word.toLowerCase().split("").sort().join("");
  }
}
