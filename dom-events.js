const latestBtn = document.querySelector("#latest-btn");

function showLatestAlert() {
  alert("Latest Button is clicked");
}

latestBtn.addEventListener("click", showLatestAlert);

const addBtn = document.querySelector("#add-btn");
const subBtn = document.querySelector("#sub-btn");

function incrementCounter() {
  const counter = document.querySelector("#count");
  const currentValue = counter.textContent;
  let intValue = parseInt(currentValue);
  intValue += 20;
  counter.textContent = intValue;
}

function subtractCounter(event) {
  console.log(event);
  const counter = document.querySelector("#count");
  let currentValue = counter.textContent;
  currentValue--;
  counter.textContent = currentValue;
}

addBtn.addEventListener("click", incrementCounter);
subBtn.addEventListener("click", subtractCounter);

const nameInput = document.querySelector("#name-input");
const greetingText = document.querySelector("#greeting");

nameInput.addEventListener("input", function (event) {
  const name = event.target.value;
  greetingText.textContent = `Welcome, ${name}`;
});

const form = document.querySelector("#reserve-form");
const confirmation = document.querySelector("#confirmation");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.querySelector("#guest-name").value;
  const tableInput = document.querySelector("#table-num");
  const table = tableInput.value;

  if (name === "" || table === "") {
    confirmation.style.color = "#ff0000";
    confirmation.textContent = "Please fill in all fields.";
    return;
  }

  confirmation.style.color = "#00ff00";
  confirmation.textContent = `Reservation confirmed for ${name} at Table ${table}!`;
});
