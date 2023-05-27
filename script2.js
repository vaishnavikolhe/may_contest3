const pFullName =document.getElementById("p-fname");
const pEmail = document.getElementById("p-email");
const pPassword = document.getElementById("p-password");

pFullName.innerText=localStorage.getItem("fullname")
pEmail.innerText=localStorage.getItem("email")
pPassword.innerText=localStorage.getItem("password")
