import NextAuth, { type DefaultSession } from "next-auth";

export type ExtendUser = DefaultSession["user"] & {
  id: string;
  role: string;
  isTwoFactorEnabled: boolean;
  isOAuth: boolean;
  image: string;
};

declare module "next-auth" {
  interface Session {
    user: ExtendUser;
  }
}

// ___________________________________________________________________________

// import NextAuth, { DefaultSession } from "next-auth";

// declare module "next-auth" {
//   /**
//    * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
//    */
//   interface Session {
//     user: {
//       id: string;
//       role: string;
//       isTwoFactorEnabled: boolean;
//       isOAuth: boolean;
//       image: string;
//     } & DefaultSession["user"];
//   }
// }

// import NextAuth from "next-auth";

// declare module "next-auth" {
//   interface Session {
//     user: {
//       id: string;
//       role: string;
//       isTwoFactorEnabled: boolean;
//       isOAuth: boolean;
//       image: string;
//     };
//   }
// }
