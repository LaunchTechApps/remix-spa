import { api } from "@/api/api";
import { getErrorResponse, HttpStatus } from "@/api/util";
import { deleteAllCookies, getSecureCookie, setSecureCookie } from "@/sessions";
import { sleep } from "@/lib/util";
import log from "@/lib/logger";

interface StartIntervalProps {
   interval: number;
   job: () => Promise<void>;
   timeout: number;
}

export const jobInterval = async ({ interval, job, timeout }: StartIntervalProps) => {
   const allFuncs = async () => {
      try {
         const timeoutPromise = new Promise((_, reject) =>
            setTimeout(() => reject(new Error("Timeout reached!")), timeout),
         );
         await Promise.race([job, timeoutPromise]);
      } catch (error) {
         log.error("Error running background jobs:", error);
      }
   };
   await sleep(0);
   await allFuncs();
   setInterval(async () => {
      await allFuncs();
   }, interval);
};

export const refreshTokenJob = async () => {
   log.info("Starting refreshTokenJob...");
   const accessToken = getSecureCookie("access");
   const refreshToken = getSecureCookie("refresh");

   if (!accessToken || !refreshToken) {
      log.warn(
         "Refresh or access token missing. Access:",
         !!accessToken,
         "Refresh:",
         !!refreshToken,
      );
      return;
   }

   const headers = new Headers();
   headers.append("x-cur-access", accessToken);
   headers.append("x-cur-refresh", refreshToken);

   try {
      log.info("Checking if refresh token is active...");
      await api.isActive(
         { type: "refresh" },
         {
            headers: {
               "x-cur-access": accessToken,
               "x-cur-refresh": refreshToken,
            },
         },
      );
      log.info("Refresh token is active. Requesting new access token...");

      const response = await api.newAccessToken({
         headers: {
            "x-cur-access": accessToken,
            "x-cur-refresh": refreshToken,
         },
      });
      const newAccessToken = response.data.accessToken;

      if (newAccessToken) {
         log.info("New access token received. Updating secure cookie...");
         setSecureCookie("access", newAccessToken);
      } else {
         log.warn("No access token returned in response.");
      }
   } catch (error) {
      log.error("Error occurred during refreshTokenJob:", error);
      const errRes = await getErrorResponse(error);

      if (errRes) {
         log.info("ERR_RES", JSON.stringify(errRes));
      } else {
         log.info("ERR_RES FOUND NULLLLL");
      }

      if (errRes?.isStatus(HttpStatus.Unauthorized)) {
         log.warn("Unauthorized (401) error. Deleting all cookies...");
         deleteAllCookies();
      } else {
         log.error("Unexpected error response:", errRes);
      }
   }
};

export const accessTokenJob = async () => {
   log.info("Starting accessTokenJob...");
   const accessToken = getSecureCookie("access");

   if (!accessToken) {
      log.warn("Access token missing.");
      return;
   }

   try {
      log.info("Checking if access token is active...");
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
      log.error("Error occurred during accessTokenJob:", error);
      const errRes = await getErrorResponse(error);

      if (errRes && errRes.status === 401) {
         log.warn("Unauthorized (401) error. Calling refreshTokenJob...");
         await refreshTokenJob();
      } else {
         log.error("Unexpected error response:", errRes);
      }
   }
};
