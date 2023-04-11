
const hero__action = document.querySelector('.hero__action');
const title = document.querySelector('.hero__title');

hero__action.addEventListener('click', function () {
    document.body.classList.toggle ("dark--theme");
    if (document.body.classList.contains('dark--theme')) {
        icon.src = "/images/sun.png"
        title.textContent = 'Dark Mode';
    }
    else {
        icon.src = "/images/moon.png"  
        title.textContent = 'Light Mode';
    }

} )




