function createWorkout(event) {
  event.preventDefault();

  new Typewriter("#workout-body", {
    strings: "Hang tight! Creating a new Workout just for you!",
    autoStart: true,
    delay: 50,
    cursor: null,
  });
}

let formElement = document.querySelector("#workout-generator");
formElement = addEventListener("submit", createWorkout);
