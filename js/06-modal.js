const openModaleButton = document.querySelector('button[data-action="open-modal"]');
const closeModaleButton = document.querySelector('button[data-action="close-modal"]');
let backdrop = document.querySelector('.js-backdrop');

openModaleButton.addEventListener('click', openModaleHandler);
closeModaleButton.addEventListener('click', closeModaleHandler);
backdrop.addEventListener('click',onClickBackdrop);

function openModaleHandler() {
    window.addEventListener('keydown', onPressEscape);
    document.body.classList.add('show-modal')
};
function closeModaleHandler() {
    window.removeEventListener('keydown', onPressEscape);
    document.body.classList.remove('show-modal')
};
function onClickBackdrop(event) {
     if (event.target === event.currentTarget) {
        closeModaleHandler()
    }
};
function onPressEscape(event) {
    if (event.code === 'Escape') {
            closeModaleHandler()
        }
};