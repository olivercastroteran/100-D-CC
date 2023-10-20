const link = document.getElementById('ext-link');
const linkB = document.querySelector('#ext-link');
const h1Element = document.querySelector('h1');

console.dir(h1Element);

link.href = 'https://google.com';
linkB.href = 'https://oliverct.com';

h1Element.parentElement;
h1Element.nextElementSibling;

h1Element = document.getElementById('first-title');

// ADD AN ELEMENT

// 1. Create the new element
const anchoreElmnt = document.createElement('a');
anchoreElmnt.href = 'https://google.com';
anchoreElmnt.textContent = 'Google';
// 2. Get access to the parent element that should hold the new element
const paragraph = document.querySelector('.paragraph');
// 3. Insert the new elemnt into the parent elmnt
paragraph.append(anchoreElmnt);
