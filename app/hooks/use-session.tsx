import { api } from "@/api/api";
import { deleteSecureCookie, getSecureCookie, getUserClaims } from "@/sessions";
import { type ReactNode, createContext, useContext, useEffect, useMemo, useState } from "react";

interface UserSessionContextType {
   accessToken: string;
   isSignedIn: boolean;
   signIn: (accessToken: string) => void;
   signOut: () => void;
   getClaims: () => Record<string, string> | undefined;
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
      // api.signOut -=-=- here -=-=-
      deleteSecureCookie("access");
      deleteSecureCookie("refresh");
   };

   const getClaims = () => getUserClaims()

   const session = { accessToken, isSignedIn, signIn, signOut, getClaims }

   const value = useMemo(() => (session), [accessToken, isSignedIn]);

   return <UserSessionContext.Provider value={value}>{children}</UserSessionContext.Provider>;
};

export const useSession = () => {
   const context = useContext(UserSessionContext);
   if (!context) {
      throw new Error("useColorTheme must be used within a ColorThemeProvider");
   }
   return context;
};
