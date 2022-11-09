import { refs } from './refs';

const { form, output } = refs;

const LOCALSTORAGE_KEY = 'tel';

// updateOutput();

form.addEventListener('change', saveMessage);

function saveMessage(evt) {
  evt.preventDefault();
  localStorage.setItem(LOCALSTORAGE_KEY, output.elements.message.value);
  //   updateOutput();
  //   form.reset();
}

// function updateOutput() {
//   output.textContent = localStorage.getItem(LOCALSTORAGE_KEY) || '';
// }
