import NextAuth, { NextAuthOptions } from "next-auth"
import { authOptions } from "../utils/authOptions"

const handler = NextAuth(authOptions)


export { handler as GET, handler as POST }

