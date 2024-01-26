let myHeading = document.querySelector("h1");
myHeading.textContent = "My Name is Alexander Chen!";

document.querySelector("html").addEventListener("click", function () {
  alert("Ouch! Stop poking me! DONT click the banana!!");
});

const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "img/banana.png") {
    myImage.setAttribute("src", "img/apple.png");
  }
};

let myButton = document.querySelector('button');

function setUserName() {
  let myName = prompt('Please enter your name.');
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'Welcome!: ' + myName;
  }
}

if (!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.innerHTML = 'Welcome! My Name is: ' + storedName;
}

myButton.onclick = function () {
  setUserName();
};
