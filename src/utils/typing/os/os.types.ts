export const systems = ["Android", "IOS", "Windows", "MacOS"] as const;

export type OS = (typeof systems)[number];
