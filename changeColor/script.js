const colorBtn = document.querySelector('.colorBtn');
const bodyBcg = document.querySelector('body');

const colors = ['yellow', 'red', '#5A7f78', 'green'];

colorBtn.addEventListener('click', changeColor);

function changeColor() {
    const random = Math.floor(Math.random()*colors.length);

    bodyBcg.style.backgroundColor = colors[random];
}