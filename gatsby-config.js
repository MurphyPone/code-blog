module.exports = {
  pathPrefix: "/code-blog",
  siteMetadata: {
    title: `Peter's Code Blog`,
    description: `Peter's Code Blog`,
    author: `Peter Murphy`,
    siteUrl: `https://murphypone.github.io/code-blog`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-catch-links`,
    `gatsby-transformer-sharp`,
    //`gatsby-plugin-offline`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-robots-txt`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        useMozJpeg: true,
        stripMetadata: true,
        defaultQuality: 100,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 900,
              quality: 100,
              linkImagesToOriginal: false,
              withWebp: true,
              showCaptions: true,
            },
          },
          // {
          //   resolve: 'gatsby-remark-copy-linked-files',
          //   options: {
          //     ignoreFileExtensions: [],
          //   }
          // }
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Peter's Code Blog`,
        short_name: `Code Blog`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#ffffff`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
  ],
};
