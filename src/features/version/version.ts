import { OS, matchByIndex, Browsers } from "@utils/index";
import { browser, os } from "@features";

const iPad =
  navigator.userAgent.includes("Mac OS") && navigator.maxTouchPoints > 1;

/**
 * Determines the Operating System version
 * based on the userAgent
 *
 * @returns {string}
 *
 * @example
 * ```ts
 * import { sniff } from 'uakit.js';
 *
 * console.log(sniff.osVersion); // 10.15.7 (Mac OS)
 * ```
 */
export const osVersion = (): string => {
  const alias: Record<OS, string> = {
    Android: "Android",
    IOS: "iPhone OS",
    MacOS: `${
      iPad && navigator.userAgent.includes("CPU OS") ? "CPU OS" : "Mac OS X"
    }`,
    Windows: "Windows NT",
  };

  const version = matchByIndex(
    new RegExp(`${alias[os()]}\\s([\\d._]+)`),
    navigator.userAgent,
    1
  );

  return version ? `${version.replace(/_/g, ".")}` : "";
};

/**
 * Determines the Browser version
 * based on the userAgent
 *
 * @returns {string}
 *
 * @example
 * ```ts
 * import { sniff } from 'uakit.js';
 *
 * console.log(sniff.browserVersion); // 120 (Chrome)
 * ```
 */
export const browserVersion = (): string => {
  const currentBrowser = browser();
  const currentOS = os();

  const alias: Record<Browsers, string> = {
    Chrome: `${currentOS === "IOS" ? "CriOS" : "Chrome"}`,
    Edge: `${currentOS === "IOS" ? "EdgiOS" : "Edg"}`,
    "Internet Explorer": "rv",
    Firefox: `${currentOS === "IOS" ? "FxiOS" : "Firefox"}`,
    Safari: "Version",
    Opera: `${currentOS === "IOS" ? "OPiOS" : "OPR"}`,
  };

  const result = alias[currentBrowser];
  const pattern = new RegExp(
    result !== "rv" ? `${result}\\/(\\d+)` : `${result}:(\\d+)`
  );

  return matchByIndex(pattern, navigator.userAgent, 1);
};
