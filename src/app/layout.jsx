import './globals.css'
import Header from "@/components/Header";
import Providers from './Providers';
import Head from 'next/head';

export const metadata = {
  title: "EntSpot",
  icons: {
    icon: { url: "/images/favicon-32x32.png", type:"image/png"},
    icon: { url: "/images/favicon-16x16.png", type:"image/png"},
    shortcut: {url: "/images/favicon.ico",type:"image/png"}
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          {/* Header*/}
          <Header/>

          


          {children}
        </Providers>
      </body>
    </html>
  )
}
