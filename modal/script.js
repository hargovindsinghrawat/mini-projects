'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

//function for opening the modal
const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

//function for closing the modal
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++)
  //Onclick the button , Open the Modal
  btnsOpenModal[i].addEventListener('click', openModal);

//On click the button , Close the Modal
btnCloseModal.addEventListener('click', closeModal);
//On click the outer section (overlay), Close the Modal
overlay.addEventListener('click', closeModal);

//close the modal by Escape key On press
document.addEventListener('keydown', function (e) {
  if (e.key == 'Escape' && !modal.classList.contains('hidden')) closeModal();
});
