const button = document.getElementById("button");
const audioElement = document.getElementById("audio");

// Dis/Enable button
function toggleButton() {
  button.disabled = !button.disabled;
}

// Pass joke
function tellMe(joke) {
  VoiceRSS.speech({
    key: "4cb5e8e36222419a9462f15404c6aea8",
    src: joke,
    hl: "en-us",
    v: "Linda",
    r: 0,
    c: "mp3",
    f: "44khz_16bit_stereo",
    ssml: false,
  });
}

// Get jokes;
async function getJokes() {
  const apiUrl = "https://v2.jokeapi.dev/joke/Programming?type=single";

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    tellMe(data.joke);
    toggleButton();
  } catch (err) {
    console.log("error", err);
  }
}

// Event Listeners
button.addEventListener("click", getJokes);

audioElement.addEventListener("ended", toggleButton);
