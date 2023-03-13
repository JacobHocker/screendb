import MenuItem from './MenuItem';
import { AiFillHome, AiFillInfoCircle } from 'react-icons/ai';
import Link from 'next/link';
import Image from 'next/image';
import LogoLt from '../assets/EntSpotLT.png';
import LogoDk from '../assets/EntSpotDK.png';

export default function Header() {
    return (
        <div className='flex justify-between mx-2 max-w-6x1 sm:mx-auto items-center py-6'>

                <div className='flex '>
                    <MenuItem title="HOME" address="/" Icon={AiFillHome} />
                    <MenuItem title="ABOUT" address="/about" Icon={AiFillInfoCircle} />
                </div>

                <div className=''>
                    <Link href="/">
                        <Image src={LogoDk} alt='EntSpot' className='w-20 mr-3'/>
                    </Link>
                </div>
        </div>
    )
}
