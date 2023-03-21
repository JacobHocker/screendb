"use client"
import Link from "next/link";

import { useSearchParams } from "next/navigation";

export default function NavbarItem({ title, param, variable, setter}) {
    
    const searchParams = useSearchParams();
    const genre = searchParams.get("genre");

    return (
        <div >
            <Link className={`m-4 hover:text-rose-600 font-semibold p-2 ${variable && variable === title.toLowerCase() && "underline underline-offset-8 decoration-4 decoration-rose-500 rounded-lg"}`} 
                href={`/?genre=${param}`}
                onClick={setter}>
                {title}
            </Link>
        </div>
    )
}
