"use client"
import { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import { Inter } from 'next/font/google'




const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [trendingTime, setTrendingTime] = useState("day")

  // Setting Home Page Trending Times
  const setTrendingDay = () => {
    setTrendingTime("day");
  };
  const setTrendingWeek = () => {
    setTrendingTime("week");
  };

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}trending/movie/${trendingTime}?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US`, { next: { revalidate: 10000 } })
    .then((r) => r.json())
    .then((data) => {setTrendingMovies(data)})
    
    console.log(trendingMovies)
  }, [trendingTime])
  
  
  return (
    <div className=''>
      <Navbar titleOne={"DAY"} variable={trendingTime} paramOne={"trendingDay"} setterOne={setTrendingDay} titleTwo={"WEEK"} paramTwo={"trendingWeek"} setterTwo={setTrendingWeek} />
      <div className='flex justify-center mt-6'>
        <h1 className='sm:text-3xl text-2xl'>Top 5 Trending All Categories</h1>
      </div>
      <div className=''>

      </div>
    </div>
    
  )
}
