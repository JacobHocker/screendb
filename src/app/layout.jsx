import './globals.css'
import Header from "@/components/Header";
import Providers from './Providers';


export async function generateMetadata({ params }){
  return {
    title: "EntSpot",
    description: "One stop shop for all you entertainment knowledge!",
    icons: {
      icon: { url: "/favicon-32x32.png", type:"image/png"},
      icon: { url: "/favicon-16x16.png", type:"image/png"},
      shortcut: {url: "/favicon.ico",type:"image/png"}
    }
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
