const elInput = document.querySelector("#controls input[type='number']");
const elBtnCreate = document.querySelector("#controls button[data-create]");
const elBtnDestroy = document.querySelector("#controls button[data-destroy]");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

let startWidth = 30;
let startHeight = 30;
function createBoxes(amount) {
  elBtnCreate.addEventListener("click", () => {
    if (boxes.children.length > 0) {
      startWidth = 30;
      startHeight = 30;

      for (const element of boxes.children) {
        element.remove();
      }
    }
    if (amount >= 1 && amount <= 100) {
      for (let i = 0; i < amount; i++) {
        const elNewBox = document.createElement("div");

        elNewBox.style.width = `${startWidth}px`;
        elNewBox.style.height = `${startHeight}px`;
        elNewBox.style.backgroundColor = getRandomHexColor();

        startWidth += 10;
        startHeight += 10;

        boxes.prepend(elNewBox);
        elInput.value = "";
      }
    }
    amount = 0;
  });
}

elInput.addEventListener("blur", (event) => {
  createBoxes(parseFloat(event.currentTarget.value));
});

elBtnDestroy.addEventListener("click", () => {
  boxes.innerHTML = "";
  startWidth = 30;
  startHeight = 30;
});
