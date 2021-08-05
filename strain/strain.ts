/* ---Generic Types ---

Reuse functions for a variety of types while having a consistent input and output type. 

*/

export function keep<T>(arr: T[], fn: (value: T) => boolean): T[] {
  const resultArr: T[] = [];
  arr.forEach((n) => {
    fn(n) ? resultArr.push(n) : n;
  });
  return resultArr;
}

export function discard<T>(arr: T[], fn: (value: T) => boolean): T[] {
  const resultArr: T[] = [];
  arr.forEach((n) => {
    !fn(n) ? resultArr.push(n) : n;
  });
  return resultArr;
}
