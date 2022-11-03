// client.js
import sanityClient from '@sanity/client'

export default sanityClient({
    projectId: '6730jc99', // you can find this in sanity.json
    dataset: 'production', // or the name you chose in step 1
    apiVersion: '2021-10-21', // use a UTC date string
    token: 'skQhATLdq13IEs43i01tQ1RgFGZYvgZgTyu0tRUFqvBCYgfb7p6245DB6lIXhbU3Mzmm7v0O3fGgp3vAHpWI7DKcidXNNJpyALlkKeP4dAMa0NDlsxiwnmf4RMGW7nBpeZvcTYL27ItmZRFtls5Got6kmlhR7lVlCpz1Z15CRdbBUthtiMvp', // or leave blank for unauthenticated usage
    useCdn: true // `false` if you want to ensure fresh data
})