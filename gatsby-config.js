/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-transition-link`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Raja Osama`,
        short_name: `RajaOsama 😎`,
        start_url: `/`,
        background_color: `#090909`,
        theme_color: `#090909`,
        display: `standalone`,
        icon: `src/icon512x512.png`,
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `poppins\:100,200,300,400,400i,500,600,800,700,900`, // you can also specify font weights and styles
        ],
        // display: "poppins",
      },
    },

    "gatsby-plugin-offline",
  ],
  siteMetadata: {},
}
