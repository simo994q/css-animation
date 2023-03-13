const myFadeImg = document.getElementsByClassName("fadeImg");


window.addEventListener('load', () => {
    console.log('loaded');


    for (const myElements of myFadeImg){
        myElements.classList.toggle('showImage');
    };
});