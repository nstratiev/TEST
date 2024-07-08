export function onReset_fMain() {
  onReset(null, formMain, resetResults_fMain);
}

export function resetResults_fMain() {
  resultElem_fMain.textContent = '#####';
}

function onReset(ev, formElem, resetResultHandler) {
  formElem.reset();
  resetFieldsOutline(formElem);
  resetResultHandler();
}

function resetFieldsOutline(formElem) {
  const formInputsCollection = formElem.querySelectorAll('input');

  for (const field of formInputsCollection) {
    field.style.outline = 'none';
  }
}

export function onGlobalReset() {
  const confirmed = confirm('Global reset cannot be reverted!\nAre you sure?');

  if (confirmed) {
    clearLocalStorageGlobal();
    formMain.reset();
    location.reload();
  }
}


import { formMain } from './elements.js';
import { resultElem_fMain } from "./elements.js";
import { clearLocalStorageGlobal } from './storage.js';
