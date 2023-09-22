const form = document.getElementById("form");
const container = document.querySelector('.container');
const emailInput = document.getElementById('email');
const errorMsg = document.querySelector('.error-msg');
const successMsg = document.querySelector('.success-msg-cont');
const exitBtn = document.getElementById('dismiss');
let mailFormat = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;


form.addEventListener('submit', (e) => {
    if (!emailInput.value.match(mailFormat)) {
        emailInput.classList.toggle('invalid');
        errorMsg.classList.toggle('error-msg-active');
        e.preventDefault();
        return false;
    } else {
        container.classList.add('container-hide');
        successMsg.classList.remove('success-msg-cont');
        successMsg.classList.add('success-msg-active');
        emailInput.value = '';
        return true;
    }
});

exitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    successMsg.classList.remove('success-msg-active');
    successMsg.classList.add('success-msg-cont');
    container.classList.remove('container-hide');
});
