import{r as e,n as f}from"./components-ugrZxUQv.js";import{g as x,d as i}from"./sessions-6JERx8g_.js";const u=e.createContext(void 0),g=({children:s})=>{const[t,o]=e.useState(""),[c,r]=e.useState(!1);e.useEffect(()=>{const n=setTimeout(()=>{x("access")&&(r(!0),o(t))},0);return()=>clearTimeout(n)},[]);const a=n=>{o(n),r(!0)},m=()=>{o(""),r(!1),i("access"),i("refresh")},d=e.useMemo(()=>({accessToken:t,isSignedIn:c,signIn:a,signOut:m}),[t,c]);return f.jsx(u.Provider,{value:d,children:s})},k=()=>{const s=e.useContext(u);if(!s)throw new Error("useColorTheme must be used within a ColorThemeProvider");return s};export{g as U,k as u};
