let drumLen = document.querySelectorAll(".drum").length;

for (var i = 0; i < drumLen; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    let buttonName = this.innerHTML;
    chooseSound(buttonName);
    buttonAnimation(buttonName);
  });
}

document.addEventListener("keydown", (e) => {
  chooseSound(e.key);
  buttonAnimation(e.key);
});

function chooseSound(name) {
  switch (name) {
    case "w":
      playSound("sounds/tom-1.mp3");
      break;
    case "a":
      playSound("sounds/tom-2.mp3");
      break;
    case "s":
      playSound("sounds/tom-3.mp3");
      break;
    case "d":
      playSound("sounds/tom-4.mp3");
      break;
    case "j":
      playSound("sounds/snare.mp3");
      break;
    case "k":
      playSound("sounds/crash.mp3");
      break;
    case "l":
      playSound("sounds/kick-bass.mp3");
      break;
    default:
      console.log(name);
      break;
  }
}

function playSound(soundtrack) {
  let audio = new Audio(soundtrack);
  audio.play();
}

function buttonAnimation(key) {
  let activeBtn = document.querySelector("." + key);
  activeBtn.classList.add("pressed");
  setTimeout(() => {
    activeBtn.classList.remove("pressed");
  }, 150);
}
