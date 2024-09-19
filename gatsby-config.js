module.exports = {
  siteMetadata: {
    title: `Ariel Rezin`,
    description: `Ariel Rezin's personal and professional website.`,
    author: `@arielrezin`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    'gatsby-plugin-theme-ui'
  ],
}
