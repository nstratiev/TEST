// On first page load
document.addEventListener('DOMContentLoaded', (ev) => {
  populateLocaleStorageData([formMain]);
  onSubmit_initialLoad(ev);
});

// Listeners
attachFocusoutValidation(formMain);

btnSubmit_fMain.addEventListener('click', (ev) => onSubmit_fMain(ev));
btnReset_fMain.addEventListener('click', (ev) => onReset_fMain(ev));
btnSave_fMain.addEventListener('click', (ev) => onSave_fMain(ev));

btnModal.addEventListener('click', onModalConfirm);
btnGlobalReset.addEventListener('click', onGlobalReset);


import { btnGlobalReset, btnModal, btnReset_fMain, btnSave_fMain, btnSubmit_fMain, formMain } from './elements.js';
import { onSave_fMain, onSubmit_fMain, onSubmit_initialLoad } from './event-handlers.js';
import { attachFocusoutValidation } from './focusout.js';
import { populateLocaleStorageData } from './storage.js';
import { onModalConfirm } from './modal.js';
import { onGlobalReset, onReset_fMain } from './reset.js';
