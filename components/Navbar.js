import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { IoMdSearch } from 'react-icons/io'

export default function Navbar() {
    return (
        <nav className='lg:p-[32px] md:p-[26px] px-[10px] py-[20px] flex justify-between'>
            <Link className='relative group' href="/">
                <Image alt='logo' priority className='lg:w-[50px]' src="/logo.svg" width={40} height={40}></Image>
                <Image alt='fire' className="group-hover:opacity-100 opacity-0 absolute bottom-0 left-0 lg:w-[60px]" src="/fire.gif" width={50} height={50}></Image>
            </Link>
            <ul className='text-[#dbe1e8] nav flex gap-3 md:gap-7 font-[700] md:text-[18px] text-[14px] justify-center items-center'>
                <li className='hover:scale-110 hover:drop-shadow-[0_0_9px_rgba(34,197,94,0.9)] hover:translate-y-0.5 ease-in duration-200'>
                    <Link className=' text-green-500 md:px-2 md:py-1 px-1 py-1  border-green-400 sm:border rounded-md' href="/pro">PRO</Link>
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
                <li className='md:hover:border-[#A855F7] hover:bg-opacity-20 md:bg-white md:bg-opacity-10 md:hover:border hover:drop-shadow-[0_0_7px_rgba(168,85,247,0.5)] border border-[#929292] transition-all'>
                    <div className="cursor-pointer relative boxSearch lg:w-[190px] lg:p-[8px] md:w-[150px]
                    md:p-[6px] flex items-center ">
                        <IoMdSearch className='mx-[5px] md:text-[25px]' fontSize={20} />
                        <span className='text-[14px] font-[600] hidden md:inline-block'>Search</span>
                        <span className='absolute hidden md:inline text-[10px] border-[#CED4D9] right-4 border py-[2px] px-2 rounded-[5px]'>/</span>
                    </div>

                </li>
                <li></li>
            </ul>
        </nav>
    )
}
