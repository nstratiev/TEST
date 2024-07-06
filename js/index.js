// On first page load
document.addEventListener('DOMContentLoaded', (ev) => {
  populateLocaleStorageData(formMain, 'formMain');

  onSubmit_fMain(ev, { isFirstPageLoad: true })
});

// Listeners
attachFocusoutValidation(allNumberInputs_fMain);

btnSubmit_fMain.addEventListener('click', (ev) => onSubmit_fMain(ev, {}));
btnReset_fMain.addEventListener('click', () => onReset_fMain(true));
btnSave_fMain.addEventListener('click', (ev) => onSave_fMain(ev));
btnModal.addEventListener('click', onModalConfirm);
btnGlobalReset.addEventListener('click', onGlobalReset);


import { allNumberInputs_fMain, btnGlobalReset, btnModal, btnReset_fMain, btnSave_fMain, btnSubmit_fMain, formMain } from './elements.js';
import { onSave_fMain, onSubmit_fMain } from './event-handlers.js';
import { attachFocusoutValidation } from './focusout.js'; import { populateLocaleStorageData } from './storage.js';
import { onModalConfirm } from './modal.js';
import { onGlobalReset, onReset_fMain } from './reset.js';
