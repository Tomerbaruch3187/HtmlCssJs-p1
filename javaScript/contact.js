//Create The Variabels
const form = document.querySelector('form');
const userName = document.getElementById('userName');
const email = document.getElementById('email');

//show Error
function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = 'formControl error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}

//Show Sucsses
function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = 'formControl success';

}



//Prevent the Submit
form.addEventListener('submit', (event) => {
    event.preventDefault();
    if (userName.value == '') {
        showError(userName, 'User Name Required!');
    } else {
        showSuccess(userName);
    }
    if (email.value == '' || email.value.indexOf('@') == -1) {
        showError(email, 'Email Required!');
    } else {
        showSuccess(email);
    }
    if (lastName.value == '') {
        showError(lastName, 'last Name Required!');
    } else {
        showSuccess(lastName);
    }
})