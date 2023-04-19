"use client"
import Image from 'next/image';
import { useState, useEffect } from 'react';
import emptyComp from '../../../assets/emptyCompany.png';


export default function CompanyPage({ params }) {
    const [company, setCompany] = useState({});

    const compId = params.id;


    // Fetching the company information from the database
    useEffect(() => {
        fetch(`${process.env.NEXT_PUBLIC_API_URL}company/${compId}?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US`, { next: { revalidate: 10000 } })
        .then((r) => r.json())
        .then((data) => { setCompany(data)})
    }, [compId]);

    return (
        <div className='mt-16'>
            {
                company.id && 
                <div className='p-4 md:pt-8 flex flex-col md:grid grid-cols-2 items-center content-center max-w-6xl mx-auto md:space-x-6'>
                    {
                        company.logo_path === null ?
                        <Image src={emptyComp}
                            alt="empty" className="w-full h-full object-cover" />
                        :
                        <Image src={`${process.env.NEXT_PUBLIC_POSTER_PATH}${company.logo_path}`} 
                        width={500}
                        height={300}
                        quality='100'
                        className="rounded-lg "
                        style={{
                            objectFit: "cover",
                            maxWidth: "100%",
                            height: "100%",
                        }}
                        placeholder="blur"
                        blurDataURL="/spinner.svg"
                        alt="company logo"></Image>
                        
                    }
                    
                    
                    <div className="p-2 mt-8 md:mt-0">
                        <h2 className="text-lg  md:text-xl mb-3 font-bold">
                            {company.name}
                        </h2>
                        <p className="text-lg mb-3">
                            <span className="font-semibold mr-1">Description:</span>
                            {company.description === null || company.description === "" ?
                            `No description available for ${company.name}`
                            :
                            company.description
                            }
                        </p>
                        <p className="mb-3 md:text-lg">
                            <span className="font-semibold mr-1">Headquarters:</span>
                            {company.headquarters}
                        </p>
                        <p className="mb-3 md:text-lg">
                            <span className="font-semibold mr-1">Origin Country:</span>
                            {company.origin_country}
                        </p>
                        
                    </div>
                </div>
            }
            
        </div>
    )
}
