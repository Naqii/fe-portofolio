// app/layout.tsx
import { Montserrat, Roboto } from 'next/font/google'
import { Providers } from '@/libs/providers/Providers'
import './globals.css'
import { getServerSession } from 'next-auth'
import { authConfig } from '@/libs/auth/auth.config'

const montserrat = Montserrat({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-montserrat',
})

const roboto = Roboto({
  weight: ['400', '500'],
  subsets: ['latin'],
  variable: '--font-roboto',
})

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await getServerSession(authConfig)
  return (
    <html lang="en" className="bg-main">
      <body className={`${montserrat.variable} ${roboto.variable}`}>
        <Providers session={session}>{children}</Providers>
      </body>
    </html>
  )
}
