module.exports = {
  siteMetadata: {
    siteTitle: 'My Blog',
    siteDescription:
      'This is my blog post for sharing the stuff that seems helpful.',
    siteImage: '/banner.png', // main image of the site for metadata
    siteUrl: 'https://chronoblog-hacker.now.sh/',
    pathPrefix: '/',
    siteLanguage: 'en',
    ogLanguage: `en_US`,
    author: 'Prathamesh Mali', // for example - 'Ivan Ganev'
    authorDescription: 'Self taught developer, 📍 Mumbai', // short text about the author
    avatar: '/avatar.jpg',
    twitterSite: '', // website account on twitter
    twitterCreator: '', // creator account on twitter
    social: [
      {
        icon: `mail`,
        url: `mali.prathamesh82@gmail.com`
      },
      {
        icon: `github`,
        url: `https://www.github.com/pratham82`
      },
      {
        icon: `linkedin`,
        url: `https://www.linkedin.com/in/prathamesh-mali-20582318a/`
      }
    ]
  },
  plugins: [
    {
      resolve: 'gatsby-theme-chronoblog',
      options: {
        uiText: {
          // ui text fot translate
          feedShowMoreButton: 'show more',
          feedSearchPlaceholder: 'search',
          cardReadMoreButton: 'read more →',
          allTagsButton: 'all tags'
        },
        feedItems: {
          // global settings for feed items
          limit: 50,
          yearSeparator: true,
          yearSeparatorSkipFirst: true,
          contentTypes: {
            links: {
              beforeTitle: '⬈ '
            }
          }
        },
        feedSearch: {
          symbol: ''
        }
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Chronoblog Gatsby Theme`,
        short_name: `Chronoblog`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#3a5f7d`,
        display: `standalone`,
        icon: `src/assets/favicon.png`
      }
    },
    {
      resolve: `gatsby-plugin-sitemap`
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // replace "UA-XXXXXXXXX-X" with your own Tracking ID
        trackingId: 'UA-XXXXXXXXX-X'
      }
    }
  ]
};
