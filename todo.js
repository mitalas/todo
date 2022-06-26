//Declare variables
var button = document.querySelector('#enter');
var input = document.querySelector('#inputuser');
var ul = document.querySelector('ul');


function inputLength() {
    return input.value.length;//checks whether the input is empty
}

function createList() {
    var li = document.createElement('li');//creates an element in html
    li.appendChild(document.createTextNode(input.value));//adds the element to the html
    ul.appendChild(li);//location of the html element
    input.value = "";//deletes the input value after enter
}

function addListclick() {
    if (inputLength() > 0) {
        createList()
    }
};

function addListkeypress(event) {
    if (inputLength() > 0 && event.keyCode === 13) {
        createList()
        console.log('sfdhdjd')
    }
};
button.addEventListener('click', addListclick);

input.addEventListener('keypress', addListkeypress);