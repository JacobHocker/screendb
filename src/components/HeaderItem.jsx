import Link from 'next/link'
import React from 'react'

export default function HeaderItem({ title, address, Icon}) {
    return (
        <div>
            <Link href={address} className="mx-4 lg:mx-6 hover:text-amber-500">
                <Icon className="text-2xl  2xsm:text-3xl xsm:text-4xl sm:hidden mx-2" title={title}/>
                <p className="hidden sm:inline my-2 text-md md:text-lg">{title}</p>
            </Link>
        </div>
    )
}
