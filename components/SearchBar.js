import React, { useRef, useEffect } from 'react';
import { IoMdSearch } from 'react-icons/io';
import { InstantSearch, Hits, Highlight, Configure, connectSearchBox, connectStateResults } from 'react-instantsearch-dom';
import { clientAlgolia } from '../utils/Algolia';
import Link from 'next/link'

export default function SearchBar() {
    const searchFull = useRef();

    useEffect(() => {
        const main = document.querySelector('#__next');
        main.appendChild(searchFull.current);
        return () => {
            main.removeChild(searchFull.current)
        }
    }, [])

    useEffect(() => {
        document.addEventListener('keydown', (e) => {
            if (e.key == '/') {
                searchFull.current.classList.remove('hidden')
            }
        })
    }, [])


    function removeSearchFull(e) {
        if (e.target === e.currentTarget) {
            e.target.classList.add('hidden')
        }
    }
    function addSearchFull() {
        searchFull.current.classList.remove('hidden')
    }

    function Hit({ hit }) {
        return (
            <Link href={`/labs/${hit.slug.current}`} className='hover:bg-[#f97316] p-[16px] mt-2 bg-[#12181b80] block' onClick={() => {
                searchFull.current.classList.add('hidden')
            }}>
                <h1 className='md:text-[18px] text-[14px] font-[700]'>
                    <Highlight attribute="title" hit={hit} tagName="mark" />
                </h1>
                <p className='font-code md:text-[14px] text-[11px]'>
                    <Highlight attribute="description" hit={hit} tagName="mark" />
                </p>
            </Link>
        );
    }

    const SearchBox = ({ currentRefinement, refine, placeholder }) => (
        <form noValidate action="" role="search">
            <input
                className='block m-auto w-full text-[16px] bg-[#12181b80] outline-none px-3 pt-3 pb-2 border-b-4 border-b-[#a855f7] mb-4'
                type="search"
                value={currentRefinement}
                placeholder={placeholder}
                onChange={(event) => {
                    refine(event.currentTarget.value)
                }}
            />
        </form>
    );

    const CustomSearchBox = connectSearchBox(SearchBox);

    const Results = connectStateResults(({ searchState, children }) =>
        searchState && searchState.query ? (
            <>
                {children}
            </>
        ) : (
            <div className='text-[#b2becd] md:text-[14px] text-[11px] text-center'>No results yet</div>
        )
    );


    return (
        <>
            <section onClick={removeSearchFull} ref={searchFull} className='w-full h-full hidden top-0 bg-[#000]/[0.8] z-20 pt-[80px] fixed'>
                <div className='mx-auto md:w-[60%] sm:w-[80%] w-[100%] bg-[#2a2e35] min-h-[400px] p-[50px] px-[30px] rounded-md'>
                    <InstantSearch searchClient={clientAlgolia} indexName="blog">
                        <Configure
                            hitsPerPage={7}
                        />
                        <CustomSearchBox
                            placeholder={'Search'}
                        />
                        <Results>
                            <Hits hitComponent={Hit} />
                        </Results>
                    </InstantSearch>
                </div>
            </section>
            <div onClick={addSearchFull} className='md:hover:border-[#A855F7] hover:bg-opacity-20 md:bg-white md:bg-opacity-10 md:hover:border hover:drop-shadow-[0_0_7px_rgba(168,85,247,0.5)] border border-transparent md:border-[#929292] transition-all'>
                <div className="cursor-pointer relative boxSearch lg:w-[190px] lg:p-[8px] md:w-[150px]
                    md:p-[6px] flex items-center ">
                    <IoMdSearch className='mx-[5px] md:text-[25px]' fontSize={20} />
                    <span className='text-[14px] font-[600] hidden md:inline-block'>Search</span>
                    <span className='absolute hidden md:inline text-[10px] border-[#CED4D9] right-4 border py-[2px] px-2 rounded-[5px]'>/</span>
                </div>
            </div>
        </>
    )
}

