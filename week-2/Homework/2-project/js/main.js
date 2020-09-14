// find each button on page
let blueBtn = document.querySelector('#blueBtn')
let orangeBtn = document.querySelector('#orangeBtn')
let greenBtn = document.querySelector('#greenBtn')



function setTheme(color) {
  
  let jumbotron = document.querySelector('.jumbotron')
  
  let donateBtn = document.querySelector('.jumbotron .btn-primary')
  
  let volunteerBtn = document.querySelector('.jumbotron .btn-secondary')
  
  if (color == 'blue') {
    jumbotron.style.backgroundColor = '#588fbd'
    donateBtn.style.backgroundColor = '#ffa500'
    volunteerBtn.style.backgroundColor = 'black'
    volunteerBtn.style.color = 'white'
  } else if (color == 'orange') {
    jumbotron.style.backgroundColor = '#f0ad4e'
    donateBtn.style.backgroundColor = '#5751fd'
    volunteerBtn.style.backgroundColor = '31b0d5'
    volunteerBtn.style.color = 'white'
  } else if (color == 'green') {
    jumbotron.style.backgroundColor = '#87ca8a'
    donateBtn.style.backgroundColor = 'black'
    volunteerBtn.style.backgroundColor = '#8c9c08'  
  }
};

// attach event listener to each button
  // on click change the color of the elments to the colors given

blueBtn.addEventListener('click', () => setTheme('blue'))
orangeBtn.addEventListener('click', () => setTheme('orange'))
greenBtn.addEventListener('click', () => setTheme('green'))

blueBtn.addEventListener('click', () => {
    jumbotron.style.backgroundColor = '#588fbd'
    donateBtn.style.backgroundColor = '#ffa500'
    volunteerBtn.style.backgroundColor = 'black'
    volunteerBtn.style.color = 'white'
  });


orangeBtn.addEventListener('click', () => {
  jumbotron.style.backgroundColor = '#f0ad4e'
  donateBtn.style.backgroundColor = '#5751fd'
  volunteerBtn.style.backgroundColor = '#31b0d5'
  volunteerBtn.style.color = 'white'
});

greenBtn.addEventListener('click', () => {
  jumbotron.style.backgroundColor = '#87ca8a'
  donateBtn.style.backgroundColor = 'black'
  volunteerBtn.style.backgroundColor = '#8c9c08'
});


//* part two/*


formEmailField = document.querySelector("#exampleInputEmail1");
formNameField = document.querySelector("#example-text-input");
formDescribeFiled = document.querySelector("#exampleTextarea");
submitBtn = document.querySelector("form .btn-primary");

submitBtn.addEventListener("click",function(submition){
  submition.preventDefault();
  
  let error = false;
  
  if(formEmailField.value.length == 0){
    formEmailField.style.borderColor ="red"
    error = true;
  }
  if (formNameField.value.length == 0) {
    formNameField.style.borderColor = "red"
    error = true;
  }
  if (formDescribeFiled.value.length == 0){
    formDescribeFiled.style.borderColor = "red"
    error = true;
  }
  
  
  EmailArray = formEmailField.value.split("@");
  if (EmailArray.length < 2) {
    formEmailField.style.borderColor = "red";
    error = true;
  }

  if (error === false) {
    alert("Thank you for Registration");
    formEmailField.value = " ";
    formNameField.value = " ";
    formDescribeFiled.value = " ";

    formEmailField.style.borderColor ="grey";
    formNameField.style.borderColor = "grey";
    formDescribeFiled.style.borderColor = "grey";


  }

});