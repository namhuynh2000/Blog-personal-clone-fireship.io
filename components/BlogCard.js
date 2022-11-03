import Link from 'next/link';
import React from 'react';
import myConfiguredSanityClient from '../sanityClient';
import imageUrlBuilder from '@sanity/image-url';

const builder = imageUrlBuilder(myConfiguredSanityClient)

function urlFor(source) {
    return builder.image(source)
}

export default function BlogCard({ post, tags }) {
    const { poster } = post;
    return (
        <>

            <Link href='/labs/id'>
                <article className='rounded-[0.75rem] w-[312px] xl:w-full overflow-hidden inline-block bg-[#2a2e35]'>
                    <img className='w-full h-[175px] object-cover' src={poster ? urlFor(poster)?.url() : '/noimage.png'} alt={poster?.caption} />
                    <section className='p-[1rem] flex flex-col h-[233px]'>
                        <h5 className='font-[800]'>{post.title}</h5>
                        <p className='text-[13px] grow mt-3 overflow-hidden'>{post.description ? post.description : null}</p>
                        <div className='mt-2'>
                            {
                                post.tag?.map(item => {
                                    const tagRef = tags.find((tag) => {
                                        return tag._id === item._ref;
                                    })
                                    return (<span key={item._key} style={{ background: tagRef.color ? tagRef.color : '#000' }} className={`text-[10px] px-[7px] py-[5px] rounded-[0.375rem] text-center leading-[21px]`}>#{tagRef.title}</span>)
                                })
                            }
                        </div>
                    </section>
                </article>
            </Link>
        </>
    )
}
