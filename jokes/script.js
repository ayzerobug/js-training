const jokeBtn = document.querySelector("#joke-btn");
const setupParagraph = document.querySelector("#setup");
const punchlineParagraph = document.querySelector("#punchline");
const preloader = document.querySelector(".preloader");
const error = document.querySelector("#error");

/// .then .catch approach
// const generateJoke = () => {
//   preloader.classList.remove("hidden");
//   fetch("https://official-joke-api.appspot.com/random_joke")
//     .then((response) => response.json()) // Parse
//     .then((data) => { // Use the data
//       setupParagraph.textContent = data.setup;
//       punchlineParagraph.textContent = data.punchline;
//       preloader.classList.add("hidden");
//     })
//     .catch((err) => {
//       preloader.classList.add("hidden");
//       error.classList.remove("hidden");

//       error.textContent =
//         "Couldn't fetch jokes right now. Please try again later";
//     });
// };

/// async - await approach
const generateJoke = async () => {
  preloader.classList.remove("hidden");

  try {
    const response = await fetch(
      "https://official-joke-api.appspot.com/random_joke",
    );
    const data = await response.json();
    
    setupParagraph.textContent = data.setup;
    punchlineParagraph.textContent = data.punchline;
    preloader.classList.add("hidden");
  } catch (error) {
    console.log(error);
    preloader.classList.add("hidden");
    error.classList.remove("hidden");

    error.textContent =
      "Couldn't fetch jokes right now. Please try again later";
  }
};

jokeBtn.addEventListener("click", generateJoke);

window.addEventListener("load", generateJoke);
