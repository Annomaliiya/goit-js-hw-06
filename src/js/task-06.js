const textInput = document.querySelector("#validation-input");
textInput.addEventListener('blur', () => {
    const inputLength = textInput.value.length;
    if (inputLength === Number(textInput.dataset.length)) {
        textInput.classList.add('valid');
        textInput.classList.remove('invalid');
    } else {
        textInput.classList.remove('valid');
        textInput.classList.toggle('invalid');
    }
})