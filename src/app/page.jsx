"use client"
import { useEffect, useState } from 'react';
import { Inter } from 'next/font/google'
import HomeCard from '@/components/HomeCard';

export const dynamic = "force-dynamic";


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [trendingHome, setTrendingHome] = useState([]);
  const [trendingTime, setTrendingTime] = useState("day")

  // Setting Home Page Trending Times
  const setTrendingDay = () => {
    setTrendingTime("day");
  };
  const setTrendingWeek = () => {
    setTrendingTime("week");
  };

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}trending/all/${trendingTime}?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US`, { next: { revalidate: 10000 } })
    .then((r) => r.json())
    .then((data) => {setTrendingHome(data)})
    
    
  }, [trendingTime])
  
   // SELECT DROPDOWN OPTIONS
    const trendingTimeList = [
        {
            id: 0,
            title: "Day",
            value: "day",
        },
        {
            id: 1,
            title: "Week",
            value: "week",
        },
    ];
  
  return (
    <div className=''>
      <div className="mt-16 p-2 flex w-full justify-start ">
          <select 
          className='font-bold bg-transparent text-md md:text-xl lg:text-2xl border-2 rounded-sm hover:border-amber-400 hover:cursor-pointer border-slate-600'
          value={trendingTime}
          onChange={(e) => setTrendingTime(e.target.value)}>
              {trendingTimeList.map((time) => (
                  <option 
                      className=''
                      key={time.id}
                      value={time.value}
                  >
                      {time.title}
                  </option>
              ))}
          </select> 
      </div>
      
      <div className='flex justify-center mt-6'>
        <h1 className='sm:text-3xl text-2xl'>Top Trending All Categories</h1>
      </div>
      <div className='mt-8 grid grid-cols-1 2xsm:grid-cols-2 xsm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4'>
        {trendingHome.results && trendingHome.results.map((all) => (
          <HomeCard
            key={all.id}
            props={all}
            />
        ))}
      </div>
    </div>
    
  )
}
