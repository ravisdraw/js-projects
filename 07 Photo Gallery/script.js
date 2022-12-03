const modal = document.createElement('div');
modal.className = 'modal';
document.body.appendChild(modal);

const img = document.querySelectorAll('.images');

img.forEach(images=>{
    images.addEventListener('click',()=>{
        modal.classList.add('active');
        const big_image = document.createElement('img');
        big_image.src = images.src;
        big_image.className = 'big_image';
        if(modal.firstChild){
            modal.removeChild(modal.firstChild);
        }
        modal.append(big_image);
    })
})

modal.addEventListener('click',()=>{
    modal.classList.remove('active');
})