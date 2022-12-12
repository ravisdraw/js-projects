const imgPre = document.querySelectorAll('.imgPrev a');

imgPre.forEach((img) => {
    img.addEventListener('click', (e) => {
        e.preventDefault();
        const imgData = img.dataset.list;
        imageSilder(imgData);
    })
})


function imageSilder(imgData) {

    const imageWidth = document.querySelector('.imageSilder img:first-child').clientWidth;
    const imageFrame = document.querySelector('.imageSilder');
    const calcWidth = (imgData - 1) * imageWidth;
    imageFrame.style.transform = `translateX(-${calcWidth}px)`;
}