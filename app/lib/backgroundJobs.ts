import { api } from "@/api/api";
import { HeadersBuilder, HttpStatus, getErrorResponse } from "@/api/util";
import log from "@/lib/logger";
import { sleep } from "@/lib/util";
import { deleteAllCookies, getSecureCookie, setSecureCookie } from "@/sessions";

interface StartIntervalProps {
   interval: number;
   job: () => Promise<void>;
   timeout: number;
}
export const jobInterval = async ({ interval, job, timeout }: StartIntervalProps) => {
   const jobWrapper = async () => {
      try {
         const timeoutPromise = new Promise((_, reject) =>
            setTimeout(() => reject(new Error("Timeout reached!")), timeout),
         );
         await Promise.race([job(), timeoutPromise]);
      } catch (error) {
         log.error("Error running background jobs:", error);
      }
   };
   await sleep(250);
   await jobWrapper();
   setInterval(async () => {
      await jobWrapper();
   }, interval);
};

export const refreshTokenJob = async () => {
   const accessToken = getSecureCookie("access");
   const refreshToken = getSecureCookie("refresh");

   if (!accessToken || !refreshToken) return;

   const headers = HeadersBuilder.New()
      .setAccessToken(accessToken)
      .setRefreshToken(refreshToken)
      .build();

   try {
      await api.isActive({ type: "refresh" }, headers);

      const response = await api.newAccessToken(headers);

      const newAccessToken = response.data.accessToken;

      if (newAccessToken) {
         setSecureCookie("access", newAccessToken);
      }
   } catch (error) {
      log.warn("Error occurred during refreshTokenJob:", error);
      const errRes = await getErrorResponse(error);

      !errRes ? log.info("ERR_RES", JSON.stringify(errRes)) : log.info("ERR_RES FOUND NULLLLL");

      if (errRes?.isStatus(HttpStatus.Unauthorized)) {
         log.warn("Unauthorized (401) error. Deleting all cookies");
         deleteAllCookies();
      } else {
         log.error("Unexpected error response:", errRes);
      }
   }
};

export const accessTokenJob = async () => {
   log.info("Starting accessTokenJob");
   const accessToken = getSecureCookie("access");

   if (!accessToken) {
      log.warn("Access token missing.");
      return;
   }

   try {
      log.info("Checking if access token is active");
      await api.isActive(
         { type: "access" },
         {
            headers: {
               "x-cur-access": accessToken,
            },
         },
      );
      log.info("Access token is active.");
   } catch (error) {
      log.warn("Error occurred during accessTokenJob:", error);
      const errRes = await getErrorResponse(error);

      !errRes ? log.info("ERR_RES", JSON.stringify(errRes)) : log.info("ERR_RES FOUND NULLLLL");

      if (errRes?.isStatus(HttpStatus.Unauthorized)) {
         log.warn("Unauthorized (401) error. Calling refreshTokenJob");
         await refreshTokenJob();
      } else {
         log.error("Unexpected error response:", errRes);
      }
   }
};
