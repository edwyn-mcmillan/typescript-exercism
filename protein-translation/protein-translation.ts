const index: Record<string, string> = {
  AUG: "Methionine",
  UUU: "Phenylalanine",
  UUC: "Phenylalanine",
  UUA: "Leucine",
  UUG: "Leucine",
  UCU: "Serine",
  UCC: "Serine",
  UCA: "Serine",
  UCG: "Serine",
  UAU: "Tyrosine",
  UAC: "Tyrosine",
  UGU: "Cysteine",
  UGC: "Cysteine",
  UGG: "Tryptophan",
};

class ProteinTranslation {
  static proteins(rna: string): string[] {
    const result: string[] = [];

    const regex = /.{1,3}/g; //selects string 3char long
    const rnaSeq = rna.match(regex);

    if (rnaSeq) {
      for (let i = 0; i < rnaSeq.length; i++) {
        if (rnaSeq[i] === "UGA") {
          return result;
        } else if (rnaSeq[i] === "UAG") {
          return result;
        } else if (rnaSeq[i] === "UAA") {
          return result;
        } else {
          result.push(index[rnaSeq[i]]);
        }
      }
    }
    return result;
  }
}

export default ProteinTranslation;
