import { deleteSecureCookie, getSecureCookie } from "@/sessions";
import { type ReactNode, createContext, useContext, useEffect, useMemo, useState } from "react";

interface UserSessionContextType {
   accessToken: string;
   isSignedIn: boolean;
   signIn: (accessToken: string) => void;
   signOut: () => void;
}

const UserSessionContext = createContext<UserSessionContextType | undefined>(undefined);
export const UserSessionProvider = ({ children }: { children: ReactNode }) => {
   const [accessToken, setAccessToken] = useState("");
   const [isSignedIn, setSignedIn] = useState(false);

   useEffect(() => {
      const timeout = setTimeout(() => {
         const token = getSecureCookie("access");
         if (token) {
            setSignedIn(true);
            setAccessToken(accessToken);
         }
      }, 0);
      return () => clearTimeout(timeout);
   }, []);

   const signIn = (accessToken: string) => {
      setAccessToken(accessToken);
      setSignedIn(true);
   };

   const signOut = () => {
      setAccessToken("");
      setSignedIn(false);
      deleteSecureCookie("access");
      deleteSecureCookie("refresh");
   };

   const value = useMemo(
      () => ({ accessToken, isSignedIn, signIn, signOut }),
      [accessToken, isSignedIn],
   );

   return <UserSessionContext.Provider value={value}>{children}</UserSessionContext.Provider>;
};

export const useSession = () => {
   const context = useContext(UserSessionContext);
   if (!context) {
      throw new Error("useColorTheme must be used within a ColorThemeProvider");
   }
   return context;
};
