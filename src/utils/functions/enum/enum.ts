import { ArrayTotuples } from "@utils/typing";

export const toEnum = <T extends readonly string[], K extends ArrayTotuples<T>>(
  arr: T,
  enumeratedValues = false
): Record<K, K | number> =>
  arr.reduce((acc, key: string, index) => {
    return !enumeratedValues
      ? {
          ...acc,
          [key]: key,
        }
      : {
          ...acc,
          [key]: index,
        };
  }, {} as Record<K, K | number>);
