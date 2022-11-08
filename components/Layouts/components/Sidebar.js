import React from 'react'

export default function Sidebar({ post }) {
    const { text } = post;
    const listTitle = text?.filter(item => {
        return (item.style == 'h1' || item.style == 'h2');
    })
    return (
        <div className='relative'>
            <div className='pl-8 sticky top-5'>
                {listTitle?.map(title => {
                    return title.style == 'h1' ?
                        (<a href={`#${title.children[0].text}`} key={title} className='text-[#b2becd] lg:text-[16px] text-[13px] block hover:text-[#fff]'>{title.children[0].text}</a>) :
                        (<a href={`#${title.children[0].text}`} key={title} className='text-[#6c7983] lg:text-[14px] text-[11px] block hover:text-[#FB923C]'>{title.children[0].text}</a>)
                })}
            </div>
        </div>
    )
}
