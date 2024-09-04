export function loadMenu() {
    const contentDiv = document.getElementById("content");
    contentDiv.innerHTML = '';    

    const menuDiv = document.createElement("div");
    menuDiv.classList.add("tab-content");

    const menuTitle = document.createElement("h2");
    menuTitle.textContent = "Our Menu";

    const menuItem1 = document.createElement("p");
    menuItem1.textContent = "Pizza - $12.99";

    const menuItem2 = document.createElement("p");
    menuItem2.textContent = "Burger - $9.99";

    menuDiv.appendChild(menuTitle);
    menuDiv.appendChild(menuItem1);
    menuDiv.appendChild(menuItem2);

    contentDiv.appendChild(menuDiv);
}
