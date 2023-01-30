document.addEventListener('DOMContentLoaded', () => {
    const bar = document.getElementById('points');
    const txtarea = document.getElementById('txtarea');
    const val = document.querySelector('.display');
    const container = document.querySelector('.main-container');

    var coding = '';
    var bar_Val = 0;

    function updateValues() {
        bar_Val = bar.value;
        val.innerText = bar_Val + 'px';
        coding = `border-radius:${bar_Val}px;`
        txtarea.value = coding;
        container.style.cssText = coding;
    }

    bar.addEventListener('mousemove', updateValues);
    bar.addEventListener('change', updateValues);

    updateValues();
});

function copy() {
    txtarea.select();
    document.execCommand("copy");
}


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