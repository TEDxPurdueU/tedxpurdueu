# TEDxPurdueU Main Website
---
Static site at (tedxpurdueu.com)[https://tedxpurdueu.com].

## Sections
1. Technologies
2. Installation
3. Server administration
10. Other notes

## Technologies

Because our web application hosts mostly static content, until such time as we need more dynamic data interactions, we're using static pages for the main site at `tedxpurdueu.com` and serving static JSON at the API endpoints for mobile applications.

Our stack is pretty vanilla, using __jQuery__ where it's convenient, unless performance is desired. Our JavaScript is a mix of vanilla and jQuery, preferring vanilla, but preferring code readability over purity. We use __Nginx__ on the server as a reverse proxy and for serving static sites, and we use __SCSS__ to keep our styles clean. Finally, we use __CloudFlare__ as a CDN to keep our site fast, take care of some caching, and for simple, set-it-and-forget-it TLS.

## Installation

We use `gulp` to manage our build process. Just run `gulp build` from the root directory to generate all the necessary assets after changes. This runs:
- `compile-styles`, which compiles all our styles into a single file
- `compile-scripts`, which minifies and concatenates all of our custom scripts into a single file,
- `compile-libs`, which vulcanizes our client-side dependencies

## Server administration

Both our static web server and our JSON (mobile application backend) server are hosted on a Fedora server on DigitalOcean. For access to the server, please contact the current TEDxPurdueU technology lead.

We have two versions of the site, `dev.tedxpurdueu.com` and `[www.]tedxpurdueu.com`. the `dev` subdomain is used as a beta / staging version. Currently, both versions pull from the same `master` branch, and the production version is migrated over directly from the staging version rather than pulling down from GitHub.

## Other notes

- Our image files are named very haphazardly. I'm going to point the finger here to nobody in particular, but mostly, this is a consequence of our site migrating from WordPress to a custom solution. Since WordPress dosn't give a hoot about how files are named on upload, this happens. We deal with it. 
