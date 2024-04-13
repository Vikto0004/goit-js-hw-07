function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const color = document.querySelector(".color");

const getBackgroundBody = () => {
  const backgroundColor = getRandomHexColor();
  document.body.style.backgroundColor = backgroundColor;
  color.textContent = backgroundColor;
};

const changeColor = document.querySelector(".change-color");
changeColor.addEventListener("click", getBackgroundBody);
