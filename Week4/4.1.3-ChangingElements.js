// print the outer HTML of the navigation bar
const navBar = document.querySelector(".nav-bar");
console.log("Nav-Bar outer HTML...", navBar.outerHTML);
// print the inner HTML of the navigation bar
const navbar = document.querySelector(".nav-bar").innerHTML;
console.log("Nav-Bar inner HTML...", navBar.innerHTML); 
// print the text content of the #class-schedule-list element
document.querySelector("#class-schedule-list").textContent;
// select the classList for the first class-week, then add the class "week-1"
const firstClassWeek = document.querySelector(".class-week")

firstClassWeek.classList.add("week-1");
console.log("first Class Week outer HTML", firstClassWeek.outerHTML);

// select the img element and add a src attribute
const imageElement = document.querySelector("img");

imageElement.src = "https://i2.pickpik.com/photos/774/556/1024/odin-male-australian-shepherd-dog-thumb.jpg";
console.log("Image element outer HTML...", imageElement.outerHTML);

// change the font color of the h1 element
const headH1 = document.querySelector("h1");
headH1.style.color = "green";