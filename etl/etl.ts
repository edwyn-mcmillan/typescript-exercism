const transform = (oldScore: {
  [key: string]: string[];
}): { [key: string]: number } => {
  const result: { [key: string]: number } = {};

  for (const [points, letters] of Object.entries(oldScore)) {
    letters.forEach((character) => {
      result[character.toLowerCase()] = Number(points);
    });
  }
  return result;
};

export default transform;
