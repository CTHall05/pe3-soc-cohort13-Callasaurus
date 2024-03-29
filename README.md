# Percayso Programming Exercise 3

## Solution 

For my solution, I've used React, JavaScript and Cypress. The motivation for using the tech stack is: I have a lot of experience using React and JS and I know that this combination would allow me to create a fast single-page application with a nice and sleek UI. I've used Cypress for testing as it's an accessible tool that allows you to have confidence that your pages are mounting correctly, and that your API calls are working and the data they return is being rendered properly on screen. 

Within React, I've used packages such as 'react-router-dom', 'reactjs-popup', 'react-social-icons'. Packages such as these can provide subtle but beneficial impacts on the user experience. 

I would have liked to implement pagination within the app, however the free tier of the API only allows for a maximum of 10 articles to be returned and you are limited to 100 API calls per day. This is something I would look to do to improve the app.

## Application features 

- A landing page dashboard that gives the user an overview of what they can expect in the app and a way to access all features
- A navbar for additional ease of routing throughout the app 
- A search page functionality where users can search for and see articles in different languages and countries 
- A trending page functionality where users can search for and see articles by different categories in certain languages and countries 
- Responsive CSS for smaller screen sizes 

## Deployed link

https://percayso-frontend-callasd.netlify.app

## App demo 

https://user-images.githubusercontent.com/112335053/217567258-5dbe28fa-ecab-4f4f-81e2-7c465fabc31c.mp4

## Running the app locally 

Running React:
```
npm i
npm start
```

Testing:
```
npx cypress open
```
