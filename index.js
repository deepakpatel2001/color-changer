const button = document.querySelector('.changer');
const body = document.querySelector('body');
const showColorCode = document.querySelector('.color-code');
showColorCode.innerHTML = "#F1f5f8";
button.addEventListener('click', () => {
    console.log(Math.floor(Math.random() * 16777215).toString(16));

    var randomColor = Math.floor(Math.random() * 16777215).toString(16)
    body.style.backgroundColor =
        '#' + randomColor;
    console.log(randomColor);
    showColorCode.innerHTML = '#' + randomColor
});