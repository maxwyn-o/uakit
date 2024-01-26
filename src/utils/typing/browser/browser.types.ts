export const browsers = [
  "Chrome",
  "Edge",
  "Firefox",
  "Internet Explorer",
  "Safari",
  "Opera",
] as const;

export type Browsers = (typeof browsers)[number];
