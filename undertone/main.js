//Two buttons that lead to an empty page (could also do it through tag 'a' but I like writing code in js more)
const shopBtn = document.querySelector('#shopBtn');
shopBtn.onclick = function () {
    window.open('');
}
const readMore = document.querySelector('#readMore');
readMore.onclick = function () {
    window.open('');
}

//An array of descriptions
let description = document.querySelector('#description');
const descriptionsArray = [
    `"The first time I used Samsung Bespoke Jet, I cried. I'm not being sensational; I really did. Of course, this vacuum worked great. But that's not all."`,
    `"If you’re an over-cleaner, like myself, you’ll nerd out on all of the functions. If you avoid this chore at all costs, you’ll appreciate how simple Samsung makes it."`,
    `"Both the floor and pet hair attachments are cleverly designed to eliminate the dreaded hair wrap. (In other words, you’ll never have to tackle hair tangles with a pair of scissors again.)"`,
    `"When I learned the Samsung Bespoke Vac cleaned itself with amazing technology, that’s when I cried. No more scraping spider legs and hair out of the crevices with my hands. Its suction power is so strong, the canister is left perfectly clean after every use. It’s like a vacuum for your vacuum."`,
    `"Because it’s so nice-looking, it can live right in the kitchen. No more hauling a vacuum up and down the basement stairs on the daily"`
];

//Declarations
description.innerHTML = descriptionsArray[0];
const frameNumberText = document.querySelector('#frameNumber');
let frameNumber = 1;
const nextBtn = document.querySelector('#nextBtn');
const prevBtn = document.querySelector('#prevBtn');
const nextFrame = document.querySelector('#frameSlide');
const carouselActiveClass = document.querySelector('#carouselActive').classList;

//Adding styles to arrows while clicking on them
nextBtn.addEventListener('mousedown', () => {
    nextBtn.classList.add('arrowMouseDown');
})
nextBtn.addEventListener('mouseup', () => {
    nextBtn.classList.remove('arrowMouseDown');
})
nextBtn.addEventListener('mouseleave', () => {
    nextBtn.classList.remove('arrowMouseDown');
})

prevBtn.addEventListener('mousedown', () => {
    prevBtn.classList.add('arrowMouseDown');
})
prevBtn.addEventListener('mouseup', () => {
    prevBtn.classList.remove('arrowMouseDown');
})
prevBtn.addEventListener('mouseleave', () => {
    prevBtn.classList.remove('arrowMouseDown');
})

//Logic for prevButton click and nextButton click
prevBtn.onclick = prevDescription;
nextBtn.onclick = nextDescription;

function prevDescription () {
    carouselActiveClass.remove('carouselActivePrev');
    carouselActiveClass.remove('carouselActiveNext');
    document.querySelector('.frame1img').style.visibility = 'hidden';
    nextFrame.classList.remove('frameSlide');
    nextFrame.classList.remove('frameSlideActive');
    void nextFrame.offsetWidth;
    if(frameNumber <= 1) {
        frameNumber += 4;
        description.innerHTML = descriptionsArray[frameNumber-1];
        frameNumberText.innerHTML = frameNumber;
        nextFrame.src=`./img/frame${frameNumber+1}img.jpg`;
    }
    else {
        frameNumber -= 1;
        description.innerHTML = descriptionsArray[frameNumber-1];
        frameNumberText.innerHTML = frameNumber;
        nextFrame.src=`./img/frame${frameNumber+1}img.jpg`;
    }
    nextFrame.classList.add('frameSlideActive');
    carouselActiveClass.add('carouselActivePrev');
}

function nextDescription () {
    carouselActiveClass.remove('carouselActivePrev');
    carouselActiveClass.remove('carouselActiveNext');
    document.querySelector('.frame1img').style.visibility = 'hidden';
    nextFrame.classList.remove('frameSlide');
    nextFrame.classList.remove('frameSlideActive');
    void nextFrame.offsetWidth;
    if(frameNumber >= 5) {
        frameNumber -= 4;
        description.innerHTML = descriptionsArray[frameNumber-1];
        frameNumberText.innerHTML = frameNumber;
        nextFrame.src=`./img/frame${frameNumber+1}img.jpg`;
    }
    else {
        frameNumber += 1;
        description.innerHTML = descriptionsArray[frameNumber-1];
        frameNumberText.innerHTML = frameNumber;
        nextFrame.src=`./img/frame${frameNumber+1}img.jpg`;
    }
    nextFrame.classList.add('frameSlideActive');
    carouselActiveClass.add('carouselActiveNext');
}

//AutoScroll for Images and Description until user interacts with a window
let autoScrollDescription = setTimeout(() => {
    let i = setInterval(() => 
        nextDescription(), 4000
    );
    document.querySelector('.main').onclick = function() {clearInterval(i)};
}, 7000
);