const container = document.querySelector('.container');
const btnAddNote = document.querySelector('.addnotes');

btnAddNote.addEventListener('click', () => addSticky());

function createNote(id, content) {
    const textElement = document.createElement('textarea');
    textElement.classList.add('sticky');
    textElement.value = content;
    textElement.placeholder = 'Enter your Note';

    textElement.addEventListener('change',()=>{
        updateNote(id,textElement.value);
    })

    textElement.addEventListener('dblclick',()=>{
        const check = confirm('Do you want to delete the Note?');
        if(check){
            deleteNote(id,textElement);
        }
    })
    return textElement;
};


function getLocalStorage() {
    return JSON.parse(localStorage.getItem("stickyNotes") || "[]");
}

getLocalStorage().forEach(element => {
    const textElement = createNote(element.id, element.content);
    container.insertBefore(textElement, btnAddNote);
});

function addSticky() {
    const note = getLocalStorage();
    const noteObject = {
        id: Math.floor(Math.random() * 100000),
        content: ""
    }
    const textElement = createNote(noteObject.id, noteObject.content);
    container.insertBefore(textElement, btnAddNote);
    note.push(noteObject);
    saveNotes(note);
}

function saveNotes(note) {
    localStorage.setItem("stickyNotes", JSON.stringify(note));
}

function updateNote(id,content){
    const note = getLocalStorage();
    const updateVal = note.filter((element)=>element.id==id)[0];
    updateVal.content = content;
    saveNotes(note);
}

function deleteNote(id,textElement){
     const note = getLocalStorage().filter((element)=>element.id!=id);
     container.removeChild(textElement);
     saveNotes(note);
}