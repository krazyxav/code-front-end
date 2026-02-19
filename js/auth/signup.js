const inputName = document.getElementById("NameInput");
const inputFirstName = document.getElementById("FirstNameInput");
const inputEmail = document.getElementById("emailInput");
const inputPassword = document.getElementById("passwordInput");
const inputValidatePassword = document.getElementById("validatePasswordInput");
const registerForm = document.getElementById("registerForm");

const btnInscriptionValidation = document.getElementById("btn-inscription-validation");

inputName.addEventListener("keyup", validateForm);
inputFirstName.addEventListener("keyup", validateForm);
inputEmail.addEventListener("keyup", validateForm);
inputPassword.addEventListener("keyup", validateForm);
inputValidatePassword.addEventListener("keyup", validateForm);

btnInscriptionValidation.addEventListener("click", registerUser);

//revoir ce fonctionnement, les zones non correctes ne devraient
//apparaitre que si le bouton inscription est appuyé plutôt qu'à
//chaque appui sur une touche du clavier

function validateForm(){
    const nameOk = validateRequired(inputName);
    const firstNameOk = validateRequired(inputFirstName);
    const emailOk = validateMail(inputEmail);
    const passwordOk = validatePassword(inputPassword);
    const passwordConfirmedOk = validateConfirmationPassword(inputPassword, inputValidatePassword);

    if(nameOk &&  firstNameOk && emailOk && passwordOk && passwordConfirmedOk) {
        btnInscriptionValidation.disabled= false;
    } else {
        btnInscriptionValidation.disabled = true;
    }
}


function validateRequired(input){
    if(input.value != '') {
        input.classList.add("is-valid");
        input.classList.remove("is-invalid");
        return true;
    } else {
        input.classList.remove("is-valid");
        input.classList.add("is-invalid");
        return false;
    }
}


function validateMail(input){
    //Définir mon regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const mailUser = input.value;
    if(mailUser.match(emailRegex)){
        input.classList.add("is-valid");
        input.classList.remove("is-invalid"); 
        return true;
    }
    else{
        input.classList.remove("is-valid");
        input.classList.add("is-invalid");
        return false;
    }
}


function validatePassword(input){
    //Définir mon regex
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_])[A-Za-z\d\W_]{8,}$/;
    const passwordUser = input.value;
    if(passwordUser.match(passwordRegex)){
        input.classList.add("is-valid");
        input.classList.remove("is-invalid"); 
        return true;
    }
    else{
        input.classList.remove("is-valid");
        input.classList.add("is-invalid");
        return false;
    }
}


function validateConfirmationPassword(inputPwd, inputConfirmPwd){
    if(inputPwd.value == inputConfirmPwd.value){
        inputConfirmPwd.classList.add("is-valid");
        inputConfirmPwd.classList.remove("is-invalid");
        return true;
    }
    else{
        inputConfirmPwd.classList.add("is-invalid");
        inputConfirmPwd.classList.remove("is-valid");
        return false;
    }
}

function registerUser() {

    let dataForm = new FormData(registerForm);

    // let name = dataForm.get("nameInput");
    // let firstName = dataForm.get("firstNameInput");
    // let email = dataForm.get("emailInput");
    // let password = dataForm.get("passwordInput");


    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
    "firstName": dataForm.get("firstNameInput"),
    "lastName": dataForm.get("nameInput"),
    "email": dataForm.get("emailInput"),
    "password": dataForm.get("passwordInput")
    });

    const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow"
    };

    fetch("http://127.0.0.1:8000/api/registration", requestOptions)
    .then((response) => response.json())
    .then((result) => console.log(result))
    .catch((error) => console.error(error));
}