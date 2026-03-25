'use client'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { HeroUIProvider } from '@heroui/react'
import { ToasterProvider } from '@/components/ui/Toaster/ToasterContext'
import { ReactNode } from 'react'
import ToastContainer from '@/components/ui/Toaster/ToasterContainer'
import { SessionProvider } from 'next-auth/react'
import { Session } from 'next-auth'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
    },
  },
})

export function Providers({
  children,
  session,
}: {
  children: ReactNode
  session: Session | null
}) {
  return (
    <SessionProvider session={session}>
      <QueryClientProvider client={queryClient}>
        <HeroUIProvider>
          <ToasterProvider>
            {children}
            <ToastContainer />
          </ToasterProvider>
        </HeroUIProvider>
      </QueryClientProvider>
    </SessionProvider>
  )
}
