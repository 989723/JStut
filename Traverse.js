// Transverse the DOM

var itemList =document.querySelector('#items');
// parent node
console.log(itemList.parentNode)
itemList.parentNode.style.backgroundColor ='#f4f4f4';
console.log(itemList.parentNode.parentNode.parentNode)

// parent Element
console.log(itemList.parentElement)
itemList.parentElement.style.backgroundColor ='#f4f4f4';
console.log(itemList.parentElement.parentElement.parentElement)

// childNode
console.log(itemList.childNodes);
console.log(itemList.children)
console.log(itemList.children[1]);
itemList.children[1].backgroundColor = 'yellow'

// firstChild
console.log(itemList.firstElementChild);
itemList.firstElementChild.textContent='hello 1'


// // lastChild
// console.log(itemList.lastChild);

// firstChild
console.log(itemList.firstElementChild);
itemList.firstElementChild.textContent='hello 1'

// nextSibling
console.log(itemList.nextSibling);

// nextElementSibling
console.log(itemList.nextElementSibling);

// previousSibling
console.log(itemList.previousSibling);

// previousElementSibling
console.log(itemList.previousElementSibling);
itemList.previousElementSibling.style.backgroundColor='green';


// createElement

// create A div
var newDiv= document.createElement('div')
// addClass
newDiv.className='hello'

// addId
newDiv.id=hello;


// Add attr

newDiv.setAttribute('title','Hello Div')

// create text node

var nextDivText = document.createTextNode("Hello World")
 
console.log(newDiv)

// Create text node
