/* --- Regex Notes --- 

. matches any character except line breaks
() is a grouping
\1 after a grouping describes its length as 2 characters long
+ is any amount more
g flag is global
\d is [0-9]

*/

const encode = (str: string): string => {
  return str.replace(/(.)\1+/g, (match) => match.length + match[0]);
};

const decode = (str: string): string => {
  return str.replace(/(\d+)(.)/g, (_, digit, character) =>
    character.repeat(digit)
  );
};

export default {
  encode,
  decode,
};
