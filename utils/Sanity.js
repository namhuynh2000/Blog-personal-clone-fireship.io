// client.js
import sanityClient from '@sanity/client';

export const clientSanityConfig = {
    projectId: '6730jc99', // you can find this in sanity.json
    dataset: 'production', // or the name you chose in step 1
}

export const clientSanity = sanityClient({
    projectId: '6730jc99', // you can find this in sanity.json
    dataset: 'production', // or the name you chose in step 1
    apiVersion: '2021-10-21', // use a UTC date string
    token: process.env.SANITY_TOKEN, // or leave blank for unauthenticated usage
    useCdn: false // `false` if you want to ensure fresh data
})
