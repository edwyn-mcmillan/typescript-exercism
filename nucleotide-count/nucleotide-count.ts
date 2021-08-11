class NucleotideCount {
  static nucleotideCounts(input: string): { [key: string]: number } {
    const result: { [key: string]: number } = {
      A: 0,
      C: 0,
      G: 0,
      T: 0,
    };

    if (input.match(/([^ACGT])/g)) {
      throw new Error("Invalid nucleotide in strand");
    }

    input.split("").forEach((char) => {
      result[char] += 1;
    });

    return result;
  }
}

export default NucleotideCount;
