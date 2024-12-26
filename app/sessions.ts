import Cookies from "js-cookie";
import CryptoJS from "crypto-js";
import { environment } from "@/environment";

export const setSecureCookie = (
   key: string,
   value: string,
   options: Cookies.CookieAttributes = {},
): void => {
   const encryptedValue = CryptoJS.AES.encrypt(value, environment.cookieKey).toString();

   Cookies.set(key, encryptedValue, {
      secure: true,
      sameSite: "Strict",
      expires: 7,
      ...options,
   });
};

export const getSecureCookie = (key: string): string | null => {
   const encryptedValue = Cookies.get(key);
   if (!encryptedValue) return null;

   try {
      const bytes = CryptoJS.AES.decrypt(encryptedValue, environment.cookieKey);
      return bytes.toString(CryptoJS.enc.Utf8);
   } catch (error) {
      console.error("Error decrypting cookie:", error);
      return null;
   }
};

export const deleteSecureCookie = (key: string): void => {
   Cookies.remove(key);
};
