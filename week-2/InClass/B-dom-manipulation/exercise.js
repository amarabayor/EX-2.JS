/*
Task 1
=======
Write JavaScript below that logs:
    1. all the "p" element nodes of the document,
    --> should log a list of nodes with a length of 6
    

    2. the first div element node
    --> should log the ".site-header" node

    3. the element with id "jumbotron-text"
    --> should log the "#jumbotron-text" node

    4. all the "p" elements of contained inside  the .primary-content element node
    --> should log a list of nodes with a length of 3

*/
// number one
var pElement = document.querySelectorAll("p");
console.log(pElement);
// number two
var firstDiv = document.querySelector("div");
console.log(firstDiv);

// number three
var junbotElement = document.querySelector("#junbotron-text");
console.log(junbotElement);

var pElementsInsidePrimary = document.querySelectorAll(".primary-content");
console.log (pElementsInsidePrimary);



// function setBackground(){
//     let  lead= document.querySelectorAll("lead")
//     lead.forEach(lead=>{lead.style.backgroundColor = "blue"})
// };

// function set_background() {
//     var myParas = document.querySelectorAll('body p');
//     for (var i = 0; i < myParas.length; i++) {
//     myParas[i].style.background = 'red';
//     }
    
// };


/*
Task 2
======

When a user clicks the 'ALERT' button, an alert box should pop up with the text "Thanks for visiting Bikes for Refugees!"
*/
var alertButton = document.querySelector('#alertBtn')
alertButton.addEventListener('click',alertsomething); 

function alertsomething() {
    alert("Thanks for visiting Bikes for Refugees!") 
};

/*
Task 3
=======

Write JavaScript below that changes the background colour of the page when the 'Change colour' button is clicked.
*/
// var ChangeColorButton = document.querySelector("#bgrchangeBtn");
// ChangeColorButton.addEventListener("click",changecolor);

// function changecolor(){
//     var  pagebody = document.querySelector("body");
//     pagebody.style.backgroundColor = "red";
// };
/*
Task 4
======

When a user clicks the ‘Add some text’ button, a new paragraph should be added inside the section that says “LEARN MORE”
*/
var addTextButton =document.querySelector("#addTextBtn");
var LearMoreSection = document.querySelector("#mainArticles");
var NewParagraph = document.createElement("p");
NewParagraph.innerText = "Hello, thanks for supporting Refugees";
addTextButton.addEventListener("click",addTexttosection );

function addTexttosection(){
    LearMoreSection.appendChild(NewParagraph);
   
};

// /*
// Task 5
// ======

// When the 'Larger links!' button is clicked, the text of all links on the page should increase.
// */
let largerlinksBtn = document.querySelector("#largerLinksBtn");
let alllinks = document.querySelectorAll("a");
let currentSizeIn = Array.from(alllinks);
largerlinksBtn.addEventListener("click",IncreaseSize);

function IncreaseSize(){
currentSizeIn.forEach(function(iterm){
    iterm.style.fontSize = "2em";
})
};

/*
Task 6
======

Using the same function in Task 4,
When the 'Add' button is clicked, get the text inside the input field and create a new paragraph in the "LEARN MORE" section
Also clear the text inside the input field
*/
let addButton =document.querySelector("#addArticleBtn");
let LearMoreSectionInputt = document.querySelector("#mainArticles");
let Inputfield = document.querySelector("input.addArticle");
let sentence = document.createElement("p");

addButton.addEventListener("click", addtext)

function addtext(){
    text = Inputfield.value;
    sentence.innerText = text;
    LearMoreSectionInputt.appendChild(sentence);

};

/*
Task 7
======

Create an array of 5 different colors.
Using the same function in Task 3, every time the 'Change colour' button is clicked, the background color will be changed with the next color in the array.
The next color when you are in the last color of the array will be the first color again.
*/
colorsArray = ["red" ,"blue", "green", "yellow"];

var ChangeColor = document.querySelector("#bgrchangeBtn");

ChangeColor.addEventListener("click", pagecolor);

Num = 0;

function pagecolor(){
    var  page = document.querySelector("body");
    page.style.backgroundColor = colorsArray[Num];
    Num = Num +1;
    if(Num > 3){
        Num = 0;
    }
};