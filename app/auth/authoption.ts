import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import { prisma } from "../../prisma/client";
import { NextAuthOptions } from "next-auth";
const authoption: NextAuthOptions = {
    adapter: PrismaAdapter(prisma),
  providers:[
    GoogleProvider({
    clientId: process.env.GOOGLE_CLIENT_ID!,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET!
  })
  ],
  session:{
    strategy:"jwt"
  },
   
  callbacks: {
   jwt: async ({ token, user }) => {
  // When user logs in for the first time
  if (user) {
    token.id = user.id;
  }

  // Always get fresh data from DB
  const dbUser = await prisma.user.findUnique({
    where: { id: token.id as string },
  });

  token.isAdmin = dbUser?.isAdmin ?? false;

  return token;},

    session: async ({ session, token }) => {
      session.user.id = token.id;
      session.user.isAdmin = token.isAdmin;
      return session;
    },
  },
}
export default authoption