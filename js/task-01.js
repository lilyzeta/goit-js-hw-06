const list = document.querySelector("#categories");
let categoryNumber = list.children.length;
console.log(`Number of Categories: ${categoryNumber}`);

const listCategories = document.querySelectorAll(`.item`);
for (const category of listCategories) {
  console.log(`Category: ${category.firstElementChild.textContent}`);
  let quetzal = category.querySelectorAll("li");
  console.log(`Elements: ${quetzal.length}`);
}
