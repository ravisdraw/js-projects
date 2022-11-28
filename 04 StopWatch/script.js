const btnStart = document.querySelector('.start');
const btnStop = document.querySelector('.stop');
const btnReset = document.querySelector('.reset');


let h = m = s = ms = 0;
let startTimer;

btnStart.addEventListener('click', () => {
    startTimer = setInterval(() => {
        ms++;
        if (ms == 100) {
            ms = 0;
            s++;
        }
        if(s==60){
            s = 0;
            m++;
        }
        if(m==60){
            m=0;
            h++;
        }
        updateValues();
    }, 10);
});

btnStop.addEventListener('click', () => {
    clearInterval(startTimer);
});

btnReset.addEventListener('click', () => {
    h = m = s = ms = 0;
    updateValues();
});



function updateValues() {

    //Format digits

    ph = h < 10 ? '0' + h : h;
    pm = m < 10 ? '0' + m : m;
    ps = s < 10 ? '0' + s : s;
    pms = ms < 10 ? '0' + ms : ms;

    document.querySelector('.hrs').innerText = ph;
    document.querySelector('.mins').innerText = pm;
    document.querySelector('.secs').innerText = ps;
    document.querySelector('.millisecs').innerText = pms;
}