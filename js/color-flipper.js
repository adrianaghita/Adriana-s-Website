const colors = ['Olive', 'Beige', 'Bisque', 'Ivory', 'Salmon', 'Fuchsia', 'Tan', 'Silver', 'Plum', 'Peachpuff', 'Moccasin', 'Mintcream', 'Teal', 'Brown', 'Chocolate', 'Coral', 'Khaki' ];
const btn = document.getElementById("btn");
const color = document.getElementById('color');


btn.addEventListener('click', function() {
    const randomNumber = getRandomNumber();
    document.body.style.backgroundColor = colors[randomNumber];
    console.log(randomNumber);
    color.textContent = colors[randomNumber];
    color.style.color = colors[randomNumber];
});

function getRandomNumber () {
    return Math.floor(Math.random() * colors.length);
}