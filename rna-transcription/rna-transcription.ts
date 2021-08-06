class Transcriptor {
  toRna(dna: string): string {
    const rna: string[] = [];
    const charArr = dna.split("");
    charArr.forEach((character) => {
      switch (true) {
        case character === "G":
          rna.push("C");
          break;
        case character === "C":
          rna.push("G");
          break;
        case character === "T":
          rna.push("A");
          break;
        case character === "A":
          rna.push("U");
          break;
        default:
          throw new Error("Invalid input DNA.");
      }
    });
    return rna.join("");
  }
}

export default Transcriptor;
