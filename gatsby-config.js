require('dotenv').config({ path: `.env.${process.env.NODE_ENV}` })

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Gatsby SSG`,
    siteUrl: `https://www.yourdomain.tld`,
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
