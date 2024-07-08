// ##### Reset #####
export function resetResults_fMain() {
  resultElem_fMain.textContent = '#####';
}

export function onReset_fMain(ev, autofocusBool) {
  formMain.reset();
  resetFieldsOutline(formMain);

  resetResults_fMain();

  if (autofocusBool === true) {
    autofocusedInputElem.focus();
  }
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
    onReset_fMain();
  }
}


import { autofocusedInputElem, formMain, resultElem_fMain } from "./elements.js";
import { clearLocalStorageGlobal } from './storage.js';
