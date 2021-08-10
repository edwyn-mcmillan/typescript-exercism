export default class Acronym {
  public static parse(phrase: string): string {
    /* ---- Regex ----
      ?= is a positive look up, checks to see if it's there but doesn't match.
      regex = Capital letter followed by lowercase or first character of a word.
    */
    const regex = /[A-Z](?=[a-z]+)|\b\w/g;
    const acronym = phrase.match(regex);
    return acronym === null ? "" : acronym.join("").toUpperCase();
  }
}
