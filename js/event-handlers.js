// Event handlers
export function onSubmit_fMain(ev, pageLoadingObj) {
  if (pageLoadingObj.isFirstPageLoad !== true) {
    ev.preventDefault();
  }

  const formData = getData_formMain(allInputs_fMain, pageLoadingObj);

  if (formData === false) {
    return;
  }

  setLocalStorageObj(formData, 'formMain');
  printResult_formMain(formData);

  if (pageLoadingObj.isFirstPageLoad !== true) {
    setTimeout(showModal, 200);
    // showModal();
  }

}

export function onSave_fMain(ev) {
  const currForm = ev.currentTarget.parentElement;
  const currFormData = getFormData(currForm);
  const currFormName = ev.currentTarget.parentElement.name;
  setLocalStorageObj(currFormData, currFormName);
}


import { printResult_formMain } from './print.js';
import { showModal } from './modal.js';
import { allInputs_fMain } from './elements.js';
import { getData_formMain, getFormData } from './generic.js';
import { setLocalStorageObj } from './storage.js';