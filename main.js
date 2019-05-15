const add = document.querySelector('.plus');
let field = document.querySelector('.bottom');
let textarea = document.querySelector('.textarea');
let addBtn = document.querySelector('.convert');
let newDo;
let list = [];


add.addEventListener('click', function(){ //The blue + button//
    //Add the textarea to get input
    textarea.style.display = 'block';
    //Add the green add button to save the content
    addBtn.style.display = 'flex';
    //Hide the blue button with plus icon
    add.style.display = 'none';
});

addBtn.addEventListener('click', function(){ //The green 'add' button//
    //set newDo variable equal to the value typed into textarea
    newDo = textarea.value;
    //Once you grabbed the value and set the variable, clear the textarea
    textarea.value = '';
    //Hide the textarea
    textarea.style.display = 'none';
    //Hide the green 'add' button
    addBtn.style.display = 'none';
    //Bring back the blue + button
    add.style.display = 'flex';
    //Run the `create` function
    create();
});

function create(){ //Initialize function
    //create new div and set equal to variable `newSection`
    let newSection = document.createElement('div');
        //Give the div a class of `item`
        newSection.classList = 'item';
    //create a new paragraph and set equal to variable `para`
    let para = document.createElement('p');
        //Give the div a class of `item-txt`
        para.classList = 'item-txt';
        //Make the content of `para` editible
        para.contentEditable = true;
        //Set the value of `para` equal to the variable `newDo`
        para.innerHTML = newDo;
    //create new div and set equal to variable `rmv`
    let rmv = document.createElement('div');
        //Give the div a class of `item-dlt`
        rmv.classList = 'item-dlt';
        //Give the div a value of 'x' or use a font icon if you want
        rmv.innerHTML = 'x';
        //Now listen for a click event on the new `rmv` div
        rmv.addEventListener('click', function(){
            //Get this rmv's parent div(`item`), go to its parent(let field), then remove `this` rmv's parent element(item)
            this.parentElement.parentElement.removeChild(this.parentElement);
            //Save the `item`'s array index number in variable `indexNr`
            var indexNr = list.indexOf(this.parentElement);
            //Now splice(remove) the item from the array
            list.splice(indexNr,1);
            console.log(list);
        });
    //Put the `para` and `rmv` in the item div(newSection)
    newSection.appendChild(para);
    newSection.appendChild(rmv);
    //Put the newSection in the `bottom div` (field variable)
    field.appendChild(newSection);
    //Add the `newSection` to the array
    list.push(newSection);
    console.log(list);
    
}