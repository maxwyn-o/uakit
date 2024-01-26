type Navigator = Partial<Window["navigator"]>;

export const CHROME_WINDOWS: Navigator = {
  maxTouchPoints: 0,
  userAgent:
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
  userAgentData: {
    brands: [
      { brand: "Not_A Brand", version: "8" },
      { brand: "Chromium", version: "120" },
      { brand: "Google Chrome", version: "120" },
    ],
    mobile: false,
    platform: "Windows",
  },
  vendor: "Google Inc.",
  platform: "Win32",
};

export const FIREFOX_WINDOWS: Navigator = {
  maxTouchPoints: 0,
  userAgent:
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:122.0) Gecko/20100101 Firefox/122.0",
  userAgentData: undefined,
  vendor: "",
  platform: "Win32",
};

export const EDGE_WINDOWS: Navigator = {
  maxTouchPoints: 0,
  userAgent:
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36 Edg/120.0.0.0",
  userAgentData: {
    brands: [
      { brand: "Not_A Brand", version: "8" },
      { brand: "Chromium", version: "120" },
      { brand: "Microsoft Edge", version: "120" },
    ],
    mobile: false,
    platform: "Windows",
  },
  vendor: "Google Inc.",
  platform: "Win32",
};

export const OPERA_WINDOWS: Navigator = {
  maxTouchPoints: 0,
  userAgent:
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36 OPR/106.0.0.0",
  userAgentData: {
    brands: [
      { brand: "Not_A Brand", version: "8" },
      { brand: "Chromium", version: "120" },
      { brand: "Opera", version: "106" },
    ],
    mobile: false,
    platform: "Windows",
  },
  vendor: "Google Inc.",
  platform: "Win32",
};

// MAC OS
export const MAC_CHROME: Navigator = {
  maxTouchPoints: 0,
  userAgent:
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
  userAgentData: {
    brands: [
      { brand: "Not A;Brand", version: "120" },
      { brand: "Chromium", version: "120" },
      { brand: "Google Chrome", version: "120" },
    ],
    mobile: false,
    platform: "macOS",
  },
  vendor: "Google Inc.",
  platform: "MacIntel",
};

export const MAC_FIREFOX: Navigator = {
  maxTouchPoints: 0,
  userAgent:
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15) Gecko/20100101 Firefox/122.0",
  userAgentData: undefined,
  vendor: "",
  platform: "MacIntel",
};

export const MAC_EDGE: Navigator = {
  maxTouchPoints: 0,
  userAgent:
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36 Edg/120.0.0.0",
  userAgentData: {
    brands: [
      { brand: "Not_A Brand", version: "8" },
      { brand: "Chromium", version: "120" },
      { brand: "Microsoft Edge", version: "120" },
    ],
    mobile: false,
    platform: "Mac OS",
  },
  vendor: "Google Inc.",
  platform: "MacIntel",
};

export const MAC_OPERA: Navigator = {
  maxTouchPoints: 0,
  userAgent:
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36 OPR/106.0.0.0",
  userAgentData: {
    brands: [
      { brand: "Not_A Brand", version: "8" },
      { brand: "Chromium", version: "106" },
      { brand: "Opera", version: "106" },
    ],
    mobile: false,
    platform: "Mac OS",
  },
  vendor: "Google Inc.",
  platform: "MacIntel",
};

// PHONE ANDROID
export const CHROME_ANDROID: Navigator = {
  maxTouchPoints: 1,
  userAgent:
    "Mozilla/5.0 (Linux; Android 9.0; SAMSUNG SM-F900U Build/PPR1.180610.011) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Mobile Safari/537.36",
  userAgentData: {
    brands: [
      { brand: "Not_A Brand", version: "8" },
      { brand: "Chromium", version: "120" },
      { brand: "Google Chrome", version: "120" },
    ],
    mobile: true,
    platform: "Android",
  },
  vendor: "Google Inc.",
  platform: "Android",
};

export const FIREFOX_ANDROID: Navigator = {
  maxTouchPoints: 1,
  userAgent:
    "Mozilla/5.0 (Android 10; Mobile; rv:122.0) Gecko/122.0 Firefox/122.0",
  userAgentData: undefined,
  vendor: "",
  platform: "Android",
};

export const EDGE_ANDROID: Navigator = {
  maxTouchPoints: 1,
  userAgent:
    "Mozilla/5.0 (Linux; Android 10) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36 Edg/120.0.0.0",
  userAgentData: {
    brands: [
      { brand: "Not_A Brand", version: "8" },
      { brand: "Chromium", version: "120" },
      { brand: "Microsoft Edge", version: "120" },
    ],
    mobile: true,
    platform: "Android",
  },
  vendor: "Google Inc.",
  platform: "Android",
};

export const ANDROID_OPERA: Navigator = {
  maxTouchPoints: 1,
  userAgent:
    "Mozilla/5.0 (Linux; Android 13; SM-G780G) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.6045.193 Mobile Safari/537.36 OPR/79.6.4195.77168",
  userAgentData: {
    brands: [
      { brand: "Not_A Brand", version: "8" },
      { brand: "Chromium", version: "120" },
      { brand: "Microsoft Edge", version: "106" },
    ],
    mobile: true,
    platform: "Android",
  },
  vendor: "Google Inc.",
  platform: "Android",
};

// iOS
export const CHROME_IOS: Navigator = {
  maxTouchPoints: 5,
  userAgent:
    "Mozilla/5.0 (iPhone; CPU iPhone OS 15_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/120.0.0.0 Mobile/15E148 Safari/604.1",
  userAgentData: undefined,
  vendor: "Google Inc.",
  platform: "iPhone",
};

export const FIREFOX_IOS: Navigator = {
  maxTouchPoints: 5,
  userAgent:
    "Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) FxiOS/122.0 Mobile/15E148 Safari/605.1.15",
  userAgentData: undefined,
  vendor: "",
  platform: "iPhone",
};

export const EDGE_IOS: Navigator = {
  maxTouchPoints: 5,
  userAgent:
    "Mozilla/5.0 (iPhone; CPU iPhone OS 17_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 EdgiOS/120.2210.150 Mobile/15E148 Safari/605.1.15",
  userAgentData: undefined,
  vendor: "Microsoft Inc.",
  platform: "iPhone",
};

export const OPERA_IOS: Navigator = {
  maxTouchPoints: 5,
  userAgent:
    "Mozilla/5.0 (iPhone; CPU iPhone OS 16_4_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) OPiOS/16.0.15.124050 Mobile/15E148 Safari/9537.53",
  userAgentData: undefined,
  vendor: "Microsoft Inc.",
  platform: "iPhone",
};
