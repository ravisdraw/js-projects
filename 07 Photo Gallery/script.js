const modal = document.createElement('div');
modal.className = 'modal';
document.body.appendChild(modal);

const img = document.querySelectorAll('.images');

img.forEach(images => {
    images.addEventListener('click', () => {
        modal.classList.add('active');
        const big_image = document.createElement('img');
        big_image.src = images.src;
        big_image.className = 'big_image';
        if (modal.firstChild) {
            modal.removeChild(modal.firstChild);
        }
        modal.append(big_image);
    })
})

modal.addEventListener('click', () => {
    modal.classList.remove('active');
})


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