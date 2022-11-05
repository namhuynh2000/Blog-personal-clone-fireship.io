import Link from 'next/link';
import React from 'react'

export default function Sidebar({ post }) {
    const { text } = post;
    const listTitle = text?.filter(item => {
        return (item.style == 'h2' || item.style == 'h3');
    })
    // console.log(listTitle)
    return (
        <div className='relative'>
            <div className='pl-8 sticky top-5'>
                {listTitle?.map(title => {
                    return title.style == 'h2' ?
                        (<h2 className='text-[#b2becd] lg:text-[16px] text-[13px]'>{title.children[0].text}</h2>) :
                        (<h3 className='text-[#6c7983] lg:text-[14px] text-[11px]'>{title.children[0].text}</h3>)
                })}
            </div>
        </div>
    )
}
