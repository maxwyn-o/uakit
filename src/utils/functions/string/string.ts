export const matchByIndex = (
  rgx: string | RegExp,
  toMatch: string,
  index = 0
) => {
  const match = toMatch.match(rgx);
  return match?.[index >= 0 ? index : match.length + index] ?? "";
};
