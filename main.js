const add = document.querySelector('.plus');
let field = document.querySelector('.bottom');
let theField = document.querySelector('.bottom') + 1;
let textarea = document.querySelector('.textarea');
let addBtn = document.querySelector('.convert');
let newDo;
let list = [];


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
        rmv.addEventListener('click', function(){
            this.parentElement.parentElement.removeChild(this.parentElement);
            var indexNr = list.indexOf(this.parentElement);
            list.splice(indexNr,1);
            console.log(list);
        });

    newSection.appendChild(para);
    newSection.appendChild(rmv);
    field.appendChild(newSection);

    list.push(newSection);

    console.log(list);
    
}