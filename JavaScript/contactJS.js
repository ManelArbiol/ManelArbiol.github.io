document.addEventListener('DOMContentLoaded', function () {
    // Variables que canviaran
    let userForm = document.querySelector("form");
    let userName = document.querySelector("#text");
    let userEmail = document.querySelector("#email");
    let userTitle = document.querySelector("#textarea");

    // Constants dels missatges d'error
    const requiredFieldMessage = "Camp obligatori";
    const invalidEmailMessage = "El correu electrònic no és vàlid";
    const invalidNameMessage = "El nom no pot contenir números ni caràcters especials";

    // Afegir l'event listener per la validació quan cliquem a "Enviar Missatge"
    userForm.addEventListener("submit", onFormSubmit);

    function setFieldMessage(input, MsgText) {
        let msgElementP = input.parentNode.querySelector(".error");
        msgElementP.textContent = MsgText;
    }

    function validateName(name) {
        const namePattern = /^[a-zA-ZÀ-ÿ\s]+$/; // Només lletres i espais
        return namePattern.test(name);
    }

    function validateEmail(email) {
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailPattern.test(email);
    }

    function onFormSubmit(event) {
        let isFormInvalid = false;

        // Validació del nom d'usuari
        let userNameError = "";
        if (userName.value.length === 0) {
            isFormInvalid = true;
            userNameError = requiredFieldMessage;
        } else if (!validateName(userName.value)) {
            isFormInvalid = true;
            userNameError = invalidNameMessage;
        }
        setFieldMessage(userName, userNameError);

        // Validació del correu electrònic
        let userEmailError = "";
        if (userEmail.value.length === 0) {
            isFormInvalid = true;
            userEmailError = requiredFieldMessage;
        } else if (!validateEmail(userEmail.value)) {
            isFormInvalid = true;
            userEmailError = invalidEmailMessage;
        }
        setFieldMessage(userEmail, userEmailError);

        // Validació del títol
        let userTitleError = "";
        if (userTitle.value.length === 0) {
            isFormInvalid = true;
            userTitleError = requiredFieldMessage;
        }
        setFieldMessage(userTitle, userTitleError);

        if (isFormInvalid) {
            event.preventDefault();
        }
    }

    window.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        }
        else { header.classList.remove('scrolled');
        }
    });
});
