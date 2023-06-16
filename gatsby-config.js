require('dotenv').config({ path: `.env.${process.env.NODE_ENV}` })

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  pathPrefix: '/frontend_1b',
  siteMetadata: {
    title: `Gatsby SSG`,
    siteUrl: `https://str3lyx.github.io/frontend_1b/`,
  },
  plugins: [
    {
      resolve: '@directus/gatsby-source-directus',
      options: {
        url: process.env.DIRECTUS_URL,
        auth: {
          token: process.env.DIRECTUS_TOKEN,
        },
      },
    },
  ],
}
