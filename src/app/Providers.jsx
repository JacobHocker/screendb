"use client";

import { ThemeProvider } from "next-themes";

export default function Providers({children}) {
    return (
        <ThemeProvider enableSystem={true} attribute="class">
            <div className="dark:bg-black dark:text-gray-200 text-gray-800 transition-colors duration-300 min-h-screen select-none">
                {children}
            </div>
            
        </ThemeProvider>
    )
}
