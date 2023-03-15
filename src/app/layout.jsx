import './globals.css'
import Header from "@/components/Header";
import Providers from './Providers';


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          {/* Header*/}
          <Header/>

          {/*NavBar */}
          
          {/*SearchBox*/}


          {children}
        </Providers>
      </body>
    </html>
  )
}
