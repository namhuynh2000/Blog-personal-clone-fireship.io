import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import SearchBar from './SearchBar';

export default function Navbar() {
    return (
        <nav className='lg:p-[32px] md:p-[26px] px-[10px] py-[20px] flex justify-between'>
            <Link className='relative group' href="/">
                <Image alt='logo' priority className='lg:w-[50px]' src="/logo.svg" width={40} height={40}></Image>
                <Image alt='fire' className="group-hover:opacity-100 opacity-0 absolute bottom-0 left-0 lg:w-[60px]" src="/fire.gif" width={50} height={50}></Image>
            </Link>
            <ul className='text-[#dbe1e8] nav flex gap-3 md:gap-7 font-[700] md:text-[18px] text-[14px] justify-center items-center'>
                <li className='hover:scale-110 hover:drop-shadow-[0_0_9px_rgba(34,197,94,0.9)] hover:translate-y-0.5 ease-in duration-200'>
                    <Link className='font-title text-green-500 md:px-2 px-1 py-0.5 border-green-400 sm:border rounded-md' href="/">PRO</Link>
                </li>
                <li className='hover:text-[#fff] hover:scale-105 ease-in duration-100'>
                    <Link href='/labs'>
                        labs
                    </Link>
                </li>
                <li className='hover:scale-105 hover:text-transparent bg-clip-text bg-gradient-to-b from-[#f97316] to-[#c35000] ease-in duration-100'>
                    <Link href='/courses'>
                        courses
                    </Link>
                </li>
                <li>
                    <SearchBar />
                </li>
            </ul>
        </nav>
    )
}
