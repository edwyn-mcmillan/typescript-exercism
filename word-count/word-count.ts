export default class Words {
  public count(input: string): Map<string, number> {
    const wordCount = new Map();

    /* ---Regex Notes ---

    () grouping words.
    [^  ] negated set. Match any character that is not in the set.
    /s targets spaces.
    g is global flag.

    */

    const regex = /([^\s])+/g;
    const words = input.toLowerCase().match(regex);

    //typescript check so .map isn't mapping null
    if (!words || words.length === 0) {
      return wordCount;
    }

    /*.
    .set(key, value).
    key = the word.
    value = if there is already a value assigned to the word in the map add 1 to the pair. Or assign 1. 
    */

    words.map((word) => {
      wordCount.set(word, wordCount.get(word) ? wordCount.get(word) + 1 : 1);
    });

    return wordCount;
  }
}
