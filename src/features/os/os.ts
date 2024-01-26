import { OS } from "@utils/index";

/**
 * Determines the Operating System of the device
 * based on the userAgent
 *
 * @returns {OS}
 *
 * @example
 * ```ts
 * import { sniff } from 'uakit.js';
 *
 * console.log(sniff.os); // Windows
 * ```
 */
export const os = (): OS => {
  const userAgent = navigator.userAgent;
  const platform = navigator.platform;
  const isIPad = userAgent.includes("Mac OS") && navigator.maxTouchPoints > 1;

  if (userAgent.includes("Windows NT")) {
    return "Windows";
  } else if (userAgent.includes("Android")) {
    return "Android";
  } else if (userAgent.includes("iPhone") || isIPad) {
    return "IOS";
  } else if (userAgent.includes("Mac OS") || platform === "MacIntel") {
    return "MacOS";
  } else {
    return "Windows";
  }
};
