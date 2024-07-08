// Validation
export function validationOutOfRangeFields(formFieldsArr, pageLoadingObj) {
  for (const item of formFieldsArr) {
    if (item.type !== 'number') {
      continue;
    }

    const num = Number(item.value);
    const minLimit = Number(item.min);
    const maxLimit = Number(item.max);

    if (num < minLimit || num > maxLimit) {
      if (pageLoadingObj.isFirstPageLoad !== true) {
        resetResults_fMain();
        item.focus();

        setTimeout(() => {
          alert(`The value should be in the range: [ ${minLimit} - ${maxLimit} ] ...`);
          item.value = '';
        }, 0);
      }

      return false;
    }
  }

  return true;
}

export function validationEmptyFields(formFieldsArr, pageLoadingObj) {
  for (const item of formFieldsArr) {
    if (item.tagName !== 'INPUT' || item.required === false) {
      continue;
    }

    if (item.value === '') {
      if (pageLoadingObj.isFirstPageLoad !== true) {
        resetResults_fMain();
        item.focus();

        setTimeout(() => {
          alert('Please, fill all of the required fields ...');
          item.value = '';
        }, 0);
      }

      return false;
    }
  }

  return true;
}

import { resetResults_fMain } from './reset.js';