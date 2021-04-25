const form = document.querySelector('.box__form');
const email = document.querySelector('.box__email');


form.addEventListener('submit', e =>{
    e.preventDefault();
    checkInputValue();
})

function checkInputValue() {
    const emailValue = email.value.trim();
    let emailRegTest = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (emailValue === '') {
        let emailParent = email.parentElement;
        emailParent.classList.add('error');
        setTimeout(removeError, 4000)
    } else if (!(emailRegTest.test(emailValue))) {
        emailParent.classList.add('error');
        setTimeout(removeError, 4000);
    }
}


function removeError() {
    let emailParent = email.parentElement;
    emailParent.classList.remove('error');
}