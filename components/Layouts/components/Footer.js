import React from 'react';
import CrossBar from '../../CrossBar'

export default function Footer() {
    return (
        <>
            <CrossBar />
            <div className="inner text-[#b2becd] flex flex-col items-center gap-3 p-[32px] mb-[24px]">
                <p>Find an issue with this page? <a target='_blank' className='text-[#3b82f6]' href="https://github.com/namhuynh2000/Blog-personal-clone-fireship.io.git">Fix it on GitHub</a></p>
                <p>Need help? Email <a href="mailto:mooncomvn130@gmail.com"><strong>mooncomvn130@gmail</strong></a></p>
                <small>Copyright © 2022 Fireship LLC</small>
            </div>

        </>
    )
}
