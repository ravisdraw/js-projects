const input_box = document.querySelector('.input_cls');
const form = document.querySelector('.form');
const num = document.querySelector('#num');
const small = document.querySelector('#small');
const large = document.querySelector('#large');
const sym = document.querySelector('#sym');

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const limit = 8;
    let generatedPass = '';
    const checkArray = functionArray.filter(({
        checkbox
    }) => checkbox.checked);
    if (checkArray.length < 1) {
        alert('Please check atleast one checkBox');
    }
    for (let i = 0; i < limit; i++) {
        const index = Math.floor(Math.random() * checkArray.length);
        const letter = checkArray[index].fun();
        generatedPass += letter;
    }
    input_box.value = generatedPass;
    const input_val = input_box.value;
    if (input_val) {
        await navigator.clipboard.writeText(input_val);
        alert('Copied Clipboard');
    } else {
        alert('There is no password to Copy');
    }
})

function generatePassword(min, max) {
    const limit = max - min + 1
    return (String.fromCharCode(Math.floor(Math.random() * limit) + min));
}


function smallCharacters() {
    return generatePassword(97, 122);
}

function largeCharacters() {
    return generatePassword(65, 90);
}

function numbers() {
    return generatePassword(48, 57);
}

function symbol() {
    const sym = '~!@#$%^&*()_+|}{[]<>/?.,|'
    return sym[Math.floor(Math.random() * sym.length)];
}

const functionArray = [{
        checkbox: num,
        fun: numbers
    },
    {
        checkbox: small,
        fun: smallCharacters
    },
    {
        checkbox: large,
        fun: largeCharacters
    },
    {
        checkbox: sym,
        fun: symbol
    }
]