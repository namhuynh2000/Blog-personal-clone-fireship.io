import algoliaSearch from 'algoliasearch';

export const client = algoliaSearch('0Q9AR1V606', '0a10f4e6aef073c12fb1a4ff039c65ee');
export const index = client.initIndex('blog');
