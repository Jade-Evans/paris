
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
  { id: "louvre", img: "imgs/louvre.jpg"},
  { id: "dorsay", img: "imgs/dorsay.jpg"},
  { id: "pompidou", img: "imgs/pompidou.jpg"},
  { id: "orangerie", img: "imgs/orangerie.jpg"},
  { id: "moderne", img: "imgs/moderne.jpg"}, 
  { id: "catacombs", img: "imgs/catacombs.jpg"},
  { id: "montmartre", img: "imgs/montmartre.jpg" },
  { id: "plantee", img: "imgs/promenade.jpg" },
  { id: "champs", img: "imgs/champs.jpg" },
  { id: "plantes", img: "imgs/jardindesplantes.jpg" },
  { id: "rue-cremieux", img: "imgs/ruecremieux.jpg" },
  { id: "latin", img: "imgs/latinquartier.jpg" },
  { id: "seine", img: "imgs/seine.jpg" },
  { id: "jazzbars", img: "imgs/jazz.jpg"},
  { id: "cabaretshows", img: "imgs/MoulinRouge.jpg"},
  { id: "nightdining", img: "imgs/dining.jpg"},
  { id: "iconicnights", img: "imgs/eiffelnight.jpg"}
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
        
    } else if(link.id === "chezfernand") {
    title.textContent = "Chez Fernand (Rue Christine)";
    location.textContent = "Location: 9 Rue Christine, 75006 Paris";
    near.textContent = "Near: Saint-Germain-des-Prés";
    description.textContent = "A traditional French bistrot in the Left Bank with vaulted brick ceilings and a huge wine list, serving homemade terroir dishes in a relaxed, friendly setting.";
    reservation.textContent = "Reservation required? YES (recommended)";
    hours.textContent = "Opening Hours: Monday to Sunday 12:00 PM–2:30 PM & 7:00 PM–11:00 PM";

    } else if (link.id === "leprocope") {
    title.textContent = "Le Procope – Paris’s Oldest Café";
    location.textContent = "Location: 13 Rue de l'Ancienne Comédie, 75006 Paris";
    description.textContent = "Historic café dating back to 1686, serving classic French dishes. A spot once frequented by Voltaire and Rousseau.";
    reservation.textContent = "Reservation required? YES";
    hours.textContent = "Opening Hours: 11:00 AM – 12:00 AM (Every day)";
    price.textContent = "Price Range: €25 - €50 per person";

    } else if (link.id === "lamaisonrose") {
    title.textContent = "La Maison Rose";
    location.textContent = "Location: 2 Rue de l’Abreuvoir, 75018 Paris";
    near.textContent = "Near: Montmartre (Sacré‑Cœur & Place du Tertre)";
    description.textContent = "An iconic pastel‑pink café and restaurant since 1908, set on a charming cobbled corner. Once a hub for Picasso and Utrillo, it serves a short, seasonal menu blending French & Italian comfort food in a cozy, art‑filled space.";
    reservation.textContent = "Reservation required? YES (highly recommended)";
    hours.textContent = "Opening Hours: Wed–Fri 12:00 PM–10:00 PM; Sat–Sun 11:30 AM–10:00 PM; closed Mon–Tue";

    } else if (link.id === "eiffeltower") {
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
    
    } else if (link.id === "louvre") {
    title.textContent = "The Louvre";
    location.textContent = "Location: Rue de Rivoli, 75001 Paris";
    description.textContent = "The world’s largest art museum, home to masterpieces like the Mona Lisa, Venus de Milo, and Winged Victory of Samothrace. Former royal palace turned global cultural icon.";
    hours.textContent = "Opening Hours: Daily 9:00 AM–6:00 PM (closed Tuesdays)";
    accessAndPrice.textContent = "Access: YES – Tickets ~€17 online. Free for EU residents under 26. Security screening required.";
    tips.textContent = "TIP: Use the Porte des Lions or Carrousel entrance to avoid long lines at the Pyramid.";
          
    } else if (link.id === "dorsay") {
    title.textContent = "Musée d'Orsay";
    location.textContent = "Location: 1 Rue de la Légion d'Honneur, 75007 Paris";
    description.textContent = "Housed in a grand Beaux-Arts railway station, this museum showcases the world's finest Impressionist and Post-Impressionist artworks by Monet, Van Gogh, Degas, and more.";
    hours.textContent = "Opening Hours: Tue–Sun 9:30 AM–6:00 PM (late opening Thursday until 9:45 PM; closed Mondays)";
    accessAndPrice.textContent = "Access: YES – Tickets ~€16. Free for EU residents under 26. Audio guides available.";
    tips.textContent = "TIP: Start on the upper floor to see the Impressionists first before it gets crowded.";
  
    } else if (link.id === "pompidou") {
    title.textContent = "The Pompidou Centre";
    location.textContent = "Location: Place Georges-Pompidou, 75004 Paris";
    description.textContent = "A bold architectural icon with exposed pipes and industrial design, housing the National Museum of Modern Art and a vast library. Home to works by Picasso, Duchamp, Kandinsky, and more.";
    hours.textContent = "Opening Hours: Wed–Mon 11:00 AM–9:00 PM (closed Tuesdays)";
    accessAndPrice.textContent = "Access: YES – Tickets ~€15. Rooftop access included. Free for EU residents under 26.";
    tips.textContent = "TIP: Visit the rooftop for panoramic views of Paris—great at sunset.";
  
    } else if (link.id === "orangerie") {
    title.textContent = "Musée de l'Orangerie";
    location.textContent = "Location: Jardin des Tuileries, Place de la Concorde, 75001 Paris";
    description.textContent = "Famous for Monet's panoramic Water Lilies series displayed in oval rooms, this museum also features the Walter-Guillaume collection: Renoir, Matisse, Modigliani, and more.";
    hours.textContent = "Opening Hours: Wed–Mon 9:00 AM–6:00 PM (closed Tuesdays)";
    accessAndPrice.textContent = "Access: YES – Tickets ~€12.50. Free for EU residents under 26.";
    tips.textContent = "TIP: Go early to enjoy the Water Lilies in quiet. Combine with a stroll through the Tuileries Garden.";
  
    } else if (link.id === "moderne") {
    title.textContent = "Musée d’Art Moderne de Paris";
    location.textContent = "Location: 11 Avenue du Président Wilson, 75116 Paris";
    description.textContent = "Focused on 20th and 21st-century art, this museum highlights movements like Cubism, Fauvism, and abstraction, with works by Picasso, Delaunay, and contemporary artists.";
    hours.textContent = "Opening Hours: Tue–Sun 10:00 AM–6:00 PM (closed Mondays)";
    accessAndPrice.textContent = "Access: YES – Permanent collections free. Temporary exhibits: €10–14.";
    tips.textContent = "TIP: Entry to permanent galleries is free—worth visiting even briefly.";
  
    } else if (link.id === "catacombs") {
    title.textContent = "Catacombs of Paris";
    location.textContent = "Location: 1 Avenue du Colonel Henri Rol-Tanguy, 75014 Paris";
    description.textContent = "An eerie maze of tunnels holding the bones of over six million Parisians, transferred in the 18th century from overcrowded cemeteries. A haunting historic journey beneath the city.";
    hours.textContent = "Opening Hours: Tue–Sun 9:45 AM–8:30 PM (closed Mondays)";
    accessAndPrice.textContent = "Access: YES – Tickets ~€29 online. Limited daily entries. Not wheelchair accessible.";
    tips.textContent = "TIP: Book online early; slots fill quickly. Wear sturdy shoes and bring a jacket—it’s chilly underground.";
    
    } else if (link.id === "montmartre") {
    title.textContent = "Montmartre";
    location.textContent = "Location: Paris 18th arrondissement";
    description.textContent = "Winding cobbled streets, historic artist studios, ivy-covered stairways and panoramic views. Montmartre remains the bohemian heart of Paris.";
    lookout.textContent = "Look out for: Place du Tertre’s artists and the hidden vineyards of Montmartre.";
    
    } else if (link.id === "plantee") {
    title.textContent = "Promenade Plantée";
    location.textContent = "Location: Coulée Verte René-Dumont, 12th arrondissement";
    description.textContent = "A lush elevated walkway built atop an old railway viaduct. Trees, flowers, and quiet benches hover above the city's bustle — Paris’s version of the High Line.";
    lookout.textContent = "Look out for: Sculptural arches and garden views from above the streets.";

    } else if (link.id === "champs") {
    title.textContent = "Champs-Élysées";
    location.textContent = "Location: 8th arrondissement";
    description.textContent = "A grand Parisian boulevard for promenading and people-watching, lined with theatres, cafés, and flagship stores. Iconic and cinematic.";
    lookout.textContent = "Look out for: The Arc de Triomphe and Ladurée for a sweet stop.";
    
    } else if (link.id === "plantes") {
    title.textContent = "Jardin des Plantes";
    location.textContent = "Location: 5th arrondissement";
    description.textContent = "Botanical gardens, a small zoo, and greenhouses nestled in a historic scientific setting. Ideal for peaceful wandering among rare plants.";
    lookout.textContent = "Look out for: The rose garden and Art Deco greenhouses.";
   
    } else if (link.id === "rue-cremieux") {
    title.textContent = "Rue Crémieux";
    location.textContent = "Location: 12th arrondissement";
    description.textContent = "A short, colorful pedestrian street famed for its pastel facades and charming village feel — Instagram heaven, if quiet when crowds subside.";
    lookout.textContent = "Look out for: Painted shutters, cat murals, and residents asking for quiet!";
    } else if (link.id === "latin") {
    title.textContent = "Latin Quarter";
    location.textContent = "Location: 5th & 6th arrondissements";
    description.textContent = "A maze of medieval streets packed with bookshops, student cafés, and Roman ruins. Historic, intellectual, and endlessly atmospheric.";
    lookout.textContent = "Look out for: Shakespeare and Company bookshop & the Panthéon.";
    
    } else if (link.id === "seine") {
    title.textContent = "Seine River Walk";
    location.textContent = "Location: Central Paris — both banks";
    description.textContent = "From cobblestone quays to bouquiniste stalls, a walk along the Seine blends timeless beauty, bridges, and poetic calm — day or night.";
    lookout.textContent = "Look out for: Booksellers, sunset from Pont Alexandre III, and Notre-Dame glimpses.";
    } else if (link.id === "paradislatin") {
    title.textContent = "Paradis Latin Dinner Show";
    location.textContent = "Location: 28 Rue du Cardinal Lemoine, 75005 Paris";
    description.textContent = "Parisian cabaret offering an elegant dinner and dazzling live show in a stunning venue.";
    reservation.textContent = "Reservation required? YES";
    hours.textContent = "Opening Hours: Shows at 8:30 PM, dinner starts at 7:00 PM.";
    price.textContent = "Price Range: €85 - €160 per person (depending on dinner options)";
    } else if (link.id === "moulinrouge") {
    title.textContent = "Moulin Rouge";
    location.textContent = "Location: 82 Boulevard de Clichy, 75018 Paris";
    description.textContent = "World-famous cabaret known for its lavish performances, extravagant costumes, and unforgettable atmosphere.";
    reservation.textContent = "Reservation required? YES";
    hours.textContent = "Opening Hours: Shows at 9:00 PM and 11:00 PM.";
    price.textContent = "Price Range: €87 - €250 per person (depending on package)";
    } else if (link.id === "ducdeslombards") {
    title.textContent = "Duc des Lombards – Renowned Jazz Institution";
    location.textContent = "Location: 42 Rue des Lombards, 75001 Paris";
    description.textContent = "A legendary jazz club offering intimate performances from world-class artists.";
    reservation.textContent = "Reservation required? YES";
    hours.textContent = "Opening Hours: 7:30 PM – 2:00 AM (Every day)";
    price.textContent = "Price Range: €20 - €50 per ticket (depending on the artist)";
    } else if (link.id === "sunsetsunside") {
    title.textContent = "Sunset Sunside – Twin Jazz Venues in the Heart of Paris";
    location.textContent = "Location: 60 Rue des Lombards, 75001 Paris";
    description.textContent = "An iconic jazz bar offering nightly performances with a cozy atmosphere.";
    reservation.textContent = "Reservation required? YES";
    hours.textContent = "Opening Hours: 7:00 PM – 1:00 AM (Every day)";
    price.textContent = "Price Range: €15 - €40 per ticket";
    } else if (link.id === "caveaudelahuchette") {
    title.textContent = "Le Caveau de la Huchette – Historic Jazz Cellar";
    location.textContent = "Location: 5 Rue de la Huchette, 75005 Paris";
    description.textContent = "A historic jazz venue with a 1940s swing vibe. Great for both music lovers and dancers.";
    reservation.textContent = "Reservation required? YES";
    hours.textContent = "Opening Hours: 9:00 PM – 2:00 AM (Every day)";
    price.textContent = "Price Range: €10 - €30 per ticket";
    } else if (link.id === "balblomet") {
    title.textContent = "Le Bal Blomet – Vintage Parisian Vibes";
    location.textContent = "Location: 33 Rue Blomet, 75015 Paris";
    description.textContent = "Paris’s oldest jazz club, recently revived, offering a blend of classic and contemporary jazz.";
    reservation.textContent = "Reservation required? YES";
    hours.textContent = "Opening Hours: 7:30 PM – 1:00 AM (Every day)";
    price.textContent = "Price Range: €25 - €50 per ticket";
    }else if (link.id === "lebaronrouge") {
    title.textContent = "Le Baron Rouge – Iconic Wine Bar";
    location.textContent = "Location: 1 Rue Théophile Roussel, 75012 Paris";
    description.textContent = "A charming wine bar with a selection of natural wines and a rustic Parisian vibe. Often packed with locals and visitors alike, it's a cozy spot for an evening glass of wine.";
    reservation.textContent = "Reservation required? NO";
    hours.textContent = "Opening Hours: 5:00 PM – 2:00 AM (Every day)";
    price.textContent = "Price Range: €10 - €30 per glass of wine";
    } else if (link.id === "leverrevole") {
    title.textContent = "Le Verre Volé – Wine and Small Plates";
    location.textContent = "Location: 67 Rue de Lancry, 75010 Paris";
    description.textContent = "A popular wine bar with an extensive selection of wines paired with delicious small plates of French food. Great for a casual evening.";
    reservation.textContent = "Reservation required? YES";
    hours.textContent = "Opening Hours: 6:00 PM – 2:00 AM (Every day)";
    price.textContent = "Price Range: €12 - €40 per person";
    } else if (link.id === "leperchoir") {
    title.textContent = "Le Perchoir – Rooftop Bar with Views";
    location.textContent = "Location: 14 Rue Crespin du Gast, 75011 Paris";
    description.textContent = "An iconic rooftop bar offering spectacular views of Paris, perfect for sipping cocktails or wine and soaking in the vibrant atmosphere.";
    reservation.textContent = "Reservation required? YES";
    hours.textContent = "Opening Hours: 6:00 PM – 2:00 AM (Every day)";
    price.textContent = "Price Range: €15 - €30 per drink";
    } else if (link.id === "terrasshotel") {
    title.textContent = "Terrass' Hotel Rooftop";
    location.textContent = "Location: 12-14 Rue Joseph de Maistre, 75018 Paris";
    description.textContent = "A chic rooftop bar offering panoramic views of Montmartre and the Eiffel Tower, ideal for a sunset drink with a stunning backdrop.";
    reservation.textContent = "Reservation required? YES";
    hours.textContent = "Opening Hours: 6:00 PM – 1:00 AM (Every day)";
    price.textContent = "Price Range: €12 - €35 per drink";
    } else if (link.id === "shakespearecompany") {
    title.textContent = "Shakespeare and Company – Literary Haven";
    location.textContent = "Location: 37 Rue de la Bûcherie, 75005 Paris";
    description.textContent = "An iconic Parisian bookstore that occasionally hosts evening readings or events, perfect for book lovers seeking a literary night out.";
    reservation.textContent = "Reservation required? NO";
    hours.textContent = "Opening Hours: 10:00 AM – 11:00 PM (Every day)";
    price.textContent = "Price Range: Free entry, events may vary";
    }else if (link.id === "nighteiffel") {
    title.textContent = "Eiffel Tower Light Show";
    location.textContent = "Location: Champ de Mars, 5 Av. Anatole France, 75007 Paris";
    description.textContent = "Every evening after sunset, the Eiffel Tower sparkles for 5 minutes at the start of each hour — a quintessential Paris moment.";
    reservation.textContent = "Reservation required? NO (to view from outside)";
    hours.textContent = "Lighting from dusk to 1:00 AM";
    price.textContent = "Price: Free to view light show (Elevator access to tower: from €11.80)";

    } else if (link.id === "seinecruise") {
      title.textContent = "Seine River Cruise";
      location.textContent = "Location: Boarding from Port de la Bourdonnais or Port de Solférino, various operators";
      description.textContent = "Experience the magic of Paris from the water — enjoy dinner, live music, or a simple sightseeing cruise along the Seine.";
      reservation.textContent = "Reservation required? YES";
      hours.textContent = "Cruises typically depart between 6:00 PM and 10:30 PM";
      price.textContent = "Price Range: €15 – €100+ depending on cruise type";

    } else if (link.id === "seinebanks") {
      title.textContent = "Walk Along the Seine";
      location.textContent = "Location: From Île de la Cité to Eiffel Tower — Right & Left Banks";
      description.textContent = "Stroll along the UNESCO-listed riverbanks where locals picnic, musicians play, and bridges glow at night — one of the most romantic walks in Paris.";
      reservation.textContent = "Reservation required? NO";
      hours.textContent = "Open access 24/7";
      price.textContent = "Price: Free";

    } else if (link.id === "montmartre") {
      title.textContent = "Montmartre at Night";
      location.textContent = "Location: 18th arrondissement — around Place du Tertre and Sacré-Cœur";
      description.textContent = "Wander cobbled lanes past glowing bistros, artists sketching in the square, and catch panoramic views of the city lit up below.";
      reservation.textContent = "Reservation required? NO";
      hours.textContent = "Best enjoyed at sunset through late evening";
      price.textContent = "Price: Free";

    } else if (link.id === "ilecitestroll") {
      title.textContent = "Île de la Cité & Île Saint-Louis Stroll";
      location.textContent = "Location: Central Paris — accessible via Pont Neuf and Pont Saint-Louis";
      description.textContent = "These two islands offer some of Paris’s oldest streets, quiet courtyards, Notre-Dame views, and peaceful nighttime riverside ambiance.";
      reservation.textContent = "Reservation required? NO";
      hours.textContent = "Anytime, ideal just after dusk";
      price.textContent = "Price: Free";
    }

  });

  link.addEventListener("mouseleave", () => {
    clearTimeout(fadeTimer);
    activeImage.style.opacity = 1;
    overlay.style.opacity = 0;
  });
});

