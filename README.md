# uakit.js

`uakit.js` is a utility library that provides various browser sniffing tools. It can be used to detect the browser, browser version, operating system, operating system version, and whether the device is mobile or not.

## Installation

You can install `uakit.js` using npm:

```sh
npm install uakit.js
```

## Usage

Here's how you can use `uakit.js`:

```ts
import { sniff } from "uakit.js";

console.log(sniff.browser()); // Outputs: "Chrome", "Edge", "Firefox", "Safari", "Opera", or "Internet Explorer"
console.log(sniff.browserVersion()); // Outputs: "91", "92", etc.
console.log(sniff.mobile()); // Outputs: true or false
console.log(sniff.os()); // Outputs: "Android", "IOS", "MacOS", "Windows"
console.log(sniff.osVersion()); // Outputs: "10.15.7", "14.4", etc.
```

## API

`uakit.js` exports a `sniff` object with the following methods:

- `browser()`: Returns the name of the browser.
- `browserVersion()`: Returns the version of the browser.
- `mobile()`: Returns `true` if the device is mobile, `false` otherwise.
- `os()`: Returns the name of the operating system.
- `osVersion()`: Returns the version of the operating system.

In addition to the `sniff` object, `uakit.js` also exports additional utilities from `@utils/typing` and `@utils/functions`.

## Additional Information

The `@utils/typing` export includes the following:

- `Browsers`: A type representing the possible browsers.
- `OS`: A type representing the possible operating systems.

The `sniff` object is of type `Sniff`, which is defined as follows:

```ts
export interface Sniff {
  browser: Browsers;
  browserVersion: string;
  mobile: Boolean;
  os: OS;
  osVersion: string;
}
```

The `systems` constant is an array of possible operating systems:

```ts
export const systems = ["Android", "IOS", "Windows", "MacOS"] as const;
```

The `OS` type is defined as follows:

```ts
export type OS = (typeof systems)[number];
```

The `browsers` constant is an array of possible browsers:

```ts
export const browsers = [
  "Chrome",
  "Edge",
  "Firefox",
  "Internet Explorer",
  "Safari",
  "Opera",
] as const;
```

The `Browsers` type is defined as follows:

```ts
export type Browsers = (typeof browsers)[number];
```

The `@utils/functions` export includes the following:

- `matchByIndex`: A function that matches a string with a regular expression and returns the match at the specified index.

```ts
export const matchByIndex = (
  rgx: string | RegExp,
  toMatch: string,
  index = 0
) => {
  const match = toMatch.match(rgx);
  return match?.[index >= 0 ? index : match.length + index] ?? "";
};
```

- `toEnum`: A function that converts an array to an Enum.

```ts
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
```

Here's an example of how you could use `toEnum` with the `browsers` and `systems` arrays:

```js
import { toEnum, browsers, systems } from "uakit.js";

const BrowsersEnum = toEnum(browsers);
const SystemsEnum = toEnum(systems);

console.log(BrowsersEnum.Chrome); // Outputs: "Chrome"
console.log(SystemsEnum.Android); // Outputs: "Android"
```

In this example, `BrowsersEnum` and `SystemsEnum` are objects where the keys are the browser and system names, respectively, and the values are the same as the keys. This can be useful for providing a form of type safety, as you can now use `BrowsersEnum.Chrome` instead of the string `"Chrome"`, and if you make a typo (e.g., `BrowsersEnum.Chrme`), your IDE or linter can catch the error.

You can also use `toEnum` with the second argument set to `true` to get an object where the values are the indices of the strings in the array:

```js
const BrowsersEnum = toEnum(browsers, true);
const SystemsEnum = toEnum(systems, true);

console.log(BrowsersEnum.Chrome); // Outputs: 0
console.log(SystemsEnum.Android); // Outputs: 0
```

In this case, `BrowsersEnum.Chrome` and `SystemsEnum.Android` output `0`, which is the index of `"Chrome"` and `"Android"` in the `browsers` and `systems` arrays, respectively. This can be useful for cases where you want to associate each string with a unique numeric value.

For pure JavaScript developers, using such enumerated types can help catch errors at compile-time rather than at runtime, make the code more readable and self-documenting, and provide a central place for defining sets of related constants. It's a small step towards bringing some of the benefits of static typing to JavaScript.

## License

MIT
