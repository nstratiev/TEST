export function onSubmit_initialLoad(ev) {
  onSubmit(ev, formMain, { isFirstPageLoad: true }, printResult_formMain);
}

export function onSubmit_fMain(ev) {
  onSubmit(ev, formMain, { isFirstPageLoad: false }, printResult_formMain, resetResults_fMain);
}

function onSubmit(ev, formElem, loadingConfig, printFunc, resetResultFunc) {
  if (loadingConfig.isFirstPageLoad !== true) {
    ev.preventDefault();
  }

  const dataObj = getData(formElem, loadingConfig, resetResultFunc);

  if (dataObj === false) {
    return;
  }

  setLocalStorageObj(dataObj, formElem.name);
  printFunc(dataObj);

  if (loadingConfig.isFirstPageLoad !== true) {
    setTimeout(() => showModal(ev), 200);
  }

}

export function onSave_fMain(ev) {
  onSave(ev, formMain);
}

function onSave(ev, formElem) {
  const currFormData = getFormInputsDataObj(formElem);
  const currFormName = formElem.name;
  setLocalStorageObj(currFormData, currFormName);
}


import { printResult_formMain } from './print.js';
import { showModal } from './modal.js';
import { formMain } from './elements.js';
import { getData, getFormInputsDataObj } from './generic.js';
import { setLocalStorageObj } from './storage.js';
import { resetResults_fMain } from './reset.js';
