import Head from 'next/head'
import React from 'react'
import CrossBar from '../../components/CrossBar'

export default function index() {
    return (
        <>
            <Head>
                <title>All Courses</title>
                <meta name="All Courses" content="Generated by create next app" />
                <link rel="icon" href="/logo.ico" />
            </Head>

            <main className='mt-[80px] xl:px-[32px] lg:px-[26px] px-[10px] mb-8'>
                <header>
                    <h1 className='font-title md:text-[55px] text-[40px] font-[900] text-center'>
                        COURSES
                    </h1>
                    <p className='font-code md:text-[25px] text-[20px] text-[#b2becd] text-center mt-[-10px]'>challenging multi-step experiences with quizzes and progress-tracking</p>
                </header>
                <CrossBar />
            </main>
        </>
    )
}
