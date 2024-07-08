// Event handlers
export function onSubmit_fMain(ev, loadingConfig) {
  if (loadingConfig.isFirstPageLoad !== true) {
    ev.preventDefault();
  }

  const dataObj = getData_formMain(formMain, loadingConfig);

  if (dataObj === false) {
    return;
  }

  setLocalStorageObj(dataObj, 'formMain');
  printResult_formMain(dataObj);

  if (loadingConfig.isFirstPageLoad !== true) {
    setTimeout(showModal, 200);
  }

}

export function onSave_fMain(formElem) {
  const currFormData = getFormInputsDataObj(formElem);
  const currFormName = formElem.name;
  setLocalStorageObj(currFormData, currFormName);
}


import { printResult_formMain } from './print.js';
import { showModal } from './modal.js';
import { formMain } from './elements.js';
import { getData_formMain, getFormInputsDataObj } from './generic.js';
import { setLocalStorageObj } from './storage.js';