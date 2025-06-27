
//SCROLL SPEED TOP AND BOTTOM FOR ALL PAGES///**************************************************/
  let scrollSpeed = 5; //to declare a variable for the scroll speed
  let scrollInterval = null;

  window.addEventListener('mousemove', (e) => {
    const distanceFromTop = e.clientY;
    const distanceFromBottom = window.innerHeight - e.clientY;
    const threshold = 150;

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
    if (y > threshold && y < window.innerHeight - threshold) {
      clearInterval(scrollInterval);
    }
  });

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
//LOGIC TO CHANGE IMAGE ON HOVER//

//1. Assign variables using ids:
const activeImage = document.getElementById("activeImage");
const boulangerie = document.getElementById("boulangerie");
const coffee = document.getElementById("coffee");
const restaurant = document.getElementById("restaurant");
const patisserie = document.getElementById("patisserie");
const eiffeltower = document.getElementById("eiffeltower");
const notredame = document.getElementById("notredame");
const saintechapelle = document.getElementById("saintechapelle");
//2. Create an array to group together variable and their images//
const categories = [
  { id: "boulangerie", img: "imgs/squareboulangerie.jpg"},
  { id: "coffee", img: "imgs/squarecoffee.jpg"},
  { id: "restaurant", img: "imgs/squarebistro.jpg"},
  { id: "patisserie", img: "imgs/squarepatisserie.jpg"},
  { id: "eiffeltower", img: "imgs/eiffel-tower.jpg"},
  { id: "notredame", img: "imgs/notre-dame.jpg"},
  { id: "saintechapelle", img: "imgs/sainte-chapelle.jpg"},
  { id: "arcdetriomphe", img: "imgs/arc-de-triomphe.jpg"},
  { id: "palaisgarnier", img: "imgs/palais-garnier.jpg"},
  { id: "luxembourgpalace", img: "imgs/luxembourg-palace.jpg"},
]
//3. Create looped function to go through each item in category and assign correct image when hover on/off//
categories.forEach(({id, img})=>{//this is shorthand for: const id = category.id;const img = category.img;// start of forEach callback
    const element = document.getElementById(id);//element is the "placeholder" for eiffel tower etc. its the same as assigning const boulangerie = document.getElementById(boulangerie) but for all in categories. 
    if(element && activeImage){//start of if block
    element.addEventListener("mouseover", ()=>{
    activeImage.src = img;
});//end of mouseover
    element.addEventListener("mouseout", ()=>{
      activeImage.src = activeImage.dataset.default;
    }); //end of mouseout
}//end of if block
});// end of forEach callback



//LOGIC FOR FACT CARDS APPEARING ON HOVER - CHANGING CONTENT//

const overlay = document.querySelector(".overlay");

