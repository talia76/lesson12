const plusBtnElement = document.getElementById('plus');
const minusBtnElement = document.getElementById('minus');
const counterElement = document.getElementById('counter');
const resetBtnElement = document.getElementById('reset');

let counter = 0;
const plusHandler = () => {
    counter++; // увеличиваем значение счетчика на +1
    counterElement.innerText = counter;
}
const minusHandler = () => {
    counter--; // уменьшаем значение счетчика на -1
    counterElement.innerText = counter;
}
const resetHandler = () => {
    counter = 0; // обнуляем значение счетчика
    counterElement.innerText = counter;
}

plusBtnElement.addEventListener('click', plusHandler);
minusBtnElement.addEventListener('click', minusHandler);
resetBtnElement.addEventListener('click', resetHandler);


