import {
  ANDROID_OPERA,
  CHROME_ANDROID,
  CHROME_IOS,
  CHROME_WINDOWS,
  EDGE_ANDROID,
  EDGE_WINDOWS,
  FIREFOX_IOS,
  FIREFOX_WINDOWS,
  MAC_CHROME,
  MAC_EDGE,
  MAC_FIREFOX,
  MAC_OPERA,
  OPERA_WINDOWS,
} from "../utils/test/mocks/ua.mock";
import { sniff } from "../index";
import {
  EDGE_IOS,
  FIREFOX_ANDROID,
  OPERA_IOS,
} from "../utils/test/mocks/ua.mock";

describe("sniff", () => {
  let windowSpy: any;

  beforeEach(() => {
    windowSpy = jest.spyOn(window, "navigator", "get");
  });

  afterEach(() => {
    windowSpy.mockRestore();
  });

  it("should return the correct platform (windows with chrome)", () => {
    windowSpy.mockImplementation(() => CHROME_WINDOWS);

    const platform = {
      mobile: false,
      os: "Windows",
      browser: "Chrome",
      browserVersion: "120",
      osVersion: "10.0",
    };

    expect(platform).toStrictEqual(sniff);
  });

  it("should return the correct platform (windows with Firefox)", () => {
    windowSpy.mockImplementation(() => FIREFOX_WINDOWS);

    const platform = {
      mobile: false,
      os: "Windows",
      browser: "Firefox",
      browserVersion: "122",
      osVersion: "10.0",
    };

    expect(platform).toStrictEqual(sniff);
  });

  it("should return the correct platform (windows with Edge)", () => {
    windowSpy.mockImplementation(() => EDGE_WINDOWS);

    const platform = {
      mobile: false,
      os: "Windows",
      browser: "Edge",
      browserVersion: "120",
      osVersion: "10.0",
    };

    expect(platform).toStrictEqual(sniff);
  });

  it("should return the correct platform (windows with Opera)", () => {
    windowSpy.mockImplementation(() => OPERA_WINDOWS);

    const platform = {
      mobile: false,
      os: "Windows",
      browser: "Opera",
      browserVersion: "106",
      osVersion: "10.0",
    };

    expect(platform).toStrictEqual(sniff);
  });

  it("should return the correct platform (IOS with chrome)", () => {
    windowSpy.mockImplementation(() => CHROME_IOS);

    const platform = {
      mobile: true,
      os: "IOS",
      browser: "Chrome",
      browserVersion: "120",
      osVersion: "15.0",
    };

    expect(platform).toStrictEqual(sniff);
  });

  it("should return the correct platform (MAC with chrome)", () => {
    windowSpy.mockImplementation(() => MAC_CHROME);

    const platform = {
      mobile: false,
      os: "MacOS",
      browser: "Chrome",
      browserVersion: "120",
      osVersion: "10.15.6",
    };

    expect(platform).toStrictEqual(sniff);
  });

  it("should return the correct platform (MAC with Firefox)", () => {
    windowSpy.mockImplementation(() => MAC_FIREFOX);

    const platform = {
      mobile: false,
      os: "MacOS",
      browser: "Firefox",
      browserVersion: "122",
      osVersion: "10.15",
    };

    expect(platform).toStrictEqual(sniff);
  });

  it("should return the correct platform (MAC with Firefox)", () => {
    windowSpy.mockImplementation(() => MAC_EDGE);

    const platform = {
      mobile: false,
      os: "MacOS",
      browser: "Edge",
      browserVersion: "120",
      osVersion: "10.15",
    };

    expect(platform).toStrictEqual(sniff);
  });

  it("should return the correct platform (MAC with Opera)", () => {
    windowSpy.mockImplementation(() => MAC_OPERA);

    const platform = {
      mobile: false,
      os: "MacOS",
      browser: "Opera",
      browserVersion: "106",
      osVersion: "10.15",
    };

    expect(platform).toStrictEqual(sniff);
  });

  it("should return the correct platform (IOS with chrome)", () => {
    windowSpy.mockImplementation(() => EDGE_IOS);

    const platform = {
      mobile: true,
      os: "IOS",
      browser: "Edge",
      browserVersion: "120",
      osVersion: "17.3",
    };

    expect(platform).toStrictEqual(sniff);
  });

  it("should return the correct platform (IOS with Firefox)", () => {
    windowSpy.mockImplementation(() => FIREFOX_IOS);

    const platform = {
      mobile: true,
      os: "IOS",
      browser: "Firefox",
      browserVersion: "122",
      osVersion: "14.3",
    };

    expect(platform).toStrictEqual(sniff);
  });

  it("should return the correct platform (Android with Chrome)", () => {
    windowSpy.mockImplementation(() => CHROME_ANDROID);

    const platform = {
      mobile: true,
      os: "Android",
      browser: "Chrome",
      browserVersion: "120",
      osVersion: "9.0",
    };

    expect(platform).toStrictEqual(sniff);
  });

  it("should return the correct platform (Android with Firefox)", () => {
    windowSpy.mockImplementation(() => FIREFOX_ANDROID);

    const platform = {
      mobile: true,
      os: "Android",
      browser: "Firefox",
      browserVersion: "122",
      osVersion: "10",
    };

    expect(platform).toStrictEqual(sniff);
  });

  it("should return the correct platform (Android with Edge)", () => {
    windowSpy.mockImplementation(() => EDGE_ANDROID);

    const platform = {
      mobile: true,
      os: "Android",
      browser: "Edge",
      browserVersion: "120",
      osVersion: "10",
    };

    expect(platform).toStrictEqual(sniff);
  });

  it("should return the correct platform (Android with Opera)", () => {
    windowSpy.mockImplementation(() => ANDROID_OPERA);

    const platform = {
      mobile: true,
      os: "Android",
      browser: "Opera",
      browserVersion: "79",
      osVersion: "13",
    };

    expect(platform).toStrictEqual(sniff);
  });

  it("should return the correct platform (iOS with Opera)", () => {
    windowSpy.mockImplementation(() => OPERA_IOS);

    const platform = {
      mobile: true,
      os: "IOS",
      browser: "Opera",
      browserVersion: "16",
      osVersion: "16.4.1",
    };

    expect(platform).toStrictEqual(sniff);
  });
});
