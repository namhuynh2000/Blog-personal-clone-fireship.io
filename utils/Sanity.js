import sanityClient from "../sanityClient";
import imageUrlBuilder from '@sanity/image-url';

const builder = imageUrlBuilder(sanityClient);

export function urlFor(source) {
    return builder.image(source)
}

export async function queryData(query) {
    return await sanityClient.fetch(query);
}