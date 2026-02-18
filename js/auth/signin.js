const inputMail = document.getElementById("EmailInput");
const inputPassword = document.getElementById("PasswordInput");
const btnSignin = document.getElementById("btnSignin");


btnSignin.addEventListener("click", checkCredentials );



function checkCredentials(){
    //appel de l'api pour vérification des credentials



    if (inputMail.value == "test@mail.com" && inputPassword.value == "123") {
        //récupérer le vrai token
        const token="nùmjkehlerhmljerlhjrljg";

        setToken(token);
        setCookie(roleCookieName, "client", 7);

        window.location.replace("/");
    } else {
        inputMail.classList.add("is-invalid");
        inputPassword.classList.add("is-invalid");
    }

}


