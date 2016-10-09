TEDxPurdueU Website

# Sections
1. Technologies
2. Server administration
3. Mobile platforms

# Technologies

Because our web application hosts mostly static content, until such time as we need more dynamic data interactions, we're using static pages for the main site at `tedxpurdueu.com` and serving static JSON through node at the API endpoints for mobile applications.

# Installation

We use `gulp` to manage our build process. Just run `gulp` (default task) from the root directory to build the site. 

# Server administration

Both our static web server and our JSON (mobile application backend) server are hosted on a Fedora server on DigitalOcean
