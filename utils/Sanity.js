// client.js
import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';
import { index } from './Algolia'

export const clientConfig = {
    projectId: '6730jc99', // you can find this in sanity.json
    dataset: 'production', // or the name you chose in step 1
}

const client = sanityClient({
    projectId: '6730jc99', // you can find this in sanity.json
    dataset: 'production', // or the name you chose in step 1
    apiVersion: '2021-10-21', // use a UTC date string
    token: process.env.SANITY_TOKEN, // or leave blank for unauthenticated usage
    useCdn: false // `false` if you want to ensure fresh data
})

const builder = imageUrlBuilder(client);

export function urlFor(source) {
    return builder.image(source)
}

export async function queryData(query) {
    return await client.fetch(query);
}


export async function syncSanityToAlgolia(query) {
    const posts = await queryData(query);
    // const posts = JSON.parse(data)
    const object = [
        {
            name: 'Foo2',
            listFriend: ['minh', 'nam']
        }, {
            name: 'Foo',
        },
    ];

    // console.log(object)

    // index
    //     .saveObjects(object, { 'autoGenerateObjectIDIfNotExist': true })
    //     .then(({ objectIDs }) => {
    //         console.log(objectIDs);
    //     })
    //     .catch(err => {
    //         console.log(err);
    //     });

    index
        .replaceAllObjects(posts, { safe: true })
        .then(({ objectIDs }) => {
            console.log(objectIDs);
        })
        .catch(err => {
            console.log(err);
        });
}

