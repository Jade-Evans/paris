
//INDEX PAGE LOGIC************************************************************************//

//Adding change to style when hoving over any button in class="indexTopicButton"//
const indexTopicButton = document.querySelectorAll(".indexTopicButton");

//Adding links to the topic pages - assigning INDEX BUTTON VARIABLES//
const exploreFoodButton = document.getElementById("exploreFoodButton");
const exploreArchitectureButton = document.getElementById("exploreArchitectureButton");
const exploreCultureButton = document.getElementById("exploreCultureButton");
const exploreGardenButton = document.getElementById("exploreGardenButton");
const exploreEntertainmentButton = document.getElementById("exploreEntertainmentButton");

if(exploreFoodButton){
exploreFoodButton.addEventListener("click", ()=>{
    exploreFoodButton.classList.add("clicked");
    window.location.href="food.html";
 }) 
};

 if(exploreArchitectureButton){
exploreArchitectureButton.addEventListener("click", ()=>{
    exploreArchitectureButton.classList.add("clicked");
    window.location.href="architecture.html";
 })
};

if(exploreCultureButton){
exploreCultureButton.addEventListener("click",()=>{
    exploreCultureButton.classList.add("clicked");
    window.location.href="artculture.html";
    
})
};

if(exploreGardenButton){
exploreGardenButton.addEventListener("click",()=>{
    exploreGardenButton.classList.add("clicked");
    window.location.href="gardens.html";
})
};

if(exploreEntertainmentButton){
exploreEntertainmentButton.addEventListener("click",()=>{
    exploreEntertainmentButton.classList.add("clicked");
    window.location.href="entertainment.html";
})
};
//FOOD PAGE LOGIC**************************************************************************//

const foodImage = document.getElementById("foodImage");
const boulangerie = document.getElementById("boulangerie");
const coffee = document.getElementById("coffee");
const restaurant = document.getElementById("restaurant");
const patisserie = document.getElementById("patisserie");

if(boulangerie && foodImage){
boulangerie.addEventListener("mouseover", ()=>{
    foodImage.src = "imgs/Boulangerie.jpg";
});

boulangerie.addEventListener("mouseout", ()=>{
    foodImage.src = "imgs/paris-cafe.jpg";
})
};

if(coffee && foodImage){
coffee.addEventListener("mouseover", ()=>{
    foodImage.src = "imgs/coffee.jpg";
});

coffee.addEventListener("mouseout", ()=>{
    foodImage.src = "imgs/paris-cafe.jpg";
})
};

if(restaurant && foodImage){
restaurant.addEventListener("mouseover", ()=>{
    foodImage.src = "imgs/laMaisonRose.jpg";
});

restaurant.addEventListener("mouseout", ()=>{
    foodImage.src = "imgs/paris-cafe.jpg";
})
};

if(patisserie && foodImage){
patisserie.addEventListener("mouseover", ()=>{
    foodImage.src = "imgs/patisserie.jpg";
});

patisserie.addEventListener("mouseout", ()=>{
    foodImage.src = "imgs/paris-cafe.jpg";
})
};


  let scrollSpeed = 5; //to declare a variable for the scroll speed
  let scrollInterval = null;

  window.addEventListener('mousemove', (e) => {
    const distanceFromTop = e.clientY;
    const distanceFromBottom = window.innerHeight - e.clientY;
    const threshold = 100;

    clearInterval(scrollInterval);

    if (distanceFromTop < threshold) {
      scrollInterval = setInterval(() => {
        window.scrollBy(0, -scrollSpeed);
      }, 16);
    } else if (distanceFromBottom < threshold) {
      scrollInterval = setInterval(() => {
        window.scrollBy(0, scrollSpeed);
      }, 16);
    }
  });

  window.addEventListener('mouseleave', () => {
    clearInterval(scrollInterval);
  });

  window.addEventListener('mousemove', (e) => {
    const y = e.clientY;
    if (y > 50 && y < window.innerHeight - 50) {
      clearInterval(scrollInterval);
    }
  });

