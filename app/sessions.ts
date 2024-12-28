import { environment } from "@/environment";
import log from "@/lib/logger";
import CryptoJS from "crypto-js";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";

type CookieKey = "access" | "refresh" | "email";

export const setSecureCookie = (
   key: CookieKey,
   value: string,
   options: Cookies.CookieAttributes = {},
): void => {
   const encryptedValue = CryptoJS.AES.encrypt(value, environment.cookieKey).toString();

   Cookies.set(key, encryptedValue, {
      secure: true,
      sameSite: "Strict",
      expires: options.expires ?? 1,
      ...options,
   });
};

export const getSecureCookie = (key: CookieKey): string | null => {
   const encryptedValue = Cookies.get(key);
   if (!encryptedValue) return null;

   try {
      const bytes = CryptoJS.AES.decrypt(encryptedValue, environment.cookieKey);
      return bytes.toString(CryptoJS.enc.Utf8);
   } catch (error) {
      log.error("Error decrypting cookie:", error);
      return null;
   }
};

export const deleteSecureCookie = (key: CookieKey): void => {
   Cookies.remove(key);
};

export const getUserClaims = () => {
   const token = getSecureCookie("access");
   if (!token) {
      return undefined;
   }
   const result: Record<string, string> = {};
   const claims = jwtDecode(token);
   for (const [key, val] of Object.entries(claims)) {
      result[key] = val.toString();
   }
   return result;
};

export const deleteAllCookies = (): void => {
   deleteSecureCookie("access");
   deleteSecureCookie("refresh");
   deleteSecureCookie("email");
};
