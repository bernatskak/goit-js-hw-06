const categories = document.querySelectorAll(`.item`);
console.log(categories);
let categorieEl = 1;
categories.forEach(element => {
    console.log(categorieEl, element);
    categorieEl += 1;
})
