import { BsFillFilePersonFill } from 'react-icons/bs';
import { AiFillGithub,  AiFillMediumCircle, AiFillLinkedin} from 'react-icons/ai'
import Link from 'next/link';
import Image from 'next/image';
import nextLogo from '../../assets/nextLogo.png';
import tailwindLogo from '../../assets/tailwindLogo.webp';
import tmdbLogo from '../../assets/tmdbLogo.png';


export default function About() {
    return (
        <div className="mt-16 pb-10 w-full flex flex-col items-center">
            <div>
                <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl">About</h1>
            </div>
            <div className="mt-8 p-4 pb-4 w-full xsm:w-11/12 flex flex-col items-center dark:bg-slate-600 bg-slate-400 xsm:rounded-md">
                <div>
                    <h1 className="font-semibold text-xl sm:text-2xl ">Created By: Jacob Hocker</h1>
                </div>
                <div className="mt-8  w-full gap-4 justify-items-center grid grid-cols-2 justify-evenly">
                    <Link href="https://jacobhocker.netlify.app/" target='_blank' title="Portfolio">
                        <BsFillFilePersonFill className='text-3xl sm:text-4xl md:text-5xl hover:text-amber-500 ' />
                    </Link>
                    <Link href="https://github.com/JacobHocker" target='_blank' title="GitHub">
                        <AiFillGithub className='text-3xl sm:text-4xl md:text-5xl hover:text-amber-500 ' />
                    </Link>
                    <Link href="https://medium.com/@jacobhocker" target='_blank' title="Medium">
                        <AiFillMediumCircle className='text-3xl sm:text-4xl md:text-5xl hover:text-amber-500 ' />
                    </Link>
                    <Link href="https://www.linkedin.com/in/jacobhocker/" target='_blank' title="Linked In">
                        <AiFillLinkedin className='text-3xl sm:text-4xl md:text-5xl hover:text-amber-500 ' />
                    </Link>
                </div>
            </div>
            <div className='mt-10 w-full p-4 xsm:w-11/12 xsm:rounded-md dark:bg-slate-600 bg-slate-400 flex flex-col items-center'>
                <div>
                    <h1 className="font-semibold text-xl sm:text-2xl ">Built With:</h1>
                </div>
                
                <Link href="https://beta.nextjs.org/docs" target='_blank'>
                    <div className='flex flex-col items-center mt-8'>
                        <Image
                            src={nextLogo} 
                            width={500}
                            height={300}
                            quality='100'
                            className="rounded-lg mt-8 hover:border-2 border-amber-600 dark:border-amber-500"
                            style={{
                                maxWidth: "100%",
                                height: "100%",
                            }}
                            placeholder="blur"
                            blurDataURL="/spinner.svg"
                            alt="Next Logo"
                        >
                        </Image>
                        <h1 className='font-semibold text-2xl'>NextJS 13.2</h1>
                    </div>
                </Link>
                <Link href="https://tailwindcss.com/docs/utility-first" target='_blank'>
                    <div className='flex flex-col items-center mt-8'>
                        <Image
                            src={tailwindLogo} 
                            width={500}
                            height={300}
                            quality='100'
                            className="rounded-lg mt-8 hover:border-2 border-amber-600 dark:border-amber-500"
                            style={{
                                maxWidth: "100%",
                                height: "100%",
                            }}
                            placeholder="blur"
                            blurDataURL="/spinner.svg"
                            alt="Tailwind Logo"
                        >
                        </Image>
                        <h1 className='font-semibold text-2xl'>Tailwind CSS</h1>
                    </div>
                </Link>
                <Link href="https://www.themoviedb.org/documentation/api?language=en-US" target='_blank'>
                    <div className='flex flex-col items-center mt-8'>
                        <Image
                            src={tmdbLogo} 
                            width={500}
                            height={300}
                            quality='100'
                            className="rounded-lg mt-8 hover:border-2 border-amber-600 dark:border-amber-500"
                            style={{
                                maxWidth: "100%",
                                height: "100%",
                            }}
                            placeholder="blur"
                            blurDataURL="/spinner.svg"
                            alt="TMDB Logo"
                        >
                        </Image>
                        <h1 className='font-semibold text-lg'>The Movie Database (TMDB) API</h1>
                    </div>
                </Link>
                
            </div>
        </div>
    )
}
