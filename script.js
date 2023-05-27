const signupPage = document.querySelector(".signup-btn");
const signupBtn = document.getElementById("signup-form");
const logoutBtn = document.getElementById("logout-btn");
const profilePage = document.querySelector(".profile-btn");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("pw");
const cpasswordInput = document.getElementById("c-pw");
const successMessage = document.getElementById("success-message")
const errorMessage = document.getElementById("error-message")
const errorMessage2 = document.getElementById("error-message2")
var accesstoken = "";

signupPage.addEventListener("click", () => {
    if (localStorage.getItem("accesstoken") != null) {
        location.replace("profile.html");
    }
    else {
        location.replace("index.html");
    }
})

profilePage.addEventListener("click", () => {
    if (localStorage.getItem("accesstoken") != null) {
        location.replace("profile.html");
    }
    else {
        location.replace("index.html");
    }
})

if (signupBtn) {
    signupBtn.addEventListener("click", () => {
        if (nameInput.value != "" && emailInput.value != "" && passwordInput.value != "" && cpasswordInput.value != "") {
            if (passwordInput.value != cpasswordInput.value) {
                errorMessage.style.display = "none"
                errorMessage.style.display = "noe"
                errorMessage2.style.display="block";
            } else {
                accesstoken = `${Math.random().toString(26).slice(2)}${Math.random().toString(26).slice(2, 6)}`;
                localStorage.setItem("accesstoken", accesstoken);
                localStorage.setItem("fullname", nameInput.value)
                localStorage.setItem("email", emailInput.value)
                localStorage.setItem("password", passwordInput.value)
                errorMessage2.style.display="none";
                errorMessage.style.display = "none"
                successMessage.style.display = "block"
                setTimeout(() => {
                    location.replace("profile.html");
                }, 2000)
            }
        }
        else {
            errorMessage2.style.display="none";
            errorMessage.style.display = "none"
            errorMessage.style.display = "block"
        }
    })
}

if (logoutBtn) {
    logoutBtn.addEventListener("click", () => {
        localStorage.removeItem("accesstoken");
        localStorage.removeItem("fullname");
        localStorage.removeItem("email");
        localStorage.removeItem("password");
        location.replace("index.html");
    })
}
