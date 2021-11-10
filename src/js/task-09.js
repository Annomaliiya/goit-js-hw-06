const btnColorChange = document.querySelector('.change-color');
const body = document.querySelector('body');
const colorName = document.querySelector('.color');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


function handleClick() {
  // body.style.backgroundColor = getRandomHexColor();
  // colorName.textContent = getRandomHexColor();

  const newColor = body.style.backgroundColor = getRandomHexColor();
  colorName.textContent = newColor;
}

btnColorChange.addEventListener('click', handleClick);
