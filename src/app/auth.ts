import NextAuth from "next-auth";
import type { NextAuthConfig } from "next-auth";
import GitHub from "next-auth/providers/github";

export const config = {
  theme: {
    logo: "https://next-auth.js.org/img/logo-sm.png",
  },
  pages: {
    signIn: "/login",
  },
  providers: [GitHub],
} satisfies NextAuthConfig;

export const { handlers, auth, signIn, signOut } = NextAuth(config);
