import React from 'react';
import Sidebar from './components/Sidebar';

export default function LayoutContent({ post, children }) {
    return (
        <>
            <main className='grid grid-cols-4 xl:px-[32px] md:px-[26px] px-[10px]'>
                <div className="wrapperChild md:col-span-3 col-span-4">
                    {children}
                </div>
                <Sidebar post={post} className='relative md:col-span-1 md:block hidden' />
            </main>
        </>
    )
}
