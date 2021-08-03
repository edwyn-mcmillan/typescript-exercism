const encode = (str: string): string => {
  let count: number = 0;
  const strArr: string[] = str.split("");
  strArr.map((char, i) => {
    if (char === strArr[i - 1]) {
      count++;
    } else {
      String(count) + " " + char;
      count = 0;
    }
  });
  return strArr.join('')
};

const decode = (str: string): string => {
  const strArr: string[] = str.split("");
  return "yes";
};

export default {
  encode,
  decode,
};
