import cola from "./cola.avif";
import food from "./food.avif";
export function loadContent () {
    const contentDiv= document.getElementById("content");
   
    const image = document.createElement("img");
    image.src= cola;
   
    const image2= document.createElement("img");
    image2.src= food;
   
    const textContainer= document.createElement("div");
    textContainer.id= "textContainer";

    contentDiv.appendChild(image);
    contentDiv.appendChild(textContainer);
    contentDiv.appendChild(image2);
}