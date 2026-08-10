console.log("Welcome to DOM Basics");

const title = document.querySelector("#title");

const subtitle = document.querySelector(".subtitle");

console.log(title);
console.log(subtitle);

const cards = document.querySelectorAll(".card");
console.log(cards.length);

for (const card of cards) {
  console.log(card);
}

const paragraphs = document.querySelectorAll("p");
console.log(paragraphs.length);

const subTitleContent = subtitle.textContent;
console.log(subTitleContent);

subtitle.textContent = "Best food in the whole of Nigeria";

const titleContent = title.innerHTML;
console.log(titleContent);

const about = document.querySelector("#about");
console.log(about.innerHTML);
console.log(about.textContent);

about.innerHTML = "<p>Hello World</p>";

// title.style.color = "#FF3256";
// title.style.fontSize = "2rem";
// title.style.backgroundColor = "#0A0E27";

function addHighlight() {
  title.classList.add("highlighted");
}

function removeHighlight() {
  title.classList.remove("highlighted");
}

function toggleHighlight() {
  title.classList.toggle("highlighted");
}

const titleKitchen = document.querySelector("#title-kitchen");
console.log(titleKitchen);

function toggleKitchenHighlight() {
  titleKitchen.classList.toggle("highlighted");
}


document.querySelector(".remove-subtitle-btn").addEventListener("click", function (){
  const subtitle = document.querySelector(".subtitle");
  subtitle.remove();
})

document.querySelector("#rem-item-1-btn").addEventListener("click", function (){
  const list = document.querySelector("#list");
  const item = document.querySelector("#item-1");

  list.removeChild(item);
})