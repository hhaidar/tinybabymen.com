module.exports = {
  siteMetadata: {
    title: 'tiny baby men — the podcast nobody asked for'
  },
  plugins: [
    'gatsby-plugin-sass',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`
      }
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'tinybabymen',
        short_name: 'tinybabymen',
        start_url: '/',
        background_color: '#c71014',
        theme_color: '#c71014',
        display: 'minimal-ui',
        icon: 'src/images/album.jpg' // This path is relative to the root of the site.
      }
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-128989413-1',
        head: true
      }
    },
    'gatsby-plugin-offline'
  ]
};
