---
title: Fetch API in node.js with weather API
cover: ./image.jpg
date: 2021-08-10
description: All the usual blog post.
tags: ['post']
---

Photo by <a href="https://unsplash.com/@miaanderson?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Mia Anderson</a> on <a href="https://unsplash.com/s/photos/fetch?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a>

I think this is the most important topic in JS or you can say in Web development. Being a developer it's part of our job to work with backend and fetching information from the databases or from the internet. So knowing fetch is very essential for every web developer. I made this tutorial for simply get you started with fetch API and little bit of async/await so you can use it in the further projects.

Fetch API is one of the simplest way to make asynchronous HTTP request in the web browser. It uses JS **Promises** to deliver more flexible features for making requests on the browser. Fetch method returns a **Promise** so we can make use of **.then()** and **.catch()** methods to handle the response.

This is example of fetch request in node.js. You apply the same this tutorial with from part 2 for vanilla JS, **fetch** is available in vanilla JS out of the box so you don't have to go through the npm package installation.

## **1. Installing node-fetch package**

We first need to create a directory with and start the npm project in the same directory then create a javascript file.

```
mkdir weather-app
npm init -y
touch app.js
```

Installing "node-fetch" npm package.

```
npm i node-fetch --save
```

In the app.js file we have to import the package, for importing the package we have to use require statement as follows:

```javascript
const fetch = require('node-fetch');
```

Now we can use the fetch module.

<br/>

## **2. Fetching weather info from openweathermap API**

