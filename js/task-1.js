console.log(`Number of categories: ${categories.children.length}`);
const arrayItem = document.querySelectorAll(".item");
for (const element of arrayItem) {
  console.log(`Category: ${element.firstElementChild.textContent}`);
  console.log(`Elements: ${element.lastElementChild.children.length}`);
}
