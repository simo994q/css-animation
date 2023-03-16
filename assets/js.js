const header = document.getElementsByClassName('header')
const myFadeImg = document.getElementsByClassName("fadeImg");
const aboutSection = document.getElementsByClassName('omDeGule')
const footer = document.getElementById('footer')
const goodSection = document.getElementsByClassName('goodSection')
const nyhedsBrev = document.getElementsByClassName('nyhedsBrev')

window.addEventListener('load', () => {
    console.log('loaded');
    for (const myElements of myFadeImg){
        myElements.classList.toggle('showImage');
    };
    for (const myElements of header){
        myElements.classList.add('headerAnimate')
    };
    for (const myElements of aboutSection){
        myElements.classList.add('boxAnimate')
    }
    footer.classList.add('footerAnimate')
    for (const myElements of goodSection){
        myElements.classList.add('boxAnimate')
    }
    for (const myElements of nyhedsBrev){
        myElements.classList.add('boxAnimate')
    }
});

const goodButton = document.getElementById('goodButton')
const goodList = document.getElementsByClassName('goodList')
const goodElements = document.getElementsByClassName('goodElement')

goodButton.addEventListener('click', () => {
    for (const myElements of goodList){
        myElements.classList.toggle('listShow');
    };
    for (const myElements of goodElements){
        myElements.classList.add('goodElementShow');
    };
})

const button = document.getElementById('showButton');
const text = document.getElementsByClassName('sectionText');

button.addEventListener('click', () => {
    for (const myElements of text){
        myElements.classList.toggle('textShow');
    };
})

// Nyhedsbrev


const emailInput = document.getElementById("email-input");
const validateBtn = document.getElementById("btn");
const form = document.getElementById('form')

validateBtn.addEventListener("click", function(event) {
  const email = emailInput.value;
  const regex = /\S+@\S+\.\S+/;

  if (regex.test(email)) {
    emailInput.classList.remove("error");
    emailInput.classList.add("success");
    validateBtn.style.opacity = 0;
    emailInput.style.opacity = 0;
    emailInput.insertAdjacentHTML("afterend", "<p>Tak for tilmelding</p>");
    form.innerHTML = `<h3>Tak for det!</h3>`
  } else {
    emailInput.classList.remove("success");
    emailInput.classList.add("error");
    emailInput.style.border = "2px solid red"
  }

});
