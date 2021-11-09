const listOfCategories = document.querySelector('#categories');

console.log('Number of categories:', listOfCategories.children.length);

const items = document.querySelectorAll('.item');

for (const item of items) {
    console.log('Category:', item.firstElementChild.textContent);
    console.log('Elements:', item.lastElementChild.children.length);
}