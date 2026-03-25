import { NextAuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import { JWTExtended, SessionExtended, UserExtended } from '@/types/Auth'
import authServices from '@/services/auth.services'
import environment from '@/config/env'

export const authConfig: NextAuthOptions = {
  session: {
    strategy: 'jwt',
    maxAge: 60 * 60 * 12,
  },
  secret: environment.AUTH_SECRET,
  providers: [
    CredentialsProvider({
      id: 'credentials',
      name: 'Credentials',
      credentials: {
        identifier: { label: 'identifier', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(
        credentials: Record<'identifier' | 'password', string> | undefined,
      ): Promise<UserExtended | null> {
        if (!credentials?.identifier || !credentials?.password) {
          return null
        }

        const { identifier, password } = credentials
        try {
          const resultToken = await authServices.login({ identifier, password })

          if (resultToken.status !== 200) return null

          const accessToken = resultToken?.data?.data
          if (!accessToken) return null
          const me = await authServices.getProfileWithToken(accessToken)

          if (me.status !== 200) return null

          const user = me.data.data
          user.accessToken = accessToken

          return user
        } catch (error) {
          return null
        }
      },
    }),
  ],

  callbacks: {
    async jwt({
      token,
      user,
    }: {
      token: JWTExtended
      user: UserExtended | null
    }) {
      if (user) {
        token.user = user
      }
      return token
    },
    async session({
      session,
      token,
    }: {
      session: SessionExtended
      token: JWTExtended
    }) {
      if (token.user) {
        session.user = token.user
        session.accessToken = token.user.accessToken
      }
      return session
    },
  },
}
