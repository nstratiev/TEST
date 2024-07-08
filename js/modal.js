// Modal functions
export function showModal() {
  modalBoxElem.style.display = 'flex';
  disableForm(formMain);
  btnModal.focus();
}

export function hideModal() {
  modalBoxElem.style.display = 'none';
  enableForm(formMain);
}

export function onModalConfirm(formElem) {
  hideModal();
  formElem.focus();
  // autofocusedInputElem.focus();
}


import { autofocusedInputElem, btnModal, formMain, modalBoxElem } from './elements.js';
import { disableForm, enableForm } from "./generic.js";