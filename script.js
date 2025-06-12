
//Adding change to style when hoving over any button in class="indexTopicButton"//
const indexTopicButton = document.getElementById("indexTopicButton");
//const hoverIndexButtonStyle = function;//
//Adding links to the topic pages - assigning INDEX BUTTON VARIABLES//
const exploreFoodButton = document.getElementById("exploreFoodButton");
const exploreArchitectureButton = document.getElementById("exploreArchitectureButton");
const exploreCultureButton = document.getElementById("exploreCultureButton");
const exploreGardenButton = document.getElementById("exploreGardenButton");
const exploreEntertainmentButton = document.getElementById("exploreEntertainmentButton");

exploreFoodButton.addEventListener("click", ()=>{
    window.location.href="food.html";
});

exploreArchitectureButton.addEventListener("click", ()=>{
    window.location.href="architecture.html";
});

exploreCultureButton.addEventListener("click",()=>{
    window.location.href="artculture.html";
});

exploreGardenButton.addEventListener("click",()=>{
    window.location.href="garden.html";
});

exploreEntertainmentButton.addEventListener("click",()=>{
    window.location.href="gardens.html";
});