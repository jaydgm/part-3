// exp 1
// setAlarm() uses the setTimeout() API which
// will output "Wake up!" after a delay of
// 1000 millisecs. tested with different delay
// parameters 

// behind the scenes there is a Promise constructor
// it will pass 'wake up!' into .then, and reject promise 
// if negative value

const output = document.querySelector("#output");
const button = document.querySelector("#set-alarm");

function setAlarm() {
  setTimeout(() => {
    output.textContent = "Wake up!";
  }, 5000);
}

button.addEventListener("click", setAlarm);

// exp 2
// promise based alarm API
// 

function alarm(person, delay) {
  return new Promise((resolve, reject) => {
    if (delay < 0) {
      throw new Error("Alarm delay must not be negative");
    }
    setTimeout(() => {
      resolve(`Wake up, ${person}!`);
    }, delay);
  });
}

// exp 3
// this example is used to test 
// with different names and delay values
// including negative values to test Error()

function alarm(person, delay) {
  return new Promise((resolve, reject) => {
    if (delay < 0) {
      throw new Error("Alarm delay must not be negative");
    }
    setTimeout(() => {
      resolve(`Wake up, ${person}!`);
    }, delay);
  });
}

button.addEventListener("click", () => {
  alarm(name.value, delay.value)
    .then((message) => (output.textContent = message))
    .catch((error) => (output.textContent = `Couldn't set alarm: ${error}`));
});

// exp 4
// practice with using different promise
// features such as await and async

const name = document.querySelector("#name");
const delay = document.querySelector("#delay");
const button = document.querySelector("#set-alarm");
const output = document.querySelector("#output");

function alarm(person, delay) {
  return new Promise((resolve, reject) => {
    if (delay < 0) {
      throw new Error("Alarm delay must not be negative");
    }
    setTimeout(() => {
      resolve(`Wake up, ${person}!`);
    }, delay);
  });
}

button.addEventListener("click", async () => {
  try {
    const message = await alarm(name.value, delay.value);
    output.textContent = message;
  } catch (error) {
    output.textContent = `Couldn't set alarm: ${error}`;
  }
});