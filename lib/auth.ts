import { NextAuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import { executeQuery } from "@/lib/db"
import { JWT } from "next-auth/jwt"
import { Session } from "next-auth"

export const authOptions: NextAuthOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/admin/login",
    signOut: "/",
    error: "/admin/login",
  },
  providers: [
    CredentialsProvider({
      name: "Admin Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null // Return null explicitly instead of undefined
        }

        try {
          // Find user by email
          const users = await executeQuery(`SELECT * FROM "User" WHERE email = $1 LIMIT 1`, [credentials.email])

          if (!users || users.length === 0) {
            console.log("User not found:", credentials.email)
            return null // Explicitly return null
          }

          const user = users[0]

          // Only allow admin users to log in
          if (user.role !== "admin") {
            console.log("Non-admin login attempt:", credentials.email)
            return null // Explicitly return null
          }

          // Simple password verification (not secure for production)
          if (credentials.password !== user.hashedPassword) {
            console.log("Password mismatch for admin:", credentials.email)
            return null // Explicitly return null
          }

          console.log("Admin authenticated successfully:", user.email)

          return {
            id: user.id,
            email: user.email,
            name: user.name,
            role: user.role,
          } // Return user object if authentication is successful
        } catch (error) {
          console.error("Authentication error:", error)
          return null // Return null in case of an error
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }: { token: JWT; user?: any }) {
      if (user) {
        token.id = user.id
        token.role = user.role
      }
      return token
    },
    async session({ session, token }: { session: Session; token: JWT }) {
      if (token) {
        session.user.id = token.id as string
        session.user.role = token.role as string
      }
      return session
    },
  },
}
