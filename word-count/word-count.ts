export default class Words {
  public wordCount(words: string) {
    let returnObj: string,
      {} = {};
    let wordArr: string[] = words.split(" ");

    wordArr.map((word) => {
      returnObj[word] = word;
    });
  }
}
