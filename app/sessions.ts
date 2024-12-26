import { createCookieSessionStorage } from "@remix-run/node";
import { milliTo, secondsTo } from "@/lib/util";

type SessionData = {
   refreshToken: string;
   accessToken: string;
};

type SessionFlashData = {
   error: string;
};

const { getSession, commitSession, destroySession } = createCookieSessionStorage<
   SessionData,
   SessionFlashData
>({
   cookie: {
      name: "__session",

      // all of these are optional
      domain: "remix.run",
      // Expires can also be set (although maxAge overrides it when used in combination).
      // Note that this method is NOT recommended as `new Date` creates only one date on each server deployment, not a dynamic date in the future!
      //
      expires: new Date(Date.now() + milliTo.days(14)),
      httpOnly: true,
      maxAge: secondsTo.days(90),
      path: "/",
      sameSite: "lax",
      secrets: ["need_to_change_this"],
      secure: true,
   },
});

const session = { get: getSession, commit: commitSession, destroy: destroySession };

export { session };