const links = document.querySelectorAll(".submenu li a, .category-item h3"); // point to anchor elements directly
links.forEach(link => {
  let fadeTimer;
  link.addEventListener("mouseenter", ()=>{
    if(!link.id)return; //logic for the h3s on food pages//
    activeImage.style.opacity = 1; //starts on full opacity

    fadeTimer = setTimeout(()=>{
      overlay.style.opacity = 1;
      activeImage.style.opacity = 0.3;
    },300);
    
  });

  link.addEventListener("mouseout", ()=>{
    clearTimeout(fadeTimer);
    overlay.style.opacity = 0;
    activeImage.style.opacity = 1;
  });


    const title = document.getElementById("title");
    const location = document.getElementById("location");
    const description = document.getElementById("description");
    const near = document.getElementById("near");
    const reservation = document.getElementById("reservation");
    const hours = document.getElementById("hours");
    const architectureImage = document.getElementById("architectureImage");

    if (link.id === "dupain") {
    title.textContent = "Du Pain et des Idées";
    location.textContent = "Location: 34 Rue Yves Toudic, 75010 Paris";
    description.textContent = "A historic, beautifully preserved boulangerie (dating to 1875) famed for its artisanal breads (like Pain des Amis) and inventive pastries (e.g., pistachio‑chocolate escargots), set beneath a stunning glass ceiling.";
    reservation.textContent = "Reservation required? NO";
    hours.textContent = "Opening Hours: Monday to Friday  around 7:00AM to 8:00PM; closed Saturday & Sunday";

    } else if (link.id === "grenierapain") {
    title.textContent = "Le Grenier à Pain (Montmartre)";
    location.textContent = "Location: 38 Rue des Abbesses, 75018 Paris";
    description.textContent = "Award‑winning Montmartre bakery known for its classic baguettes, croissants and pâtisseries. No indoor seating, but beloved for top-tier quality & cozy neighborhood vibe.";
    reservation.textContent = "Reservation required? NO";
    hours.textContent = "Opening Hours: Thursday to Monday 7:30 AM–8:00 PM; closed Tuesday & Wednesday";

    } else if (link.id === "utopie") {
      title.textContent = "Boulangerie Utopie";
      location.textContent = "Location: 20 Rue Jean‑Pierre Timbaud, 75011 Paris";
      description.textContent = "A creative artisan bakery with long‑fermentation loaves and pastries—recent winner of Paris’s best traditional baguette award in 2024. Excellent croissants, sourdoughs, tarts.";
      reservation.textContent = "Reservation required? NO";
      hours.textContent = "Opening Hours: Tuesday to Sunday 7:00 AM–8:00 PM; closed Monday";

      } else if (link.id === "lacafeotheque") {
        title.textContent = "La Caféothèque";
        location.textContent = "Location: 52 Rue de l’Hôtel de Ville, 75004 Paris";
        near.textContent = "Near: Hôtel de Ville / Île de la Cité";
        description.textContent = "Pioneering specialty coffee shop in Paris since 2005, roasting beans onsite from around the globe. Cozy multi-room setting, ‘Coffeeology’ workshops, and expert flat whites.";
        reservation.textContent = "Reservation required? NO";
        hours.textContent = "Opening Hours: Daily 8 AM–8 PM";

      }else if (link.id === "cafecoutume") {
        title.textContent = "Café Coutume";
        location.textContent = "Location: 47 Rue de Babylone, 75007 Paris";
        near.textContent = "Near: Saint‑Germain‑des‑Prés / Musée d’Orsay";
        description.textContent = "French-Australian specialty pioneer co-founded in 2011. Expertly roasted beans, precision espresso & filter brewing, with solid breakfast/brunch fare.";
        reservation.textContent = "Reservation required? NO";
        hours.textContent = "Opening Hours: Daily 8 AM–7 PM";
      

      } else if (link.id === "tenbelles") {
        title.textContent = "Ten Belles";
        location.textContent = "Location: 10 Rue de la Grange aux Belles, 75010 Paris";
        near.textContent = "Near: Canal Saint‑Martin";
        description.textContent = "Busy, friendly canal‑side café known for reliable espresso & filter brews, fresh baked goods, and a great relaxed vibe.";
        reservation.textContent = "Reservation required? NO";
        hours.textContent = "Opening Hours: Daily 8 AM–6 PM";
    
    } else if (link.id === "carette") {
      title.textContent = "Carette";
      location.textContent = "Location: 4 Place du Trocadéro, 75016 Paris";
      near.textContent = "Near: Eiffel Tower";
      description.textContent = "Carette is a luxurious Parisian pâtisserie serving exquisite macarons, pastries, and cakes. Its beautiful setting near the Trocadéro makes it a favorite for both locals and tourists.";
      reservation.textContent = "Reservation required? NO";
      hours.textContent = "Opening Hours: Monday to Sunday 9:00 AM - 7:00 PM";

    } else if (link.id === "berthillon") {
        title.textContent = "Berthillon";
        location.textContent = "Location: 29-31 Rue Saint-Louis en l'Île, 75004 Paris";
        description.textContent = "Berthillon is Paris’ most famous ice cream parlor, known for its high-quality, artisanal ice creams and sorbets. Located on the Île Saint-Louis, it's a must-visit for dessert lovers seeking authentic French flavors.";
        reservation.textContent = "Reservation required? NO";
        hours.textContent = "Opening Hours: Monday to Sunday: 10:00 AM - 7:00 PM";

      } else if (link.id === "angelina") {
        title.textContent = "Madamoiselle Angelina";
        location.textContent = "Location: 226 Rue de Rivoli, 75001 Paris";
        near.textContent = "Near: Louvre Museum";
        description.textContent = "Madamoiselle Angelina is a historic café known for its decadent hot chocolate ('L'Africain') and luxurious pastries. It has been a favorite of royalty and celebrities since 1903.";
        reservation.textContent = "Reservation required? YES";
        hours.textContent = "Opening Hours: Monday to Sunday 7:30 AM - 7:30 PM";

      } else if (link.id === "pierreherme") {
        title.textContent = "Pierre Hermé";
        location.textContent = "Location: 72 Rue Bonaparte, 75006 Paris";
        near.textContent = "Near: Saint-Germain-des-Prés";
        description.textContent = "Pierre Hermé is known for his creative and innovative take on French pastries, especially macarons and cakes. He is one of the most famous pâtissiers in Paris.";
        reservation.textContent = "Reservation required? NO";
        hours.textContent = "Opening Hours: Monday to Saturday 10:00 AM - 7:00 PM, Sunday 10:00 AM - 6:00 PM";
      
      } else if (link.id === "bouillonchartier") {
      title.textContent = "Bouillon Chartier";
      location.textContent = "Location: 7 Rue du Faubourg Montmartre, 75009 Paris";
      near.textContent = "Near: Opéra Garnier";
      description.textContent = "Historic Art-Nouveau 'bouillon' restaurant (since 1896), offering affordable, classic French dishes in a grand, Belle-Époque dining hall—tables shared, orders scribbled on paper tablecloths.";
      reservation.textContent = "Reservation required? NO";
      hours.textContent = "Opening Hours: Daily 11:00 AM–11:30 PM";

      } else if (link.id === "lafontainedemars") {
      title.textContent = "La Fontaine de Mars";
      location.textContent = "Location: 129 Rue Saint-Dominique, 75007 Paris";
      near.textContent = "Near: Eiffel Tower";
      description.textContent = "A charming, family-run bistro dating from 1908, offering classic French cuisine (like cassoulet and duck confit) in a warm, wood-panelled dining room just steps from the Eiffel Tower.";
      reservation.textContent = "Reservation required? YES (strongly recommended)";
      hours.textContent = "Opening Hours: Tuesday to Saturday 12:00 PM–2:00 PM & 7:00 PM–10:00 PM; closed Sun & Mon";
    
      } else if (link.id === "chezfernand") {
      title.textContent = "Chez Fernand (Rue Christine)";
      location.textContent = "Location: 9 Rue Christine, 75006 Paris";
      near.textContent = "Near: Saint-Germain-des-Prés";
      description.textContent = "A traditional French bistrot in the Left Bank with vaulted brick ceilings and a huge wine list, serving homemade terroir dishes in a relaxed, friendly setting.";
      reservation.textContent = "Reservation required? YES (recommended)";
      hours.textContent = "Opening Hours: Monday to Sunday 12:00 PM–2:30 PM & 7:00 PM–11:00 PM";

      } else if (link.id === "lamaisonrose") {
      title.textContent = "La Maison Rose";
      location.textContent = "Location: 2 Rue de l’Abreuvoir, 75018 Paris";
      near.textContent = "Near: Montmartre (Sacré‑Cœur & Place du Tertre)";
      description.textContent = "An iconic pastel‑pink café and restaurant since 1908, set on a charming cobbled corner. Once a hub for Picasso and Utrillo, it serves a short, seasonal menu blending French & Italian comfort food in a cozy, art‑filled space.";
      reservation.textContent = "Reservation required? YES (highly recommended)";
      hours.textContent = "Opening Hours: Wed–Fri 12:00 PM–10:00 PM; Sat–Sun 11:30 AM–10:00 PM; closed Mon–Tue";
  
      }
      
      else if (link.id === "eiffeltower") {
        title.textContent = "Eiffel Tower";
        location.textContent = "Location: Champ de Mars, 5 Av. Anatole France, 75007 Paris";
        description.textContent = "Paris’ most iconic landmark, built in 1889 for the World’s Fair. Designed by Gustave Eiffel, it's a symbol of architectural innovation and offers panoramic views from its observation decks.";
        hours.textContent = "Opening Hours: Daily 9:00 AM–12:45 AM (last elevator 11:45 PM)";
        accessAndPrice.textContent = "Access: YES – Elevator or stairs available. Tickets start at ~€11.80 (stairs to 2nd floor) to ~€29.40 (elevator to summit). Advance booking strongly recommended.";
        tips.textContent = "TIP: Go early or late to avoid long lines. The summit offers the best views, but the 2nd floor is less crowded and still stunning.";
      } else if (link.id === "notredame") {
      title.textContent = "Notre-Dame Cathedral";
      location.textContent = "Location: 6 Parvis Notre-Dame – Pl. Jean-Paul II, 75004 Paris";
      description.textContent = "A masterpiece of Gothic architecture begun in 1163. Known for its flying buttresses, rose windows, and role in Victor Hugo’s 'The Hunchback of Notre-Dame'.";
      hours.textContent = "Opening Hours: Expected reopening in December 2024";
      accessAndPrice.textContent = "Access: NOT YET – Exterior viewing and nearby exhibits only. Entry to interior will be free when reopened; tower access may have a fee (~€10–€15).";
      tips.textContent = "TIP: Visit the nearby Archaeological Crypt and Sainte-Chapelle to explore medieval Paris.";
    } else if (link.id === "saintechapelle") {
      title.textContent = "Sainte-Chapelle";
      location.textContent = "Location: 10 Bd du Palais, 75001 Paris (within the Palais de Justice)";
      description.textContent = "Built in 1248, this royal chapel is renowned for its 15-meter-high stained glass windows depicting over 1,000 biblical scenes. A Gothic jewel.";
      hours.textContent = "Opening Hours: Daily 9:00 AM–7:00 PM (last entry 40 min before closing)";
      accessAndPrice.textContent = "Access: YES – Tickets ~€13. Entry is free for EU residents under 26. Security check required.";
      tips.textContent = "TIP: Visit in the morning for the best natural light. Combine with a Conciergerie visit nearby.";
    } else if (link.id === "arcdetriomphe") {
      title.textContent = "Arc de Triomphe";
      location.textContent = "Location: Place Charles de Gaulle, 75008 Paris";
      description.textContent = "Commissioned by Napoleon in 1806, this monumental arch honors those who fought for France. It offers a 360° view from the top over the Champs-Élysées and beyond.";
      hours.textContent = "Opening Hours: Daily 10:00 AM–11:00 PM";
      accessAndPrice.textContent = "Access: YES – Tickets ~€13. Free for EU residents under 26. Elevator available for those with reduced mobility.";
      tips.textContent = "TIP: Use the underground passage to avoid traffic. Great at sunset or when the Eiffel Tower sparkles.";
    } else if (link.id === "palaisgarnier") {
      title.textContent = "Palais Garnier";
      location.textContent = "Location: Pl. de l'Opéra, 75009 Paris";
      description.textContent = "A 19th-century opera house blending baroque, classical, and Renaissance styles. The inspiration for 'The Phantom of the Opera', it features a grand marble staircase and Chagall ceiling.";
      hours.textContent = "Opening Hours: Daily 10:00 AM–5:00 PM (closed during performances)";
      accessAndPrice.textContent = "Access: YES – Self-guided tour ~€15; guided tours ~€20+. Entry is free for under 12s and EU residents under 26.";
      tips.textContent = "TIP: If you're into performance, check for tickets — even last-minute seats can be magical.";
    } else if (link.id === "luxembourgpalace") {
      title.textContent = "Luxembourg Palace";
      location.textContent = "Location: 15 Rue de Vaugirard, 75006 Paris (inside Luxembourg Gardens)";
      description.textContent = "Built in 1612 for Marie de’ Medici, this palace now houses the French Senate. Its picturesque gardens are a favorite local escape.";
      hours.textContent = "Opening Hours: Gardens open daily from dawn to dusk (varies seasonally)";
      accessAndPrice.textContent = "Access: Palace – NO (not open to the public); Gardens – YES, free entry.";
      tips.textContent = "TIP: Ideal spot for reading, people-watching, or sailing toy boats. Grab a snack from the garden kiosks.";
}


  

  });

  link.addEventListener("mouseleave", () => {
    activeImage.style.opacity = 1;
    overlay.style.opacity = 0;
  });









