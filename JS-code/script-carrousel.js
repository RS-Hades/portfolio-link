const carrouselContainer = document.getElementById('carrousel-container');
const carrousel = document.getElementById('carrousel');
const buttonLeft = document.getElementById('button-projects-left');
const buttonRight = document.getElementById('button-projects-right');

const carrouselElements = document.getElementsByClassName('cards-projects');

const rootStyles = document.querySelector(':root');

let isInTransition = false;

const directionCarrousel = {
    right: 'right',
    left: 'left'
};

const getTransformValue = () => Number(getComputedStyle(document.getElementById('carrousel')).getPropertyValue('--carrousel-transform').replace('%', ''));

let counter = 0;
const reorderCarrousel = () => {
    const transformValue = getTransformValue();
    rootStyles.style.setProperty('--transition-carrousel', 'none');
    if (counter === carrouselElements.length - 1) {
        carrousel.appendChild(carrousel.firstElementChild);
        rootStyles.style.setProperty('--carrousel-transform', `${transformValue + 100}%`);
        counter--;
    } else if (counter === 0) {
        carrousel.prepend(carrousel.lastElementChild);
        rootStyles.style.setProperty('--carrousel-transform', `${transformValue - 100}%`);
        counter++;
    }

    isInTransition = false;
}

const moveSlide = (direction) => {
    if(isInTransition) return;
    const transformValue = getTransformValue();
    rootStyles.style.setProperty('--transition-carrousel', 'transform 1s');
    isInTransition = true;
    if (direction === directionCarrousel.left) {
        rootStyles.style.setProperty('--carrousel-transform', `${transformValue + 100}%`);
        counter--;
    } else if (direction === directionCarrousel.right) {
        rootStyles.style.setProperty('--carrousel-transform', `${transformValue - 100}%`);
        counter++;
    };
};

buttonRight.addEventListener('click', ()=>moveSlide(directionCarrousel.right));
buttonLeft.addEventListener('click', ()=>moveSlide(directionCarrousel.left));

carrousel.addEventListener('transitionend', reorderCarrousel)
reorderCarrousel();