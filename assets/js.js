const header = document.getElementsByClassName('header')
const myFadeImg = document.getElementsByClassName("fadeImg");
const aboutSection = document.getElementsByClassName('omDeGule')
const footer = document.getElementById('footer')


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

});


const button = document.getElementById('showButton');
const text = document.getElementsByClassName('sectionText');

button.addEventListener('click', () => {
    for (const myElements of text){
        myElements.classList.toggle('textShow');
    };
})


