import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import { urlFor } from '../utils/Sanity';


export default function BlogCard({ post }) {
    const { poster } = post;

    return (
        <>
            <Link href={`/labs/${post.slug.current}`}>
                <article className='rounded-[0.75rem] w-[312px] xl:w-full overflow-hidden inline-block bg-[#2a2e35]'>
                    {/* <img className='w-full h-[175px] object-cover' src={poster ? urlFor(poster)?.url() : '/noimage.png'} alt={poster?.caption} /> */}
                    <Image
                        className='w-full h-[175px] object-cover'
                        src={poster ? urlFor(poster)?.url() : '/noimage.png'}
                        alt={poster?.caption ? poster.caption : 'noAlt'}
                        width={500}
                        height={500}
                    />
                    <section className='p-[1rem] flex flex-col h-[233px]'>
                        <h5 className='font-[700]'>{post.title}</h5>
                        <p className='text-[13px] grow mt-3 overflow-hidden'>{post.description ? post.description : null}</p>
                        <div className='mt-2'>
                            {
                                post.tag?.map(item => {
                                    return (<span key={item._key} style={{ background: item.favoriteColor ? item.favoriteColor.hex : '#000' }} className={`font-code text-[13px] px-[7px] py-[5px] rounded-[0.375rem] mr-2 text-center leading-[21px]`}>#{item.title}</span>)
                                })
                            }
                        </div>
                    </section>
                </article>
            </Link>
        </>
    )
}
