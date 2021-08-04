export default class Words {
  public count(words: string): Map<string, number> {
    const wordCount = new Map();

    /* ---Regex Notes ---

    () grouping words.
    [^  ] negated set. Match any character that is not in the set
    /s targets spaces.
    g is global flag.

    */

    const regex = /([^\s])+/g;
    const words = words.toLowerCase().match(regex);

    return wordCount;
  }
}
