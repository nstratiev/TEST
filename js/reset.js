// ##### Reset #####
export function onReset_fMain(autofocusBool) {
  formMain.reset();
  resultElem_fMain.textContent = '#####';
  resetOutline_fMain();

  if (autofocusBool === true) {
    autofocusedInputElem.focus();
  }
}

function resetOutline_fMain() {
  for (const field of allNumberInputs_fMain) {
    field.style.outline = 'none';
  }
}

export function onGlobalReset() {
  const confirmed = confirm('Global reset cannot be reverted!\nAre you sure?');

  if (confirmed) {
    clearLocalStorage();
    onReset_fMain();
  }
}


import { allNumberInputs_fMain, autofocusedInputElem, formMain, resultElem_fMain } from "./elements.js";
import { clearLocalStorage } from './storage.js';
