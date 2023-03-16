const header = document.getElementById('header')
const myFadeImg = document.getElementsByClassName("fadeImg");
const aboutSection = document.getElementById('omDeGule')
const footer = document.getElementById('footer')


window.addEventListener('load', () => {
    console.log('loaded');
    for (const myElements of myFadeImg){
        myElements.classList.toggle('showImage');
    };
    header.classList.add('')
    aboutSection.classList.add('')
    footer.classList.add('')

});


const button = document.getElementById('showButton');
const text = document.getElementsByClassName('sectionText');

button.addEventListener('click', () => {
    for (const myElements of text){
        myElements.classList.toggle('textShow');
    };
})