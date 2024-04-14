const loginForm = document.querySelector(".login-form");

const formSubmission = (event) => {
  event.preventDefault();

  const objInfo = {};
  const email = event.target.elements.email.value;
  const password = event.target.elements.password.value.trim();

  if (email === "" || password === "") {
    alert("All form fields must be filled in");
  } else {
    objInfo.email = email;
    objInfo.password = password;
    console.log(objInfo);
  }

  event.target.reset();
};

loginForm.addEventListener("submit", formSubmission);
