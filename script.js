
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
    exploreFoodButton.classList.add("clicked");
    window.location.href="food.html";
    
});

exploreArchitectureButton.addEventListener("click", ()=>{
    exploreArchitectureButton.classList.add("clicked");
    window.location.href="architecture.html";
 
    
});

exploreCultureButton.addEventListener("click",()=>{
    exploreCultureButton.classList.add("clicked");
    window.location.href="artculture.html";
    
});

exploreGardenButton.addEventListener("click",()=>{
    exploreGardenButton.classList.add("clicked");
    window.location.href="gardens.html";
    
    
});

exploreEntertainmentButton.addEventListener("click",()=>{
    exploreEntertainmentButton.classList.add("clicked");
    window.location.href="entertainment.html";
    
    
});

//MAKING THE LINKS NAVIGATE TO EXTERNAL WEBSITES FOR CAFES/ETC.//

const submenuTitle = document.querySelectorAll(".submenu li");


submenuTitle.forEach(place=>{
    place.addEventListener("click", ()=>{
    place.classList.add("clicked");
    const link = place.querySelector("a");
    window.location.href = link.href;
    });
});




