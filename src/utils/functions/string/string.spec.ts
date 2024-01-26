import { matchByIndex } from "./string";

describe("matchByIndex tests", () => {
  test("should return the match at the specified index", () => {
    const rgx = /(\d+)/g;
    const toMatch = "123 abc 456 def 789";
    const result = matchByIndex(rgx, toMatch, 1);
    expect(result).toBe("456");
  });

  test("should return an empty string if no match is found", () => {
    const rgx = /(\d+)/g;
    const toMatch = "abc def";
    const result = matchByIndex(rgx, toMatch, 0);
    expect(result).toBe("");
  });

  test("should return the last match if index is negative", () => {
    const rgx = /(\d+)/g;
    const toMatch = "123 abc 456 def 789";
    const result = matchByIndex(rgx, toMatch, -1);
    expect(result).toBe("789");
  });
});
