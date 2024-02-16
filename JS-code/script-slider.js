const slider = document.getElementById('skills-slider');
const leftButton = document.getElementById('about-first-button');
const rightButton = document.getElementById('about-second-button');

const sliderElements = document.getElementsByClassName('kinda-skill');

const rootStyle = document.querySelector(':root');

let inTransition = false;

const directionSlider = {
    RIGHT: 'RIGHT',
    LEFT: 'LEFT'
};

const transformValue = () => Number(getComputedStyle(document.getElementById('skills-slider')).getPropertyValue('--slider-transform').replace('%', ''));

let counterSlider = 0;
const reorderSlider = () => {
    const transform = transformValue();
    rootStyle.style.setProperty('--transition-slider', 'none');
    if (counterSlider === sliderElements.length - 1) {
        slider.appendChild(slider.firstElementChild);
        rootStyle.style.setProperty('--slider-transform', `${transform + 100}%`);
        counterSlider--;
    } else if (counterSlider === 0) {
        slider.prepend(slider.lastElementChild);
        rootStyle.style.setProperty('--slider-transform', `${transform - 100}%`);
        counterSlider++;
    }

    inTransition = false;
}

const movingSlider = (direction) => {
    if(inTransition) return;
    const transform = transformValue();
    rootStyle.style.setProperty('--transition-slider', 'transform 1s');
    inTransition = true;
    if (direction === directionSlider.LEFT) {
        rootStyle.style.setProperty('--slider-transform', `${transform + 100}%`);
        counterSlider--;
    } else if (direction === directionSlider.RIGHT) {
        rootStyle.style.setProperty('--slider-transform', `${transform - 100}%`);
        counterSlider++;
    };
};

rightButton.addEventListener('click', ()=>movingSlider(directionSlider.RIGHT));
leftButton.addEventListener('click', ()=>movingSlider(directionSlider.LEFT));

slider.addEventListener('transitionend', reorderSlider)
reorderSlider();