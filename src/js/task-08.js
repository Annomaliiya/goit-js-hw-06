const form = document.querySelector(".login-form");

const email = document.querySelector('[type = "email"]');

const password = document.querySelector('[type = "password"]');

function onSubmit(event) {
    event.preventDefault();

    const {
        elements: { email, password } } = event.currentTarget;


    if (email.value === "" || password.value === "") {
        return alert("Все поля должны быть заполнены!");
    }
    const user = {
        email: email.value,
        password: password.value
    }

    console.log(user);
    // console.log(`Email: ${email.value}, Password: ${password.value}`);
    event.currentTarget.reset();

};

form.addEventListener('submit', onSubmit);


