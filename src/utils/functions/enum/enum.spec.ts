import { toEnum } from "./enum";

describe("toEnum tests", () => {
  test("should return an object with keys as values", () => {
    const arr = ["one", "two", "three"] as const;
    const result = toEnum(arr);
    expect(result).toEqual({ one: "one", two: "two", three: "three" });
  });

  test("should return an object with enumerated values", () => {
    const arr = ["one", "two", "three"] as const;
    const result = toEnum(arr, true);
    expect(result).toEqual({ one: 0, two: 1, three: 2 });
  });
});
