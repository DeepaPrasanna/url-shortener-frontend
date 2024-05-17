// import NextAuth from "next-auth";
// import { authConfig } from "./auth.config";

// export const { auth, signIn, signOut } = NextAuth({
//   ...authConfig,
//   providers: [],

// });

import NextAuth from "next-auth";
import type { NextAuthConfig } from "next-auth";
import GitHub from "next-auth/providers/github";

// export const { signIn, signOut, auth, handlers } = NextAuth({
//   providers: [GitHub],
//   pages: {
//     signIn: "/login",
//   },
// });

export const config = {
  theme: {
    logo: "https://next-auth.js.org/img/logo-sm.png",
  },
  pages: {
    signIn: "/login",
  },
  providers: [GitHub],
  // callbacks: {
  //   authorized({ request, auth }) {
  //     const { pathname } = request.nextUrl;
  //     if (pathname === "/middleware-example") return !!auth;
  //     return true;
  //   },
  //   // jwt({ token, trigger, session }) {
  //   //   if (trigger === "update") token.name = session.user.name;
  //   //   return token;
  //   // },
  // },
  
} satisfies NextAuthConfig;

export const { handlers, auth, signIn, signOut } = NextAuth(config);
