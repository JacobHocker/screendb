import './globals.css'
import Header from "@/components/Header";
import Providers from './Providers';
import Navbar from '@/components/Navbar';


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          {/* Header*/}
          <Header/>

          {/*NavBar */}
          <Navbar />
          {/*SearchBox*/}


          {children}
        </Providers>
      </body>
    </html>
  )
}
