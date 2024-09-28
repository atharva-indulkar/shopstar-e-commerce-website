// Forget Page JS

const phoneNumber = document.querySelector(".phoneNumber");
const newPassword = document.querySelector(".newPassword");
const confirmPassword = document.querySelector(".confirmPassword");
const reset = document.querySelector(".reset");

let userFound = false;

reset.addEventListener("click", (e) => {
  e.preventDefault();
  if (newPassword.value === confirmPassword.value) {
    if (newPassword.value !== localStorage.getItem(`${phoneNumber.value}`)) {
      for (let i = 0; i < localStorage.length; i++) {
        if (phoneNumber.value === localStorage.key(i)) {
          localStorage.setItem(`${phoneNumber.value}`, `${newPassword.value}`);
          alert("Password changed successfully");
          userFound = true;
          location = "login.html";
        }
      }
    } else {
      userFound = true
      alert("Existing password and current password should not be same");
    }
  } else {
    userFound = true
    alert("Incorrect password");
  }
  if (userFound === false) {
    alert("Username not found");
  }
});