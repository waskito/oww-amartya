import Cookies from "js-cookie";
import uCookies from "universal-cookie";

export const CAN_USE_DOM = typeof window !== "undefined";

export const getCookie = (key, req = null) => {
  return !CAN_USE_DOM && req
    ? getCookieFromServer(key, req)
    : getCookieFromBrowser(key);
};

export const getCookieFromBrowser = (key) => {
  return Cookies.get(key);
};

export const getCookieFromServer = (key, req) => {
  if (req) {
    const cookies = new uCookies(req.headers.cookie);
    return cookies.get(key);
  }
  return null;
};
