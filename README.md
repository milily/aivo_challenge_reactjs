# Star Kitty+ Streaming Plataform  (Aivo Challenge with ReactJS)

url: [https://aivochallengereactjs.netlify.app](https://aivochallengereactjs.netlify.app)

In this project I built a simple Streaming Platform using a json file in order to do
the request with Axios and render all the movies or series by showing a card with the movie's or
serie's image and title.<br/>
This project has two main sections:  LOGIN and HOME.
### Login
To log in you just need to click the 'Iniciar Sesión' button and you will be redirect to authenticate
your profile with your Google acount.
### Home 
After authentication, home component will render all the movies or series as a response from the API call. </br>
This component has two buttons, first button 'Ordenar por nombre' is for ordering by alphabetical order and
second button 'Ordenar por año' is for ordering (descending order) by release year. And this component also has a searching input which filters by movie's or serie's name and by release year.
### Design
I use a simple design and components from MUI. </br>
This project is deployed using Netlify, you can visit the url: [https://aivochallengereactjs.netlify.app](https://aivochallengereactjs.netlify.app)

## Quick Start
1. Clone repository
2. Select folder cloned
3. ` $ yarn install `
4. ` $ yarn start ` 

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.


## Tech Stack

- ReactJS v17.0.2
- Material UI v5.3.1
- Axios v0.25.0
- Auth0-react v11.7.1

### WIP
Im currently working on responsive view so please visit the site from laptop/desktop computer.</br>
And there is an issue with the logout button and Netlify because I'm using more than one url in the allowed logout field from Auth0, so if you're running this app from [http://localhost:3000](http://localhost:3000), after logging out you will be redirect to [https://aivochallengereactjs.netlify.app](https://aivochallengereactjs.netlify.app) but if you're directly visiting [https://aivochallengereactjs.netlify.app](https://aivochallengereactjs.netlify.app) after logging out you will be redirect to [https://aivochallengereactjs.netlify.app](https://aivochallengereactjs.netlify.app)
