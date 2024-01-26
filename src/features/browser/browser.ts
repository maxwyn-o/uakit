import { mobile } from "@features";
import { Browsers } from "@utils/index";

const iphoneSafari =
  !navigator.userAgent.includes("CriOS") &&
  navigator.userAgent.includes("iPhone");
const macSafari =
  navigator.userAgent.includes("MacIntel") ||
  navigator.userAgent.includes("Macintosh");

/**
 * Determines the browser based on the userAgent
 *
 *
 * @see {@link https://gs.statcounter.com/browser-market-share#monthly-202212-202312-bar} Browser Support Reference
 *
 * @returns {Browsers}
 *
 * @example
 * ```ts
 * import { sniff } from 'uakit.js';
 *
 * console.log(sniff.browser); // Chrome
 * ```
 */
export const browser = (): Browsers => {
  if (
    navigator.userAgent.includes("Edg/") ||
    navigator.userAgent.includes("EdgiOS/")
  ) {
    return "Edge";
  }

  if (
    navigator.userAgent.includes("OPR/") ||
    navigator.userAgent.includes("OPiOS/")
  ) {
    return "Opera";
  }

  if (
    (!navigator.userAgent.includes("Edg") &&
      navigator.userAgent.includes("CriOS")) ||
    (!navigator.userAgent.includes("Edg") &&
      navigator.userAgent.includes("Chrome/"))
  ) {
    return "Chrome";
  }

  if (
    navigator.userAgent.includes("Firefox/") ||
    navigator.userAgent.includes("FxiOS/")
  ) {
    return "Firefox";
  }

  if (iphoneSafari || macSafari) {
    return "Safari";
  }

  return "Internet Explorer";
};
