module.exports = {
  pathPrefix: "/",
  siteMetadata: {
    title: `Linux App Store`
  },
  plugins: [
    'gatsby-plugin-top-layout',
    {
      resolve: 'gatsby-plugin-material-ui',
      // If you want to use styled components you should change the injection order.
      options: {
        // stylesProvider: {
        //   injectFirst: true,
        // },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/data/`,
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-json`,
  ],
}