"use client"
import { useEffect, useState } from 'react';
import { Inter } from 'next/font/google'
import HomeCarousel from '@/components/HomeCarousel';
import SearchAllBox from '@/components/SearchAllBox';

export const dynamic = "force-dynamic";


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [trendingTime, setTrendingTime] = useState("day")
  const [homePeople, setHomePeople] = useState({});
  const [homeMovies, setHomeMovies] = useState({});
  const [homeTv, setHomeTv] = useState({});


  // Setting Home Page Trending Times
  const setTrendingDay = () => {
    setTrendingTime("day");
  };
  const setTrendingWeek = () => {
    setTrendingTime("week");
  };

  // TRENDING HOME PAGE MOVIES
  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}trending/movie/${trendingTime}?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US`, { next: { revalidate: 10000 } })
    .then((r) => r.json())
    .then((data) => {setHomeMovies(data)})
  }, [trendingTime]);

  // TRENDING HOME PAGE PEOPLE
  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}trending/person/${trendingTime}?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US`, { next: { revalidate: 10000 } })
    .then((r) => r.json())
    .then((data) => {setHomePeople(data)})
  }, [trendingTime]);

  // TRENDING HOME PAGE PEOPLE
  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}trending/tv/${trendingTime}?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US`, { next: { revalidate: 10000 } })
    .then((r) => r.json())
    .then((data) => {setHomeTv(data)})
  }, [trendingTime]);
  
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
    <div className='pb-16'>
      <SearchAllBox />

      {/*  SELECT FOR THE HOME PAGE */}
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

      {/* TRENDING MOVIE AREA */}
      <div className=' mt-8 pt-4 pb-10 px-4 md:w-11/12 bg-slate-400 dark:bg-gray-800 justify-items-center md:mx-auto md:rounded-lg'>
          <div className='flex items-center justify-center my-4'>
                  <h1 className='font-bold text-xl sm:text-2xl lg:text-3xl items-center'>Movies</h1>
          </div>
          {homeMovies.results && <HomeCarousel props={homeMovies.results} />}
      </div>

      {/* TRENDING PEOPLE AREA */}
      <div className=' mt-8 pt-4 pb-10 px-4 md:w-11/12 bg-slate-400 dark:bg-gray-800 justify-items-center md:mx-auto md:rounded-lg'>
          <div className='flex items-center justify-center my-4'>
                  <h1 className='font-bold text-xl sm:text-2xl lg:text-3xl items-center'>People</h1>
          </div>
          {homePeople.results && <HomeCarousel props={homePeople.results} />}
      </div>

      {/* TRENDING PEOPLE AREA */}
      <div className=' mt-8 pt-4 pb-10 px-4 md:w-11/12 bg-slate-400 dark:bg-gray-800 justify-items-center md:mx-auto md:rounded-lg'>
          <div className='flex items-center justify-center my-4'>
                  <h1 className='font-bold text-xl sm:text-2xl lg:text-3xl items-center'>Television</h1>
          </div>
          {homeTv.results && <HomeCarousel props={homeTv.results} />}
      </div>
    </div>
    
  )
}
