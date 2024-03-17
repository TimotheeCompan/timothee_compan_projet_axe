let form = document.querySelector("form");
form.addEventListener("submit", function (event) {
  let errorContainer = document.querySelector(".message-error");
  let successContainer = document.querySelector(".message-success");
  successContainer.classList.remove("visible");
  let errorList = document.querySelector(".message-error ul");
  let successList = document.querySelector(".message-success ul");
  errorList.innerHTML = "";
  errorContainer.classList.remove("visible");
  event.preventDefault();
  let email = document.querySelector("#email");
  let pseudo = document.querySelector("#pseudo");
  let password = document.querySelector("#password");
  let passwordRepeat = document.querySelector("#password2");
  if (email.value == "") {
    errorContainer.classList.add("visible");
    email.classList.add("defeat");
    email.classList.remove("success");

    let err = document.createElement("li");
    err.innerText = "Le champ email ne peut pas être vide";

    errorList.appendChild(err);
  } else {
    errorContainer.classList.remove("visible");
    email.classList.remove("defeat");
    email.classList.add("success");
  }

  let passCheck = new RegExp(
    "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[-+_!@#$%^&*.,?]).+$"
  );
  console.log(passCheck.test(password.value));
  if (password.value != passwordRepeat.value) {
    passwordRepeat.classList.remove("success");
    errorContainer.classList.add("visible");
    passwordRepeat.classList.add("defeat");
    let err = document.createElement("li");
    err.innerText = "Les mots de passes sont différents";
    errorList.appendChild(err);
  } else {
    errorContainer.classList.remove("visible");
    passwordRepeat.classList.remove("defeat");
    passwordRepeat.classList.add("success");
    let err = document.querySelector("li");
  }

  if (pseudo.value.length < 6) {
    errorContainer.classList.add("visible");
    pseudo.classList.add("defeat");
    pseudo.classList.remove("success");

    let err = document.createElement("li");
    err.innerText = "Le pseudo doit contenir au moins 6 caractères";

    errorList.appendChild(err);
  } else {
    errorContainer.classList.remove("visible");
    pseudo.classList.remove("defeat");
    pseudo.classList.add("success");
    let err = document.querySelector("li");
  }

  if (
    password.value.length < 10 ||
    (passCheck.test(password.value) == false &&
      err == "Le champ email ne peut pas être vide")
  ) {
    errorContainer.classList.add("visible");
    password.classList.add("defeat");
    password.classList.remove("success");

    let err = document.createElement("li");
    err.innerText =
      "Le mot de passe doit faire 10 caractères minimum, contenir minuscule, majuscule, chiffre, caractère spécial";

    errorList.appendChild(err);
  } else {
    password.classList.remove("defeat");
    password.classList.add("success");
    errorContainer.classList.remove("visible");
    let err = document.querySelector("li");
  }

  if (
    pseudo.classList.contains("success") &&
    email.classList.contains("success") &&
    password.classList.contains("success") &&
    passwordRepeat.classList.contains("success")
  ) {
    successContainer.classList.add("visible");
    let err = document.createElement("li");
    err.innerText = "Formulaire envoyé !";
    successList.appendChild(err);
  }
});
