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

export function onModalConfirm(ev, btnAfterFocus) {
  hideModal();
  btnAfterFocus.focus();
}


import { btnModal, formMain, modalBoxElem } from './elements.js';
import { disableForm, enableForm } from "./generic.js";