import React, { useRef, useEffect } from 'react';
import { AiOutlineArrowUp } from 'react-icons/ai';


export default function ScrollBtn() {
    const scrollBtn = useRef();

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                scrollBtn.current.classList.add('showScrollBtn');
                scrollBtn.current.classList.remove('hideScrollBtn');
            }
            else {
                if (scrollBtn.current.classList.contains('showScrollBtn')) {
                    scrollBtn.current.classList.remove('showScrollBtn');
                    scrollBtn.current.classList.add('hideScrollBtn');
                }
            }
        });
        return () => window.removeEventListener('scroll', () => {
            if (window.scrollY > 300) {
                scrollBtn.current.classList.add('showScrollBtn');
                scrollBtn.current.classList.remove('hideScrollBtn');
            }
            else {
                if (scrollBtn.current.classList.contains('showScrollBtn')) {
                    scrollBtn.current.classList.remove('showScrollBtn');
                    scrollBtn.current.classList.add('hideScrollBtn');
                }
            }
        });
    }, []);


    return (
        <div ref={scrollBtn} onClick={() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            scrollBtn.current.classList.remove('showScrollBtn');
            scrollBtn.current.classList.add('hideScrollBtn');
        }} className='hideScrollBtn cursor-pointer flex justify-center items-center fixed rounded-full w-[40px] h-[40px] ease-in duration-100 right-5 z-10 bg-[#0f121a]'><AiOutlineArrowUp color='#6c7983' fontSize={25} /></div>
    )
}
