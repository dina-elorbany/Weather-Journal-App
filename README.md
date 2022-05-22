# Udacity 💫

# Weather-Journal App Project

> This app is designed to get some information about the weather of any country that the client enters the zip code for.

### Features

- In each page reloading, the client can't click on the generate button because it's disabled and if he presses the Enter key or any key it will do nothing.

- When the user starts typing in the zip-code input box, behind the sense the js makes some checks for the validity of what he is typing, and the generate button won't be available to be clicked except if the zip code is valid ( only numbers and consists from 5 numbers).

- There is another optional field for entering the day feeling to get it written on the window of information he asked for.

- If the user enters a valid zip-code for any country, he will get some information about this country like (its name, the date of that day, the Temperature, the MAX and MIN temperatures, the weather description, and its icon too).

- If the user enters an invalid zip-code that doesn't belong to any country, he will get a window says what is the error occurred.

## Tools:

- ### HTML5.

- ### CSS3.

- ### Bootstrap 5.0.

- ### JavaScript/ES6.

- ### Node and Express.

## Images

![app-first-reload]('./website/assets/app-first-reload.png')

> First page loading or reloading.

![app-successed-call-without-feeling]('./website/assets/app-successed-call-without-feeling.png')

> Successed call without entering feeling.

![app-successed-call-with-feeling]('./website/assets/app-successed-call-with-feeling.png')

> Successed call with entering feeling.

![app-failed-call]('./website/assets/app-failed-call.png')

> Failed call

![app-successed-call-enter-key]('./website/assets/app-successed-call-enter-key.png')

> Successed call using enter key instead of button.

![app-failed-call-enter-key]('./website/assets/app-failed-call-enter-key.png')

> Failed call using enter key instead of button.

![app-empty-call-enter-key]('./website/assets/app-empty-call-enter-key.png')

> This was the error if the user made a call for an empty input using the enter key but I have also locked this case cause it's not realistic.

### Task requirements:

#### Overview

This project requires you to create an asynchronous web app that uses Web API and user data to dynamically update the UI.

#### Instructions

This will require modifying the `server.js` file and the `website/app.js` file. You can see `index.html` for element references, and once you are finished with the project steps, you can use `style.css` to style your application to customized perfection.

##### For app.js

- ✅ Personal API Key for OpenWeatherMap API
- ✅ Event listener to add function to existing HTML DOM element
- ✅ Function called by event listener \*/
- ✅ Function to GET Web API Data\*/
- ✅ Function to POST data \*/
- ✅ Function to GET Project Data \*/

##### For server.js

- ✅ Setup empty JS object to act as endpoint for all routes
- ✅ Express to run server and routes
- ✅ Start up an instance of app
- ✅ Here we are configuring express to use body-parser as middle-ware.
- ✅ Cors for cross origin allowance
- ✅ Initialize the main project folder
- ✅ Spin up the server
- ✅ Callback to debug
- ✅ Initialize all route with a callback function
- ✅ Callback function to complete GET '/all'
- ✅ Post Route

#### Extras:

If you are interested in testing your code as you go, you can use `tests.js` as a template for writing and running some basic tests for your code.

### End
