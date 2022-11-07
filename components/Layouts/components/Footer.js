import Link from 'next/link';
import React from 'react';
import CrossBar from '../../CrossBar'

export default function Footer() {
    return (
        <>
            <CrossBar />
            <div className="inner text-[#b2becd] flex flex-col items-center gap-3 p-[32px] mb-[24px]">
                <p>Find an issue with this page? <Link className='text-[#3b82f6]' href="https://github.com/namhuynh2000/Blog-personal-clone-fireship.io.git">Fix it on GitHub</Link></p>
                <p>Need help? Email <a href="mailto:mooncomvn130@gmail.com"><strong>mooncomvn130@gmail</strong></a></p>
                <small>Copyright © 2022 Fireship LLC</small>
            </div>

        </>
    )
}
