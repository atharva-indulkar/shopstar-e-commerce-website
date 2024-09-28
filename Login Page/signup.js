// Sign Up Page JS

const phoneNumber = document.querySelector(".phoneNumber");
const password = document.querySelector(".password");
const confirmPass = document.querySelector(".confirmPassword");
const signUp = document.querySelector(".signup");

signUp.addEventListener("click", (e) => {
  e.preventDefault();
  // console.log(userName.value, pass.value);
  if (password.value === confirmPass.value) {
    if (
      phoneNumber.value &&
      password.value ===
        localStorage.getItem(`${phoneNumber.value}`, `${password.value}`)
    ) {
      alert("User already exists");
      location = "login.html";
    } else {
      localStorage.setItem(`${phoneNumber.value}`, `${password.value}`);
      alert("Successfully Signed in");
      location = "login.html";
    }
  } else {
    alert("Incorrect password");
  }
});
