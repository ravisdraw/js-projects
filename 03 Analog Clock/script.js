const hours = document.querySelector('.hrs');
const mins = document.querySelector('.mins');
const second = document.querySelector('.sec')

function getTime() {
    const time = new Date();
    const hrs = time.getHours() / 12;
    const min = time.getMinutes() / 60;
    const sec = time.getSeconds() / 60;

    hours.style.setProperty('--rotation', hrs * 360);
    mins.style.setProperty('--rotation', min * 360);
    second.style.setProperty('--rotation', sec * 360);

}

getTime();
setInterval(getTime, 1000);

// Keypoints slider 

var source = document.getElementById("source");
var destination = document.getElementById("destination");
while (source.firstChild) {
    destination.appendChild(source.firstChild);
}

var sliderIndex = 0;
const slides = document.querySelectorAll('.keypoints');
const totalSlides = slides.length;

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

nextBtn.addEventListener('click', () => {
    slides.forEach(silde => {
        silde.classList.remove('active');
    })
    slides[sliderIndex].classList.add('active');
    nextBtnCounter()
})

prevBtn.addEventListener('click', () => {
    slides.forEach(silde => {
        silde.classList.remove('active');
    })
    slides[sliderIndex].classList.add('active');
    prevBtnCounter()
})

function nextBtnCounter() {
    if (sliderIndex == totalSlides - 1) {
        sliderIndex = 0;
    } else {
        sliderIndex++;
    }
}

function prevBtnCounter() {
    if (sliderIndex == 0) {
        sliderIndex = totalSlides - 1;
    } else {
        sliderIndex--;
    }

}
