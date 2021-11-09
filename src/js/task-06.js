const textInput = document.querySelector("#validation-input");
textInput.addEventListener('blur', () => {
    const inputLength = textInput.value.length;
    if (inputLength === Number(textInput.dataset.length)) {
        textInput.classList.add('valid');
    } else {
        textInput.classList.add('invalid');
    }
})