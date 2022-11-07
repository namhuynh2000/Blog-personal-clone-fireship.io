import Head from 'next/head';
import React from 'react'
import { InstantSearch, SearchBox, Hits, Highlight, Configure, InstantSearchSSRProvider } from 'react-instantsearch-hooks-web';
import { client } from '../utils/Algolia';

function Hit({ hit }) {
    return (
        <article>
            <h1>
                <Highlight attribute="title" hit={hit} />
            </h1>
            <p><Highlight attribute="description" hit={hit} /></p>
        </article>
    );
}

export default function search() {
    const queryHook = (query, search) => {
        search(query);
    };

    return (
        <>
            <div className='mx-auto w-[60%] bg-[#2a2e35] min-h-[300px] p-[30px] rounded-md'>
                <InstantSearch searchClient={client} indexName="blog" classNames={{
                    root: 'mx-auto w-[60%] bg-[#2a2e35] min-h-[300px] p-[30px] rounded-md'
                }}>
                    <Configure hitsPerPage={4} />
                    <SearchBox
                        placeholder={'Search'}
                        autoFocus={false}
                        // queryHook={queryHook}
                        classNames={{
                            root: '',
                            // form: 'mx-auto w-[60%] bg-[#2a2e35] min-h-[300px] p-[30px] rounded-md',
                            input: 'block m-auto w-full text-[16px] bg-[#12181b80] outline-none px-3 pt-3 pb-2 border-b-4 border-b-[#a855f7]',
                        }}
                        submitIconComponent='false'
                        resetIconComponent='false'
                    />
                    <Hits hitComponent={Hit} />
                </InstantSearch>
            </div>
        </>
    )
}