//JS LOGIC FOR ADDING CHECKBOXES TO EACH PLACE//

document.querySelectorAll(".category-item").forEach((category)=> {
  const submenu = category.querySelector(".submenu"); //assign a variable so can check if it exists
  if(submenu){//execute this code if there is a submenu within the "category"
    submenu.querySelectorAll("li").forEach((item)=> {//search through each list item
    const link = item.querySelector("a");//assign variable "link" to the attribute
    if(!link) return;
    const checkbox = document.createElement("input");//create the input element
    checkbox.type = "checkbox"; //assign the type of input aka checkbox
    checkbox.classList.add("place-checkbox"); //this creates and assigns a new class "place-checkbox" which will be assigned to all items
    checkbox.dataset.placeId = link.id; //this grabs the existing id of each specific link and relates it to the placeId to be used. 
    item.appendChild(checkbox); //add the checkbox to the end of item
  });//closes all the actions happening if there is a submenu. 
  }else{

    const topicHeading = category.querySelector("h3"); //assigns a variable to the h3s IF no submenu is present in category items
    if(!topicHeading) return;
    if(topicHeading){
    const checkbox = document.createElement("input");//create the input element
    checkbox.type = "checkbox"; //assign the type of input aka checkbox
    checkbox.classList.add("place-checkbox"); //this creates and assigns a new class "place-checkbox" which will be assigned to all items
    checkbox.dataset.placeId = category.id;
    category.appendChild(checkbox); //this grabs the existing id of each specific link and relates it to the placeId to be used. 
    };//closes all the actions happening if there is a submenu. 
  }//closes the actions in the whole if...else statement 
});//closes the actions happening for all items in the .category-items query selector







