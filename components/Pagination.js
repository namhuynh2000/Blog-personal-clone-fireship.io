import Link from 'next/link';
import { useEffect } from 'react';
import { ImPrevious2, ImNext2 } from 'react-icons/im'

export default function Pagination({ numPage, numActive }) {

    const li = [];
    const prevBtn = (<li className='mr-4 text-[#b2becd]'>
        <Link href={{ pathname: '/labs', query: { page: 1 } }}>
            <ImPrevious2 fontSize={25} />
        </Link>
    </li>);
    li.push(prevBtn)

    for (let i = 1; i <= numPage; i++) {
        if (i == numActive) {
            li.push(
                <Link className='text-[#b2becd] bg-[#0e1417] md:py-[16px] md:px-[32px] py-[13px] px-[26px]  text-[15px]' href={{ pathname: '/labs', query: { page: i } }}>
                    {i}
                </Link>
            )
            continue;
        }
        li.push(
            <Link className='text-[#b2becd] bg-[#0d1113] md:py-[16px] md:px-[32px] py-[13px] px-[26px]  text-[15px]' href={{ pathname: '/labs', query: { page: i } }}>
                {i}
            </Link>
        )
    }

    const nextBtn = (<li className='ml-4 text-[#b2becd]'>
        <Link href={{ pathname: '/labs', query: { page: numPage } }}>
            <ImNext2 fontSize={25} />
        </Link>
    </li>)
    li.push(nextBtn)

    return (
        <>
            <ul className='flex gap-1 justify-center items-center'>
                {li}
            </ul>
        </>
    )
}
