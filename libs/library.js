import imageUrlBuilder from '@sanity/image-url';
import { indexAlgolia } from '../utils/Algolia';
import { clientSanity } from '../utils/Sanity';

// Variables
export const postPerPage = 4;
const builder = imageUrlBuilder(clientSanity);

// Function
export function urlFor(source) {
    return builder.image(source)
}

export async function queryData(query) {
    return await clientSanity.fetch(query);
}

export async function syncSanityToAlgolia(query) {
    const posts = await queryData(query);

    indexAlgolia
        .replaceAllObjects(posts, { safe: true })
        .then(({ objectIDs }) => {
            console.log(objectIDs);
        })
        .catch(err => {
            console.log(err);
        });
}

