const searchBox = document.querySelector('.searchBox');
const imgBox = document.querySelectorAll('.imgBox');
const btns = document.querySelectorAll('.btn');

searchBox.addEventListener('keyup', (e) => {
    const searchText = (e.target.value).toLowerCase().trim();
    imgBox.forEach((box) => {
        const filterVal = box.dataset.filter
        if (filterVal.includes(searchText)) {
            box.style.display = 'block';
        } else {
            box.style.display = 'none';
        }
    })
    btns.forEach((btn) => {
        btn.classList.remove('active');
    })
    btns[0].classList.add('active');
})

btns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        setActiveClass(e);
        const BtnFilter = e.target.dataset.filter;
        imgBox.forEach((box) => {
            if (BtnFilter == 'all') {
                box.style.display = 'block';
            } else {
                const boxFilter = box.dataset.filter;
                if (boxFilter == BtnFilter) {
                    box.style.display = 'block';
                } else {
                    box.style.display = 'none';
                }
            }
        })
    })
})

function setActiveClass(e) {
    btns.forEach((btn) => {
        btn.classList.remove('active');
    })
    e.target.classList.add('active');
}