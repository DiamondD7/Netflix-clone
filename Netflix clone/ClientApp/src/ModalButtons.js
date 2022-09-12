const modal = document.querySelector('.modal');
const btnsOpenModal = document.querySelectorAll('.show--Modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close--modal');

for (let i = 0; i < btnsOpenModal.length; i++) {
    btnsOpenModal[i].addEventListener('click', function () {
        modal.classList.remove('hidden');
        overlay.classList.remove('hidden');
    })
}