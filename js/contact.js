function validateEmail(e) {
    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    const inputValue = e.target.value
    const emailError = document.getElementById('email-error')
    if (reg.test(inputValue) == false) {
        emailError.innerText = 'Looks like this is not an email'
        //        errorEmail.innerText = 'Looks like this is not an email';
        return false;
    } else {
        // e.preventDefault();
        emailError.innerText = ""
        //        errorEmail.innerText = "";
        return true;
    }
}

const emailField = document.getElementById('email')
if (emailField) {
    emailField.addEventListener("input", validateEmail)
} else {
    console.log('nincs');
}
