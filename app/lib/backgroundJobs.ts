import { getSecureCookie } from "@/sessions";

export const refreshTokenJob = async () => {
   const accessToken = getSecureCookie("access");
   const refreshToken = getSecureCookie("refresh");
   if (!accessToken || !refreshToken) {
      console.log("refresh or access token missing");
      return;
   }
   new Promise((resolve) => setTimeout(() => resolve(console.log("ran job REFRESH token")), 1000));
};

export const accessTokenJob = async () => {
   const accessToken = getSecureCookie("access");
   if (!accessToken) {
      console.log("access token missing");
      return;
   }
   new Promise((resolve) => setTimeout(() => resolve(console.log("ran job ACCESS token")), 1000));
};
