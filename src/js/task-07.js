const fontSizeControlEl = document.querySelector('#font-size-control');

const text = document.querySelector('#text');
fontSizeControlEl.addEventListener('input', () => {
    text.style.fontSize = fontSizeControlEl.value + "px";
})