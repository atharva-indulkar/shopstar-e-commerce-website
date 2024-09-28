// Login Page JS

const phone = document.querySelector(".phone");
const pass = document.querySelector(".pass");
const submit = document.querySelector(".login");

submit.addEventListener("click", (e) => {
    e.preventDefault();
  // console.log(userName.value, pass.value);
  if (
    phone.value &&
    pass.value === localStorage.getItem(`${phone.value}`, `${pass.value}`)
  ) {
    alert("Login successfull!");
    location= "../index.html";
  } else {
    alert("Invalid credentials!");
  }
});


