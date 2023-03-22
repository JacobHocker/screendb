"use client";
import { MdLightMode } from 'react-icons/md';
import { BsFillMoonFill } from 'react-icons/bs';
import { useTheme } from 'next-themes';
import { useState, useEffect } from 'react';

export default function DarkModeSwitch() {
    const [mounted, setMounted] = useState(false);
    
    const { systemTheme, theme, setTheme} = useTheme();
    
    //SETTING DARK MODE SWITCH HANDLING
    useEffect(() => {
        setMounted(true);
    }, [])
    const currentTheme = theme === "system" ? systemTheme : theme;

    
    return (
        <>  
            {
                mounted && currentTheme === "dark" ? 
                (
                    <MdLightMode className="text-xl md:text-2xl cursor-pointer hover:text-rose-500"onClick={() => setTheme("light")}/>
                ) 
                :
                (
                    <BsFillMoonFill className="text-xl md:text-2xl cursor-pointer hover:text-rose-500"onClick={() => setTheme("dark")}/>
                )
            }
            
            
        </>
    )
}
