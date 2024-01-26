import { Browsers } from "@utils/index";
import { OS } from "@utils/index";

export interface Sniff {
  browser: Browsers;
  browserVersion: string;
  mobile: Boolean;
  os: OS;
  osVersion: string;
}
