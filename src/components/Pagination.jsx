"use client"
import { useState } from 'react';
import { TbPlayerTrackNext, TbPlayerTrackPrev } from 'react-icons/tb';

export default function Pagination({ pageNumber, setPageNumber, }) {
    const [paginateRange, setPaginateRange] = useState(1);

    // PAGINATE OBJECTS FOR MAPPING
    const paginateOne = [
        {
            id: 0,
            title: 1,
            value: 1,
        },
        {
            id: 1,
            title: 2,
            value: 2,
        },
        {
            id: 2,
            title: 3,
            value: 3,
        },
        {
            id: 3,
            title: 4,
            value: 4,
        },
        {
            id: 4,
            title: 5,
            value: 5,
        },
    ];
    const paginateTwo = [
        {
            id: 0,
            title: 6,
            value: 6,
        },
        {
            id: 1,
            title: 7,
            value: 7,
        },
        {
            id: 2,
            title: 8,
            value: 8,
        },
        {
            id: 3,
            title: 9,
            value: 9,
        },
        {
            id: 4,
            title: 10,
            value: 10,
        },
    ];

    return (
        <div className='flex w-full mt-8 justify-center'>
            <ul className=' flex list-none'>
            {
                paginateRange === 2 ? 
                <li onClick={() => { setPaginateRange(1)}} className={` flex items-center font-semibold hover:bg-amber-300 dark:hover:bg-amber-500 p-1 border border-slate-900 dark:border-slate-300`}>
                    <TbPlayerTrackPrev className=' text-lg' />
                </li>
                :
                <li>{" "}</li>
            }
            {
                paginateRange === 1 ?
                paginateOne.map((p) => (
                    
                    <li key={p.id} className={`font-semibold p-2 border cursor-pointer hover:bg-amber-300 dark:hover:bg-amber-500 border-slate-900 dark:border-slate-300 md:text-lg lg:text-xl ${pageNumber === p.title ? 'bg-slate-400 dark:bg-slate-500' : 'bg-transparent'}`} onClick={() => { setPageNumber(p.title)}}>
                        {p.title}
                    </li>
                    
                ))
                :
                paginateTwo.map((p) => (
                    
                    <li key={p.id} onClick={() => { setPageNumber(p.value)}} className={`font-semibold p-2 border cursor-pointer hover:bg-amber-300 dark:hover:bg-amber-500 border-slate-900 dark:border-slate-300 md:text-lg lg:text-xl ${pageNumber === p.title ? 'bg-slate-400 dark:bg-slate-500' : 'bg-transparent'}`}>
                        {p.title}
                    </li>
                    
                ))
            }
            {
                paginateRange === 1 ? 
                <li onClick={() => {setPaginateRange(2)}} className={` flex items-center font-semibold hover:bg-amber-300 dark:hover:bg-amber-500 p-1 border border-slate-900 dark:border-slate-300`}>
                    <TbPlayerTrackNext className=' text-lg'/>
                </li>
                :
                <li>{" "}</li>
            }
            </ul>
        </div>
    )
}
