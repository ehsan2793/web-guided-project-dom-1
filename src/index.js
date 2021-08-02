// 👉 1- Finding an element on the page and saving a reference to it
//  Older: getElementById, getElementsByTagName, getElementsByClassName
//  Newer: querySelector, querySelectorAll
//  Select the following single elements from the div.card

//getElementById
const nav =document.getElementById('mainNav')
console.log(nav)
//getElemenstByClassNmae
const navItems = document.getElementsByClassName('menu-item')
console.log(navItems)

// querySelector + querySelectorAll

// A- finding across the entire DOM
const header = document.querySelector('header'); // header element
const logoTitle = document.querySelector('#logoTitle');
logoTitle.textContent = 'Logo';
const firstCard =  document.querySelector('.card:nth-of-type(1)')
// B- finding within one particular element
const imageFirstCard = document.querySelector('.card-img-top')
console.log(imageFirstCard);
const titleFirstCard = document.querySelector('.card-title')
console.log(titleFirstCard);
const subtitleFirstCard = document.querySelector('.card-subtitle')
console.log(subtitleFirstCard);
const textFirstCard = document.querySelector('.card-text')
console.log(textFirstCard);
// C- traversing with dot notation
const link1FirstCard = textFirstCard.nextElementSibling;
console.log(link1FirstCard);
const link2FirstCard = link1FirstCard.nextElementSibling;
console.log(link2FirstCard);


// 👉 2- Finding collections of elements in the DOM
// A- Find all the anchor tags inside the nav element
const links = document.querySelectorAll('nav a')
// B- Loop over the links and console.log their text content

links.forEach(link => console.log(link.textContent));
// C- Turn the collection of links into a real array
const linksArray = Array.from(links);
console.log(linksArray);
// D- Use .filter to find the anchor tag with the textContent of "Home"
const foundElement = linksArray.find(link => link.textContent === 'Home');
console.log(foundElement);

// 👉 3- Changing an element's text content
//  A- Change the cat-related content into dog-related content
logoTitle.textContent = 'Lambda Dogs';
//  B- Have the students research online the difference between textContent and innerText

// innerText was non-standard, textContent was standardized earlier.
// innerText returns the visible text contained in a node, while textContent returns the full text. For example, on the following HTML <span>Hello <span style="display: none;">World</span></span>, innerText will return 'Hello', while textContent will return 'Hello World'. For a more complete list of differences, see the table at http://perfectionkills.com/the-poor-misunderstood-innerText/ (further reading at 'innerText' works in IE, but not in Firefox).
// As a result, innerText is much more performance-heavy: it requires layout information to return the result.
// innerText is defined only for HTMLElement objects, while textContent is defined for all Node objects.

// 👉 4- Changing any property
//  A- Using dot notation to change a few attributes
logoTitle.className = 'logo heading banana'
//  B- Using .setAttribute to change a few attributes
imageFirstCard.src = 'https://herepup.com/wp-content/uploads/2015/12/Dog-Advice-1-1.jpg'
imageFirstCard.style.height = '10px'
link1FirstCard.setAttribute('href','https:// www.pexels.com/search/dog');

// 👉 5- Changing the styling of an element
//  A- By changing the class names on the element with the classList API

header.classList.add('sky');       /// add class
header.classList.remove('sky'); // remove the class
//  B- By manipulating inline styles on the element

header.style.fontSize = '2em' // change font size

// 👉 6- Creating new elements from scratch and appending them
// Create a new link inside the nav for "Blog"
const blogLink = document.createElement('a');
blogLink.textContent = 'Blog';
blogLink.href = '#'

document.querySelector('nav').appendChild(blogLink);

// 👉 7- Making a copy of the card and appending it to the card group
// DOM nodes can only exist in one spot in the DOM
// We cannot append the same copy multiple times
const secondCard = firstCard.cloneNode(true);
document.querySelector('.card-group').appendChild(secondCard);


////////////////////////////////////////////////////////////////////////
const data = {
    "contact": {
        "contact-heading": "Contact"
    }
}
const contactHeading = document.querySelector('.contact-heading');
contactHeading.textContent = data['contact']['contact-heading']

// 👉 8- Removing an existing element and putting it back [STRETCH if time allows]


// 👉 9- Show to students the insertAdjacentHTML method [STRETCH if time allows]
