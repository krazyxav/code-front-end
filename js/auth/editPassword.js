const inputPassword = document.getElementById("passwordInput");
const inputValidatePassword = document.getElementById("validatePasswordInput");

inputPassword.addEventListener("keyup", validateForm);
inputValidatePassword.addEventListener("keyup", validateForm);


function validateForm(){
    const passwordOk = validatePassword(inputPassword);
    const passwordConfirmedOk = validateConfirmationPassword(inputPassword, inputValidatePassword);

    if(nameOk &&  firstNameOk && emailOk && passwordOk && passwordConfirmedOk) {
        btnInscriptionValidation.disabled= false;
    } else {
        btnInscriptionValidation.disabled = true;
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