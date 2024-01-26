import { browser, browserVersion, mobile, os, osVersion } from "./features";
import { Sniff, Browsers, OS } from "./utils";

/**
 * @type {Sniff}
 * @description An object that provides various browser sniffing tools.
 *
 * @example
 * ```ts
 * import { sniff } from 'uakit.js';
 *
 * console.log(sniff.browser()); // Outputs: "Chrome", "Edge", "Firefox", "Safari", "Opera", or "Internet Explorer"
 * console.log(sniff.browserVersion()); // Outputs: "91", "92", etc.
 * console.log(sniff.mobile()); // Outputs: true or false
 * console.log(sniff.os()); // Outputs: "Android", "IOS", "MacOS", "Windows"
 * console.log(sniff.osVersion()); // Outputs: "10.15.7", "14.4", etc.
 * ```
 */
export const sniff: Sniff = {
  get browser() {
    return browser();
  },

  get browserVersion() {
    return browserVersion();
  },

  get mobile() {
    return mobile();
  },

  get os() {
    return os();
  },

  get osVersion() {
    return osVersion();
  },
};

// Exporting additional
export * from "@utils/typing";
export * from "@utils/functions";
