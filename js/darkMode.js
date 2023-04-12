
const action = document.querySelector('.btn__action');
const title = document.querySelector('.title');

action.addEventListener('click', function () {
    document.body.classList.toggle ("dark--theme");
    if (document.body.classList.contains('dark--theme')) {
        icon.src = "/images/moon.png"
        title.textContent = 'Dark Mode';
    }
    else {
        icon.src = "/images/sun.png"  
        title.textContent = 'Light Mode';
    }

} )




