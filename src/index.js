import { loadContent } from "./contentLoader";
import './styles.css';
import { loadMenu } from "./menu";
import { loadContact } from "./contact";
import { loadReviews } from "./reviews";

document.addEventListener("DOMContentLoaded", () => {
    loadContent(); 

    const homeTab = document.getElementById("home-tab");
    const menuTab = document.getElementById("menu-tab");
    const contactTab = document.getElementById("contact-tab");
    const reviewsTab = document.getElementById("reviews-tab"); 
    const navButtons = [homeTab, menuTab, contactTab, reviewsTab]; // Array of all nav buttons

    const setActiveTab = (activeTab) => {
        navButtons.forEach(button => {
            button.classList.remove("active");
        });
        activeTab.classList.add("active");
    };

    homeTab.addEventListener("click", () => {
        setActiveTab(homeTab);
        loadContent();
    });

    menuTab.addEventListener("click", () => {
        setActiveTab(menuTab);
        loadMenu();
    });

    contactTab.addEventListener("click", () => {
        setActiveTab(contactTab);
        loadContact();
    });

    reviewsTab.addEventListener("click", () => {
        setActiveTab(reviewsTab);
        loadReviews();
    });
});
