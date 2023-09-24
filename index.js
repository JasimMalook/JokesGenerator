const btnEl = document.getElementById("btn");
const jokeEl = document.getElementById("joke");

const apiKey = "spNNWd6Vww95wI7BEenodA==dAriiYt5x95CG1lZ";

const options = {
  method: "GET",
  headers: {
    "X-Api-Key": apiKey,
  },
};

const ApiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=1";

async function getJoke() {
  try {
    jokeEl.innerText = "Updating...";
    
    btnEl.disabled = true;
    btnEl.innerText = "Loading...";

    const response = await fetch(ApiURL, options);
    const data = await response.json();

    jokeEl.innerText = data[0].joke;

    btnEl.disabled = false;
    btnEl.innerText = "Tell Me A Joke";
  } catch (error) {
    jokeEl.innerText = "(An error happened, try again later).";

    btnEl.disabled = false;
    btnEl.innerText = "Tell Me A Joke";
    console.log(error);
  }
}

btnEl.addEventListener("click", getJoke);
