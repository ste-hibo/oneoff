const settings = {
  "name": "oneoff",
  "state": {
    "frontity": {
      "url": "https://api.oneoffexclusive.com/",
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
              "/about-us/",
              "https://api.oneoffexclusive.com/wp-content/uploads/2020/09/about-us.jpg",
              "About us",
            ],
            [
              "/experiences/",
              "https://api.oneoffexclusive.com/wp-content/uploads/2020/09/experiences.jpg",
              "Experiences",
            ],
            [
              "/process/",
              "https://api.oneoffexclusive.com/wp-content/uploads/2020/09/process.jpg",
              "Process",
            ],
            [
              "/contacts/",
              "https://api.oneoffexclusive.com/wp-content/uploads/2020/09/menu-background.jpg",
              "Contacts",
            ]
          ],
          "defaultMenuImage": "https://api.oneoffexclusive.com/wp-content/uploads/2020/09/menu-background.jpg",
          "bottomLinks": [
            [
              "Follow us on Instagram",
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
              "+39 051 356827",
              "tel:+39051356827"
            ]
          ],
          "contactsSettings": {
            mainText: "Contact us</br>For your next event",
            bottomText: "Partner of <strong>hibo</strong>",
            cursorText: "HIRE US"
          },
          "featured": {
            "showOnList": false,
            "showOnPost": false
          },
          "autoPrefetch": "hover"
        }
      }
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          "api": "https://api.oneoffexclusive.com/wp-json",
          "homepage": "/homepage",
          postTypes: [
            {
              type: "experience", // type slug
              endpoint: "experience", // REST API endpoint
              archive: "/experiences" // link where this custom posts are listed
            }
          ],
          taxonomies: [
            {
              taxonomy: "experiences", // taxonomy slug
              endpoint: "experiences", // REST API endpoint
              postTypeEndpoint: "experience", // endpoint from which posts from this taxonomy are fetched
            }
          ]
        }
      }
    },
    "frontity-contact-form-7",
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;
