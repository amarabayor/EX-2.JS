/*
================

1. Create an HTML file that uses this javascript file.
2. The HTML file should contain a form with 2 inputs: (latitude and longitude), and a button with the text GET.
3. When you click in the button, you should use fetch function to get information from the URL https://fcc-weather-api.glitch.me/api/current?lat=35&lon=45 with 
user latitude and longitude.
4. When you get the response from the server, print the current temperature in an <h3> marker.
5. Validate the form when you click on the button, if the inputs are empty or are not numeric, show a warning message

================
*/
function fetchWeather() {
  let latField =document.querySelector("#latitude")
  let longField = document.querySelector("#longitude")
  let url = "https://fcc-weather-api.glitch.me/api/current?lat=" + latField.value + "&lon=" + longField.value
  let promise =fetch(url)
  promise
  .then(response => response.json())
  .then(result => console.log(result))
  
  let getbutton = document.querySelector("#submitButton")
  getbutton.addEventListener("click",fetchWeather)

}
