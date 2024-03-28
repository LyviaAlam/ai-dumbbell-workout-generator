// Quotes on Page Reload
function quotesGenerator(response) {
  let apiKey = "143af7fd5b08cab06a8bf5bo4f3btde9";
  let prompt = "Create a short 1 sentence motivational quote on fitness.";
  let context =
    "You are a master at motivating people with a positive attitude towards fitness and health and wellbeing. Provide your answer in basic HTML inside a <p> element. ";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  axios.get(apiUrl).then(displayQuote);
}

function displayQuote(response) {
  let quoteElement = document.querySelector("#workout-body");
  quoteElement.innerHTML = response.data.answer;
}

// Waiting for Ai Response

function generatingWorkout(event) {
  event.preventDefault();

  new Typewriter("#workout-body", {
    strings: "Hang tight! Creating a new Workout just for you!",
    autoStart: true,
    delay: 50,
  });

  createWorkout();
}

// Ai Response

function createWorkout() {
  let inputElement = document.querySelector("#user-input");
  let apiKey = "143af7fd5b08cab06a8bf5bo4f3btde9";
  let prompt = `Create a 5 set dumbbell work out, working on the ${inputElement.value} of the body.`;
  let context =
    "You are an experienced personal gym trainer, specialising in dumbbell workouts. Provide your answer in basic HTML. Sign the workout at the bottom with 'Workout by Shecodes AI' inside a <strong> element.";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  axios.get(apiUrl).then(displayWorkout);
}

function displayWorkout(response) {
  let changeBodyElement = document.querySelector("#workout-body");
  changeBodyElement.classList.replace("workout", "ai-workout");

  new Typewriter("#workout-body", {
    strings: response.data.answer,
    autoStart: true,
    delay: 30,
    cursor: null,
  });
}

let formElement = document.querySelector("#workout-generator");
formElement = addEventListener("submit", generatingWorkout);

quotesGenerator();
