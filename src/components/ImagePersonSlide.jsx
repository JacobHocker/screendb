
import Image from 'next/image';

import EmptyPerson from '../assets/emptyPersonTwo.jpeg';




export default function ImagePersonSlide({ props }) {
    return (
        
        <div className='px-2 h-full'>
            
            <div className="flex flex-shrink-0 relative w-full h-full ">
                {
                    props.file_path === null ?
                    <Image src={EmptyPerson}
                            alt="Empty.." className="w-full h-full object-cover" />
                    :
                    <img src={`${process.env.NEXT_PUBLIC_POSTER_PATH}${props.file_path}`}
                        alt='External Image' className="object-cover object-center w-full" />
                }
                
            </div>
            
            
        </div>
    )
}