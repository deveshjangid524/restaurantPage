export function loadReviews() {
    const contentDiv = document.getElementById("content");
    contentDiv.innerHTML = ''; 

    const reviewsDiv = document.createElement("div");
    reviewsDiv.classList.add("tab-content");

    const reviewsTitle = document.createElement("h2");
    reviewsTitle.textContent = "Customer Reviews";

    const review1 = document.createElement("p");
    review1.textContent = "Best food ever! - ugly guy";

    const review2 = document.createElement("p");
    review2.textContent = "Amazing service! -beautiful guy";

    reviewsDiv.appendChild(reviewsTitle);
    reviewsDiv.appendChild(review1);
    reviewsDiv.appendChild(review2);

    contentDiv.appendChild(reviewsDiv);
}
