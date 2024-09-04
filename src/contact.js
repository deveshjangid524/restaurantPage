export function loadContact() {
    const contentDiv = document.getElementById("content");
    contentDiv.innerHTML = ''; 

    const contactDiv = document.createElement("div");
    contactDiv.classList.add("tab-content");

    const contactTitle = document.createElement("h2");
    contactTitle.textContent = "Contact Us";

    const contactInfo = document.createElement("p");
    contactInfo.textContent = "Phone: 123-456-7890";

    const contactEmail = document.createElement("p");
    contactEmail.textContent = "Email: contact@restaurant.com";

    contactDiv.appendChild(contactTitle);
    contactDiv.appendChild(contactInfo);
    contactDiv.appendChild(contactEmail);

    contentDiv.appendChild(contactDiv);
}
