const myFadeImg = document.getElementsByClassName("fadeImg");


window.addEventListener('load', () => {
    console.log('loaded');


    for (const myElements of myFadeImg){
        myElements.classList.toggle('showImage');
    };
});


const button = document.getElementById('showButton');
const text = document.getElementsByClassName('sectionText');

button.addEventListener('click', () => {
    console.log(3);
    console.log(text);
    for (const myElements of text){
        myElements.classList.toggle('textShow');
    };
    // text.classList.toggle('textShow')
})