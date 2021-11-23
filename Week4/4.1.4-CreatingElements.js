// create a new unordered list (ul) element
const newUnorderedList = document.createElement("ul");


// remove the paragraph element in the nav-bar
let removeChild = document.querySelector(".nav-bar > p");
removeChild.remove();

// add your new ul element to the nav-bar
document.querySelector(".nav-bar").appendChild(newUnorderedList);

// create two new list item (li) elements, and add some text to them
const newListItems1 = document.createElement("li");
const newListItems2 = document.createElement("li");

newListItems1.textContent = "This is fun";
newListItems2.textContent = "This is not fun";

// add the li elements to the ul in the nav-bar
document.querySelector(".nav-bar > ul").appendChild(newListItems1);
document.querySelector(".nav-bar > ul").appendChild(newListItems2);