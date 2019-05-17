const ul = document.querySelector('ul');
const input = document.querySelector('input');
const add = document.querySelector('button');
const list = [];

window.onload = init;

function insert(value) {
    list.push(value);
    let li = document.createElement('li');
    li.innerHTML = value;
    let del = document.createElement('button');
    del.innerHTML = 'remove';
    

    del.addEventListener('click', function (event) {
        let nodes = Array.prototype.slice.call(ul.children);
        list.splice(nodes.indexOf(event.target.parentNode), 1);
        ul.removeChild(event.target.parentNode);
        console.log(list);


    });
    li.append(del);
    ul.prepend(li);
    input.value = '';
}

function remove(index) {

}

add.addEventListener('click', function () {
    insert(input.value);
    saveListItem();
});

function saveListItem(input) {
    localStorage.setItem('reminder', JSON.stringify(input));
}

function getTodoItems(input) {
    if (localStorage) {
        for (var i = 0; i < localStorage.length; i++) {
            var key = localStorage.key(i);
            if (key == "reminder") {
                JSON.parse(localStorage.getItem(input));
                list.push(input);
            }
        }
    } else {
        console.log("Error");
    }
}

function init() {
    getTodoItems();
   }
