import Link from 'next/link'
import React from 'react'

export default function MenuItem({ title, address, Icon}) {
    return (
        <div>
            <Link href={address} className="mx-4 lg:mx-6 hover:text-amber-500">
                <Icon className="text-lg xsm:text-xl sm:hidden mx-2" />
                <p className="hidden sm:inline my-2 text-md md:text-lg">{title}</p>
            </Link>
        </div>
    )
}
