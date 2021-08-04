import { getCiphers } from "crypto";

// const cipher = "abcdefghijklmnopqrstuvwxyz";

export default class RotationalCipher {
  public static rotate = (text: string, key: number): string => {

    //search cipher Map by string and return number
    const getByValue = (map: Map<string, number>, search: string): number => {
      for (const [key, value] of map.entries()) {
        if (key === search) return value;
      }
      return NaN;
    };

    const cipherMap = new Map();
    let charCode = 97; //starts at character 'a'
    let index = 0;

    for (let i = 0; i < 26; i++) {
      cipherMap.set(String.fromCharCode(charCode), index);
      charCode++;
      index++;
    }

    console.log(getByValue(cipherMap, "z"));

    return text
      .split("")
      .map((character) => {
        const isLowerCase = character.toLowerCase() === character;
        const cipherIndex = cipherMap.get(character.toLowerCase());

        const difference = cipherIndex + key;
        const rotatedCipher =
          cipherIndex === -1 ? character : cipherMap.get(getByValue(cipherMap, character));
        return isLowerCase ? rotatedCipher : rotatedCipher.toUpperCase();
      })
      .join("");
  };
}

// const regex = /[^\s]/g;
// const matchedText = text.match(regex);

// if (!matchedText || matchedText.length === 0) {
//   return text;
// }

// matchedText.map((character) => {
//   const isLowerCase = character.toLowerCase() === character;
//   const cipherIndex = cipher.indexOf(character.toLowerCase());
//   const rotatedCipher = cipher[(cipherIndex + key) % cipher.length];
//   return isLowerCase ? rotatedCipher : rotatedCipher.toUpperCase();
// });

// return matchedText.join("")