For demonstration I will be using openweathermap API . Its free to use you can sign up for it [here](https://openweathermap.org/) and go to [account page](https://home.openweathermap.org/api_keys) and get you API_KEY.

Now we can make a http request by passing the url in fetch method.
First we will make a simple fetch request for checking if our API call works and then logging the data to the console.

But first lets check out the code how its actually working?.
We are passing the URL in fetch so, it will return a response object which has all the information we need, provided our URL and API is correct. If we pass wrong url or API key we will get an error object.

- **url**: Inside fetch the first chunk of info before the ? is our API endpoint.
- **?q:** q stands for query and in the query we can pass the city name so we will get info about that city. for this example I am hard coding the city to Mumbai. You can later take the city name from the user dynamically. link for my github repo for reference.
- **&units:** this is measuring units for eg. celsius or fahrenheit.
- **APP_ID:** this is our API Key.

This function will return a **Promise** in order to handle the promise we will use **.then()** is a method callback which is available after a **promise** is **resolved**. Promise is resolved means the request was successful and there is no error. The **.catch()** method deals with **rejected** cases only when the request is **not resolved** it will return the block of code in the **.catch()** method. And I'm using arrow function as callback functions inside .then and ,catch.

<br/>

### **Simple Fetch Example:**

```javascript
fetch(
  'https://api.openweathermap.org/data/2.5/weather?q=mumbai&units=metric&APPID=YOUR_KEY'
)
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
```

We can just run following :

```
node app.js
```

If everything works out, you will get this response in your console, this is JS Object so we can pull out the information as we need and render it on the front end.

**Successful response:**

```javascript
{
  coord: { lon: 72.85, lat: 19.01 },
  weather: [ { id: 721, main: 'Haze', description: 'haze', icon: '50d' } ],
  base: 'stations',
  main: {
    temp: 31.49,
    feels_like: 34.13,
    temp_min: 31,
    temp_max: 32,
    pressure: 1006,
    humidity: 70
  },
  visibility: 5000,
  wind: { speed: 5.7, deg: 300 },
  clouds: { all: 40 },
  dt: 1599127310,
  sys: {
    type: 1,
    id: 9052,
    country: 'IN',
    sunrise: 1599094455,
    sunset: 1599139321
  },
  timezone: 19800,
  id: 1275339,
  name: 'Mumbai',
  cod: 200
}
```

If the key is wrong will look **error** will look something like this:

```javascript
{
  cod: 401,
  message: 'Invalid API key. Please see http://openweathermap.org/faq#error401 for more info.'
}
```

We will further see how to catch the error and return a meaning full response in the dev console using try catch block.

<br/>

## **3. Async/Await :**

In javascript there is a special syntax to work with promises i.e async/await

- **async:** For implementing it we just have to use **async** in the front of our function, which means the function will always returns a promise. The return values will be automatically wrapped in the promise. Simply the async function makes sure that our function will return a promise.
- **await:** It only works inside of async function. Await keyword makes javascript **wait** till the **promise** **settles** and **returns** itself means the JS will wait till the promise is **resolved** or **rejected**.

Now coming back to our example here we are creating a new function which returns the response from the fetch call i.e either a **resolved promise**(object with valid weather info) or **rejected promise**(error object).
In the method first we are using await to wait till the fetch is response is settled.

The function execution will **pauses** on the line where **await** is called and resumes when the promise is settled. It doesn’t cost any CPU resources, because the JavaScript engine can do other jobs in the meantime: execute other scripts, handle events, etc.

And in the end we are just calling the getWeather method.

<br/>

### **Fetch with async await:**

```javascript
async function getWeather() {
  const weather = await fetch(
    'https://api.openweathermap.org/data/2.5/weather?q=mumbai&units=metric&APPID=YOUR_KEY'
  );
  let response = await weather.json();
  console.log(response);
}

getWeather();
```

<br/>

### **Example with IFFIE:** (Immediately Invoked Function Expression)

this function will be immediately invoked as the name suggests. And I have used try and catch block for handling exceptions. This instead of storing the weather info in a variable we can directly use use url with fetch. Instead of just logging the data we can use specific info on the response object and store it in a variable. and then use it front end for showing weather information.

```javascript
(async () => {
  await fetch(
    'https://api.openweathermap.org/data/2.5/weather?q=mumbai&units=metric&APPID=YOUR_KEY'
  )
    .then((response) => response.json())
    .then((data) => {
      const forecast = data.weather[0].description;
      const temperature = data.main.temp;
      const name = data.name;
      console.log(`Today's forecast for ${name}: ${forecast}`);
      console.log(`It's currently ${temperature}°C `);
    })
    .catch(console.log(`Error: ${err}`));
})();
```

```
Today's forecast for Mumbai: haze
It's currently 30°C
```

<br/>

#### **Conclusion:** We learned how to install fetch for nodejs. How to implement simple fetch callback. And finally async await. This was an initial step for fetching a weather API you can use lots of cool things with it If you want to see a live example of this weather API you can go the link below. Most of the things we've done here with an API is same for every API. So in future you can make use of fetch. Thanks for reading 😄.

<br/>

### **Links:**

### Weather App implementation [Source code](https://github.com/Pratham82/Weather-JS)

### [Live site for example](https://weather-app-new.netlify.app/)

<br/>

### **Further Reading:**

[Fetch API](<https://www.javascripttutorial.net/javascript-fetch-api/#:~:text=The%20Fetch%20API%20allows%20you,text()%20or%20json()%20.>)

[Async/await](https://javascript.info/async-await)

### **Video Links:**

[Learn fetch API in 6 minutes](https://www.youtube.com/watch?v=cuEtnrL9-H0)

<br/>

#### **Connect with me:**

<!-- <a href="https://github.com/Pratham82/"><img src = "https://img.shields.io/badge/github-%222222.svg?&style=for-the-badge&logo=github&logoColor=white"></a>
<a href="https://www.linkedin.com/in/prathamesh-mali-20582318a/"><img src="https://img.shields.io/badge/linkedin-%230077B5.svg?&style=for-the-badge&logo=linkedin&logoColor=white" /></a>
<a href="https://twitter.com/Pratham_82"><img src="https://img.shields.io/badge/twitter-%231DA1F2.svg?&style=for-the-badge&logo=twitter&logoColor=white" /></a>
<a href="mali.prathamesh82@gmail.com"><img src = "https://img.shields.io/badge/gmail-%23E4405F.svg?&style=for-the-badge&logo=gmail&logoColor=white" href="www.google.com" ></a> -->
