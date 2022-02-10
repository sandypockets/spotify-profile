# Spotify Profile
Login, view your top tracks, albums, and playlists. 

## Tech stack
- Spotify Web API
- Create React App
- Express.js
- Reach Router
- Tailwind CSS
- Styled Components (animations)

## Get started
Developed with Node `14.17.0`

1. [Register a Spotify App](https://developer.spotify.com/dashboard/applications) and add `http://localhost:8888/callback` as a Redirect URI in the app settings.
2. Create an `.env` in the `client/` directory. Copy the contents of `.env.example` into it, and replace the default values with your own.
3. From the `client/` directory, install dependencies by running `yarn install` 
4. Repeat the `.env` and `yarn install` process in the `server/` directory.

## Server commands
From `client/`
```shell
yarn start
```

From `server/`
```shell
yarn server
```

Then visit `http://localhost:3000` in your browser.

## Dependencies

### Server dependencies
- cluster `^0.7.7`
- concurrently `^7.0.0`
- connect-history-api-fallback `^1.6.0`
- cookie-parser `^1.4.6`
- cors `^2.8.5`
- dotenv `^16.0.0`
- express `^4.17.2`
- os `^0.1.2`
- path `^0.12.7`
- querystring `^0.2.1`
- request `^2.88.`

### Client dependencies
- @reach/router `^1.3.4`
- @testing-library/jest-dom `^5.14.1`
- @testing-library/react `^12.0.0`
- @testing-library/user-event `^13.2.1`
- chart.js `^3.7.0`
- prop-types `^15.8.1`
- react `^17.0.2`
- react-dom `^17.0.2`
- react-scripts `5.0.0`
- styled-components `^5.3.3`
- web-vitals `^2.1.0`

#### Dev dependencies
- autoprefixer `^10.4.2`
- postcss `^8.4.6`
- tailwindcss `^3.0.1`

Although this app has some major overhauls, credit for the visual design and Spotify hook go to [bchiang's repo](https://github.com/bchiang7/spotify-profile). 