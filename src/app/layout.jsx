import './globals.css'
import Header from "@/components/Header";
import Providers from './Providers';
import Navbar from '@/components/HomeNav';


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          {/* Header*/}
          <Header/>

          {/* <Navbar /> */}
          {/*SearchBox*/}
          

          {/*SearchBox*/}


          {children}
        </Providers>
      </body>
    </html>
  )
}
