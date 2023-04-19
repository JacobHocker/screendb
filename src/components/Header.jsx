"use client";
import { useTheme } from 'next-themes';
import HeaderItem from './HeaderItem';
import { AiFillInfoCircle } from 'react-icons/ai';
import { MdLocalMovies } from 'react-icons/md';
import { BsFillFilePersonFill } from 'react-icons/bs'
import { CgScreen } from 'react-icons/cg';

import Link from 'next/link';
import Image from 'next/image';
import LogoLt from '../assets/EntSpotLT.png';
import LogoDk from '../assets/EntSpotDK.png';
import DarkModeSwitch from './DarkModeSwitch';
import { useState, useEffect } from 'react';

export default function Header() {
    const [mounted, setMounted ] = useState(false);

    const { systemTheme, theme} = useTheme();

    // SETTING DARK MODE SWITCH FOR APP LOGO
    useEffect(() => {
        setMounted(true);
    }, [])
    const currentTheme = theme === "system" ? systemTheme : theme;

    return (
        <div className='flex justify-between bg-amber-200 dark:bg-gray-600  max-w-6x1 sm:mx-auto items-center py-6'>

                <div className='flex '>
                    <HeaderItem title="MOVIES" address="/movies" Icon={MdLocalMovies} />
                    <HeaderItem title="TV" address="/tvShows" Icon={CgScreen} />
                    <HeaderItem title="PEOPLE" address="/people" Icon={BsFillFilePersonFill} />
                    
                    <HeaderItem title="ABOUT" address="/about" Icon={AiFillInfoCircle} />
                </div>

                <div className="flex items-center space-x-5">
                    <DarkModeSwitch />
                    <Link href="/">
                        {
                            mounted && currentTheme === "dark" ? 
                            (<Image src={LogoLt} priority='true' alt='EntSpotLt' className='w-14 sm:w-16 md:w-20 mr-3'/>)
                            :
                            (<Image src={LogoDk} priority='true' alt='EntSpotDk' className='w-14 sm:w-16 md:w-20 mr-3'/>)
                        }
                    </Link>
                </div>
        </div>
    )
}
