const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");
nameInput.addEventListener("input", (event) => {
  if (event.currentTarget.value.trim().length > 0) {
    nameOutput.textContent = event.currentTarget.value.trim();
  } else if (event.currentTarget.value.length === 0) {
    nameOutput.textContent = "Anonymous";
  }
});
