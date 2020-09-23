const settings = {
  "name": "oneoff",
  "state": {
    "frontity": {
      "url": "http://oneoff.7frwk6ymb9-ewx3lz9el4zq.p.runcloud.link/",
      "title": "ONEOFF",
      "description": "Exclusively Yours"
    }
  },
  "packages": [
    {
      "name": "oneoff-theme",
      "state": {
        "theme": {
          "menu": [
            [
              "About us",
              "/about-us/"
            ],
            [
              "Experiences",
              "/experiences/"
            ],
            [
              "Process",
              "/process/"
            ],
            [
              "Contacts",
              "/contacts/"
            ]
          ],
          "bottomLinks": [
            [
              "Follow our world",
              "https://www.instagram.com/"
            ],
            [
              "Contact us",
              "/contacts/"
            ]
          ],
          "socials": {
            "instagram": "https://www.instagram.com/"
          },
          "contacts": [
            [
              "projects@oneoff.it",
              "mailto:https://projects@oneoff.it"
            ],
            [
              "+39 0439 02 93 91",
              "tel:+390439029391"
            ]
          ],
          "featured": {
            "showOnList": false,
            "showOnPost": false
          }
        }
      }
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          "api": "http://oneoff.7frwk6ymb9-ewx3lz9el4zq.p.runcloud.link/wp-json",
          "homepage": "/homepage",
          postTypes: [
            {
              type: "block", // type slug
              endpoint: "block", // REST API endpoint
              archive: "/block_cat" // link where this custom posts are listed
            }
          ],
          taxonomies: [
            {
              taxonomy: "block_cat", // taxonomy slug
              endpoint: "block_cat", // REST API endpoint
              postTypeEndpoint: "block", // endpoint from which posts from this taxonomy are fetched
            }
          ]
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;
