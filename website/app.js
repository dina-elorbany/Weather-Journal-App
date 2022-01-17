(function () {
  /*---------- Global Variables ----------*/
  "use strict";
  // Change playbackRate of the Background Video
  document.querySelector("video").playbackRate = 0.5;

  // Select Input Box
  const zipCode = document.querySelector("#zip");
  const feeling = document.querySelector("#feeling");

  // Select Generate button
  const generateBtn = document.querySelector("button");

  // Select Weather area to display it
  const weatherDataContainer = document.querySelector(".entry");

  // URL to get weather's data
  const baseURL = `http://api.openweathermap.org/data/2.5/weather?zip=`;
  // API Key of my Credentials
  const apiKey = `&appid=3d8312e83ef0cd368b4e4bc26880d070&units=metric`;

  // Weather Icon
  const getWeatherIcon = (icon) =>
    `http://openweathermap.org/img/wn/${icon}@2x.png`;

  // Select area of data come to display the response
  const receivedDataContainer = document.querySelector("#entry-holder");

  // Create a new date instance dynamically with JS
  let currentDate = new Date().toDateString();

  // Capitalize Weather Description
  const capitalizeFirstLetter = (str) =>
    str
      .toLowerCase()
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.substring(1))
      .join(" ");

  // Stop sending request to get data if the zip code input is empty
  generateBtn.disabled = true;

  const generateData = (e) => {
    e.preventDefault();

    // Object of user's data
    const user = {
      zip: zipCode.value,
      feeling: feeling.value,
    };

    // Invoke asynchronous 'getWeatherData' function
    getWeatherData(user.zip).then((data) => {
      if (data.cod === 200) {
        // Using destructuring to Create a custom Object that send to server
        const {
          name: countryName,
          main: { temp, temp_min: min, temp_max: max },
          weather: [{ icon, description }],
        } = data;

        // Custom object
        const dataSucceed = {
          countryName,
          currentDate,
          temp,
          min,
          max,
          icon,
          description,
          feeling: user.feeling.charAt(0).toUpperCase() + user.feeling.slice(1),
        };

        // Send data to server
        postData("/add", dataSucceed);

        // Show Weather's Data if the call Succeeded
        updateUI(dataSucceed);
        weatherDataContainer.classList.remove("d-none");
      }

      // Show Error if the call failed
      else {
        const dataFailed = data;
        updateUI(dataFailed);
        weatherDataContainer.classList.remove("d-none");
      }
    });
  };

  // Generate Weather's data when user clicks 'Generate' button
  generateBtn.addEventListener("click", generateData);

  // Generate Weather's data when user presses on the 'Enter' key
  document.addEventListener(
    "keypress",
    // (e) => e.key === "Enter" && generateBtn.disabled !== true && generateData(e)
    (e) => {
      if (e.key === "Enter") {
        console.log(e.key + "is pressed");
        generateData(e);
      }
    }
  );

  // POST Function
  const postData = async (url, data) => {
    const response = await fetch(url, {
      method: "POST",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const dataJSON = await response.json();
    return dataJSON;
  };

  // GET Function
  const getWeatherData = async (zip) => {
    // Remove previous Data
    weatherDataContainer.classList.add("d-none");

    // GET call
    const response = await fetch(baseURL + zip + apiKey);
    const data = await response.json();

    try {
      return data;
    } catch (err) {
      console.error("error", err);
    }
  };

  // Check Zip validation
  function validateZipCode(zipValue) {
    var zipCodePattern = /^\d{5}(?:[-\s]\d{4})?$/;
    return zipCodePattern.test(zipValue);
  }
  zipCode.addEventListener("keyup", function (event) {
    var isValidCode = validateZipCode(event.target.value);

    generateBtn.disabled = !isValidCode;
  });

  // Updating UI to show Data or Error message
  const updateUI = (data) => {
    receivedDataContainer.innerHTML = "";
    console.log(data);
    if (!data.cod) {
      // when the call Succeed
      receivedDataContainer.insertAdjacentHTML(
        "afterbegin",
        `
        <h1>${data.countryName}</h1>
        <h5>${currentDate}</h5>
        <h2>${data.temp.toFixed(1)}&degC</h2>
        <div class="d-flex justify-content-around">
          <p>H: ${Math.round(data.max)}&degC</p>
          <p>-</p>
          <p>L: ${Math.round(data.min)}&degC</p>
        </div>
        <img src=${getWeatherIcon(data.icon)}></div>
        <h5>${capitalizeFirstLetter(`${data.description}`)}</h5></div>
        <h5>${data.feeling}</h5></div>
        `
      );
    } else {
      // When the Call Fail
      receivedDataContainer.insertAdjacentHTML(
        "afterbegin",
        `
        <h1>Error ${data.cod}</h1>
        <h3>${capitalizeFirstLetter(data.message)}</h3>
      `
      );
    }
  };
})();
