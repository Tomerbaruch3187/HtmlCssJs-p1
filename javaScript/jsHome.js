const button = document.querySelector('.sponserButton');
const weapper = document.querySelector('.weapperr');
const closeIt = document.querySelector('.close');

button.addEventListener('click', () => {
    weapper.style.display = "block";
});

closeIt.addEventListener('click', () => {
    weapper.style.display = "none";
});