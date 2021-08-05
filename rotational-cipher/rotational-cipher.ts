import { getCiphers } from "crypto";

export default class RotationalCipher {
  public static rotate = (text: string, key: number): string => {
    //Create a cipherMap of key, value pairs
    //a = 0, b = 1, c = 3 etc...
    const cipherMap = new Map();
    let charCode = 97; //starts at character 'a'
    let index = 0;

    for (let i = 0; i < 26; i++) {
      cipherMap.set(String.fromCharCode(charCode), index);
      charCode++;
      index++;
    }

    //Search cipher Map by number and return string
    const getByValue = (map: Map<string, number>, search: number): string => {
      for (const [key, value] of map.entries()) {
        if (value === search) return key;
      }
      return " ";
    };

    return text
      .split("")
      .map((character) => {
        const isLowerCase = character.toLowerCase() === character;
        const cipherIndex = cipherMap.get(character.toLowerCase());

        const newPosition = (cipherIndex + key) % 26;
        const rotatedCipher =
          cipherIndex === undefined //cipherIndex === undefined if not a-z character.
            ? character
            : getByValue(cipherMap, newPosition);
        return isLowerCase ? rotatedCipher : rotatedCipher.toUpperCase();
      })
      .join("");
  };
}