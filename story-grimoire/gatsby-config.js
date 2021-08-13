require('dotenv').config()

module.exports = {
    siteMetadata: {
        title: `Story Grimoire`,
        description: `A collection of various worlds for all the works in progress I have.`,
        author: `N Harper`,
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        {
            resolve: 'gatsby-source-graphcms',
            options: {
                endpoint:
                    'https://api-us-east-1.graphcms.com/v2/cknni7yqbcm3u01ut6txycovv/master',
                stages: ['PUBLISHED'],
            },
        },
        `gatsby-plugin-image`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`,
            },
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `story-grimoire`,
                short_name: `grimoire`,
                start_url: `/`,
                background_color: `#663399`,
                theme_color: `#663399`,
                display: `minimal-ui`,
                icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
            },
        },
        'gatsby-plugin-postcss',
        `gatsby-plugin-sass`,
        `gatsby-plugin-gatsby-cloud`,
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
        // `gatsby-plugin-offline`,
    ],
}
