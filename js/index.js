// On first page load
document.addEventListener('DOMContentLoaded', (ev) => {
  populateLocaleStorageData(formMain);

  onSubmit_fMain(ev, { isFirstPageLoad: true })
});

// Listeners
attachFocusoutValidation(formMain);

btnSubmit_fMain.addEventListener('click', (ev) => onSubmit_fMain(ev, {}));
btnReset_fMain.addEventListener('click', (ev) => onReset_fMain(ev, false));
btnSave_fMain.addEventListener('click', () => onSave_fMain(formMain));
btnModal.addEventListener('click', () => onModalConfirm(formMain));
btnGlobalReset.addEventListener('click', onGlobalReset);


import { btnGlobalReset, btnModal, btnReset_fMain, btnSave_fMain, btnSubmit_fMain, formMain } from './elements.js';
import { onSave_fMain, onSubmit_fMain } from './event-handlers.js';
import { attachFocusoutValidation } from './focusout.js'; import { populateLocaleStorageData } from './storage.js';
import { onModalConfirm } from './modal.js';
import { onGlobalReset, onReset_fMain } from './reset.js';
