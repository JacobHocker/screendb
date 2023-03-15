

import { Inter } from 'next/font/google'


const inter = Inter({ subsets: ['latin'] })

export default async function Home() {

  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}movie/top_rated?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US&page=1`, { next: { revalidate: 10000 } });

  const data = await res.json();

  const results = data.results;

  console.log(results)
  return (
    <div className='flex justify-center'>
      
      <h1>Home</h1>
    </div>
    
  )
}
