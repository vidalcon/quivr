import { Analytics } from "@vercel/analytics/react";
import NavBar from "./components/NavBar";
import "./globals.css";
import { Inter } from "next/font/google";
import SupabaseProvider from './supabase-provider'
import { createServerComponentSupabaseClient } from '@supabase/auth-helpers-nextjs'
import { headers, cookies } from 'next/headers'

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "XgenDoc - AI for your Documents",
  description:
    "XgenDoc is designed to easily store and retrieve unstructured information.",
};


export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const supabase = createServerComponentSupabaseClient({
    headers,
    cookies,
  })

  const {
    data: { session },
  } = await supabase.auth.getSession()

  return (
    <html lang="en">
      <body
        className={`bg-white text-black dark:bg-black dark:text-white min-h-screen w-full ${inter.className}`}
      >
        <NavBar />
        <SupabaseProvider session={session}>{children}</SupabaseProvider>
        <Analytics />
      </body>
      
    </html>
  )
}
