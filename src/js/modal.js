import { refs } from './refs.js';

const { formButton, closeBtn, modalWindow, backdrop } = refs;

formButton.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);
modalWindow.addEventListener('click', onBackdropClick);

function openModal() {
  window.addEventListener('keydown', onEscKeyPress);
  modalWindow.classList.remove('visually-hidden');
}

function closeModal() {
  window.removeEventListener('keydown', onEscKeyPress);
  modalWindow.classList.add('visually-hidden');
}

function onBackdropClick(event) {
  if (event.currentTarget === event.target) {
    closeModal();
  }
}

function onEscKeyPress(event) {
  const ESC_KEY_CODE = 'Escape';
  const isEscKey = event.code === ESC_KEY_CODE;

  if (isEscKey) {
    closeModal();
  }
}
