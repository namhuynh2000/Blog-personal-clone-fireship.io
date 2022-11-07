import algoliaSearch from 'algoliasearch';

export const clientAlgolia = algoliaSearch('0Q9AR1V606', process.env.NEXT_PUBLIC_ALGOLIA_TOKEN);
export const indexAlgolia = clientAlgolia.initIndex('blog');
