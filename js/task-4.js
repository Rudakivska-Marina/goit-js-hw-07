/*Напиши скрипт управління формою логіна.*/

const refs = {
    form: document.querySelector('.login-form'),
}

refs.form.addEventListener('submit', onFormSumbit);

function onFormSumbit(event) {
    event.preventDefault();

    const { email, password } = event.currentTarget.elements;

    if (!email.value.trim() || !password.value.trim()) {
        return alert('All form fields must be filled in');
    }

    console.log({ email: email.value, password: password.value });

    event.currentTarget.reset();
    
}