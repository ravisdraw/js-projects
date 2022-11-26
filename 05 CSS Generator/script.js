document.addEventListener('DOMContentLoaded', () => {
    const bar = document.getElementById('points');
    const txtarea = document.getElementById('txtarea');
    const val = document.querySelector('.display');
    const container = document.querySelector('.container');

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

function copy(){
    txtarea.select();
    document.execCommand("copy");
}