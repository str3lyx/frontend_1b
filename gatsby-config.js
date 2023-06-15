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
        url: `http://0.0.0.0:8055`,
        auth: {
          token: 'M-Sx9cNx6IhE_-pNBEpcP9XcJrmNuI6B',
        },
      },
    },
  ],
}
