import cola from "./cola.avif";
import food from "./food.avif";

export function loadContent () {
    const contentDiv = document.getElementById("content");
    
    
    const introSection = document.createElement("section");
    introSection.className = "intro-section";
    introSection.innerHTML = `
        <h1>Welcome to Our Restaurant</h1>
        <p>Experience the finest dining with a menu crafted to delight your senses. Our chefs use only the freshest ingredients to create mouth-watering dishes that will leave you craving for more.</p>
    `;
    
   
    const featuredSection = document.createElement("section");
    featuredSection.className = "featured-section";
    featuredSection.innerHTML = `
        <h2>Featured Dishes</h2>
        <div class="featured-container">
            <div class="featured-item">
                <img src="${cola}" alt="Featured Dish 1">
                <p>Delicious Cola-Based Dish</p>
            </div>
            <div class="featured-item">
                <img src="${food}" alt="Featured Dish 2">
                <p>yummy Food Item</p>
            </div>
        </div>
    `;
    
    
    const bookingSection = document.createElement("section");
    bookingSection.className = "booking-section";
    bookingSection.innerHTML = `
        <h2>Book Your Table Now</h2>
        <p>Don't miss out on an unforgettable dining experience. Reserve your table today and indulge in a culinary journey like no other.</p>
        <button class="booking-button">Reserve Now</button>
    `;

    contentDiv.appendChild(introSection);
    contentDiv.appendChild(featuredSection);
    contentDiv.appendChild(bookingSection);
}
