let input = document.querySelector('#input')
let add = document.querySelector('#add-btn')
let items = document.querySelector('#list-of-items')

let element = document.getElementsByTagName('li')



// add a new element to the list 

function newListElement() {
    let li = document.createElement("li"); // this creates a <li> for new input
    let inputValue = input.value;     // gets value from '#input'

    var checkbox = document.createElement("input")  // this creates a checkbox from input (type)
    checkbox.setAttribute("type", "checkbox")
    // console.log(checkbox)
    li.append(' ', checkbox)

    let text = document.createElement("span"); // defines input text within span 
    text.innerHTML = inputValue;
    li.appendChild(text);
    

    let removeBtn = document.createElement("button"); // creates a remove button
    removeBtn.innerText = 'Remove'
    li.append(' ', removeBtn);

    if (inputValue === "") {
        alert("You should enter your todo");
    } else {
        items.appendChild(li);
    }
    input.value = ""; // keeps input field default after adding an element

    // remove btn function 

    items.addEventListener('click', function (event) {
        if (event.target.nodeName === 'BUTTON') {
            event.target.closest('li').remove();
        }
    })


// add a "checked" when clicking on a list item

    checkbox.addEventListener("click", () => {

        if (checkbox.checked) {
            text.style.textDecoration = "line-through";

        } else {
            text.style.textDecoration = "none";
        }
    });
}








