import Head from 'next/head';
import React from 'react';
import BlogCard from '../../components/BlogCard';
import { queryData } from '../../libs/library';
import { useRouter } from 'next/router';
import Pagination from '../../components/Pagination';
import CrossBar from '../../components/CrossBar';
import { postPerPage } from '../../libs/library'

export default function Labs({ posts }) {
    const router = useRouter();
    const page = router.query.page || 1;

    const postsSlice = posts.slice(((page - 1) * postPerPage), page * postPerPage);

    return (
        <>
            <Head>
                <title>All Labs</title>
                <meta name="All blog" content="Generated by create next app" />
                <link rel="icon" href="/logo.ico" />
            </Head>

            <main className='mt-[80px] xl:px-[32px] lg:px-[26px] px-[10px] mb-8'>
                <header>
                    <h1 className='font-title md:text-[55px] text-[40px] font-[900] text-center'>
                        LABS
                    </h1>
                    <p className='font-code md:text-[25px] text-[20px] text-[#b2becd] text-center mt-[-10px]'>single dose video lessons and tutorials</p>
                </header>
                <CrossBar />

                <div>
                    <ul className='grid grid-cols-1 sm:grid-cols-1 justify-items-center md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 gap-y-[55px]'>
                        {postsSlice.map(post =>
                            <li className="blogCard rounded hover:scale-105 ease-in duration-300 xl:w-full max-w-[400px]" key={post._id}>
                                <BlogCard post={post} />
                            </li>
                        )}
                    </ul>

                </div>
            </main>

            <Pagination path={'/labs'} numPage={Math.ceil(posts.length / postPerPage)} numActive={page} />
        </>
    )
}

export async function getStaticProps() {
    const query = `*[_type == "post"]{
        ...,
        tag[]->} | order(_createdAt desc)`

    const posts = await queryData(query);

    return {
        props: {
            posts
        },
    }
}

