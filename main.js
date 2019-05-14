
// localStorage.setItem('todo', 'Wtf should I do today');
// console.log(localStorage.getItem('todo'));

// localStorage.removeItem('');
// localStorage.clear

const add = document.querySelector('.plus');
let field = document.querySelector('.bottom');
let textarea = document.querySelector('.textarea');
let addBtn = document.querySelector('.convert');
let newDo;


add.addEventListener('click', function(){
    textarea.style.display = 'block';
    addBtn.style.display = 'flex';
    add.style.display = 'none';
});

addBtn.addEventListener('click', function(){
    newDo = textarea.value;
    textarea.value = '';
    textarea.style.display = 'none';
    addBtn.style.display = 'none';
    add.style.display = 'flex';
    create();
});

function create(){
    let newSection = document.createElement('div');
        newSection.classList = 'item';
    let para = document.createElement('p');
        para.classList = 'item-txt';
        para.contentEditable = true;
        para.innerHTML = newDo;
    let rmv = document.createElement('div');
        rmv.classList = 'item-dlt';
        rmv.innerHTML = 'x';
    newSection.appendChild(para);
    newSection.appendChild(rmv);
    field.appendChild(newSection);
    console.log(newSection);
}

function remove(){
    
}
>>>>>>> master
