var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");
function opentab(tabname) {
    for (tablink of tablinks) {
    tablink.classList.remove("active-link")
    }
    for (tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab")
    }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
}



var educationlinks = document.getElementsByClassName("education-links");
var educationcontents = document.getElementsByClassName("education-contents");
function opentab2(educationname) {
    for (educationlink of educationlinks) {
        educationlink.classList.remove("active-link")
    }
    for (educationcontent of educationcontents) {
        educationcontent.classList.remove("active-tab")
    }
  event.currentTarget.classList.add("active-link");
  document.getElementById(educationname).classList.add("active-tab");
}



let scaleFactor = 1;
let modalImage = document.querySelector(".modal-content img");
let closeButton = document.getElementById("close");

const closeModal = () => {
  let modal = document.getElementById("thanks-modal");
  modal.style.display = "none";
}
closeButton.addEventListener("click", closeModal);

const scaleImage = () => {
  if (scaleFactor === 1) 
  {
    scaleFactor = 0.8;
  } 
  else 
  {
    scaleFactor = 1;
  }
  modalImage.style.transform = `scale(${scaleFactor})`;
}

const toggleModal = () => {
  let intervalId = setInterval(scaleImage, 500);
  let modal = document.getElementById("thanks-modal");
  let modalContent = document.getElementById("thanks-modal-content");
  modal.style.display = "flex";
  modalContent.textContent = "Thank you for the feedback!";

  setTimeout(() => {
    let modal = document.getElementById("thanks-modal");
    modal.style.display = "none";
    clearInterval(intervalId);
  }, 4000);
}


let animation = {
  revealDistance: 150,
  initialOpacity: 0,
  transitionDelay: 0,
  transitionDuration: '2s',
  transitionProperty: 'all',
  transitionTimingFunction: 'ease'
};

let revealableContainers = document.querySelectorAll(".revealable");

const reveal = () => {
  for (let i = 0; i < revealableContainers.length; i++) {
    let windowHeight = window.innerHeight;
    let topOfRevealableContainer = revealableContainers[i].getBoundingClientRect().top;
    if (topOfRevealableContainer < windowHeight - animation.revealDistance) {
      revealableContainers[i].classList.add('active');
    } else {
      revealableContainers[i].classList.remove('active');
    }
  }
}
window.addEventListener('scroll', reveal);

let reduceMotion = () => {
  console.log("Reduce motion button clicked");
  if (animation.transitionDuration === 'none') {
    animation.transitionDuration = '2s';
    animation.transitionDelay = '0s';
  } else {
    animation.transitionDuration = 'none';
    animation.transitionDelay = 'none';
  }

  for (let i = 0; i < revealableContainers.length; i++) {
    revealableContainers[i].style.transitionDelay = animation.transitionDelay;
    revealableContainers[i].style.transitionDuration = animation.transitionDuration;
  }
}

document.getElementById("reduceMotion").addEventListener("click", reduceMotion);

let themeButton = document.getElementById("theme-button");

const lightImg = document.getElementById("lightImg");

let firstImg = true;

const toggleDarkMode = () => {
  document.body.classList.toggle("dark-mode");
  if (firstImg) {
    lightImg.src = "images/hunter2.png";
  }
  else
  {
    lightImg.src = "images/hunter.png";
  }
  firstImg = !firstImg;
}

themeButton.addEventListener("click", toggleDarkMode)