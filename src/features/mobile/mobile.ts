import { os } from "@features";

declare global {
  interface Navigator {
    userAgentData: any;
  }
}

/**
 * Determines if is a mobile device based
 * on the userAgent
 *
 * @returns {Boolean}
 *
 * @example
 * ```ts
 * import { sniff } from 'uakit.js';
 *
 * console.log(sniff.mobile); // true | false
 * ```
 */
export const mobile = (): boolean => {
  if (navigator.userAgentData?.mobile || os() === "Android" || os() === "IOS") {
    return true;
  }
  return false;
};
