export default class Hamming {
  compute(dna1: string, dna2: string): number {
    let hammingCount = 0;
    const dnaSeq1 = dna1.split("");
    const dnaSeq2 = dna2.split("");

    if (dnaSeq1.length === dnaSeq2.length) {
      for (let i = 0; i < dnaSeq1.length; i++) {
          dnaSeq1[i] === dnaSeq2[i] ? null : hammingCount++
      }
    } else {
      throw new Error("DNA strands must be of equal length.");
    }
    return hammingCount;
  }
}
