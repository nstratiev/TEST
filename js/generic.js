export function getFormInputsDataObj(formElem) {
  const formInputsCollection = formElem.querySelectorAll('input');

  const dataObj = {};

  for (const field of formInputsCollection) {
    if (field.type === 'text') {
      dataObj[field.name] = field.value;

    } else if (field.type === 'number') {
      if (field.value === '') {
        dataObj[field.name] = field.value;
      } else {
        dataObj[field.name] = Number(field.value);
      }
    }

  }

  return dataObj;
}

export function getData(formElem, pageLoadingObj) {
  if (validationEmptyFields(formElem.elements, pageLoadingObj) === false) {
    return false;
  }

  if (validationOutOfRangeFields(formElem.elements, pageLoadingObj) === false) {
    return false;
  }

  const dataObj = getFormInputsDataObj(formElem);
  return dataObj;
}

// -- Form disable
export function disableForm(formElem) {
  toggleDisableEnableFormInputs(formElem, true);
  toggleDisableEnableFormButtons(formElem, true);
}

export function enableForm(formElem) {
  toggleDisableEnableFormInputs(formElem, false);
  toggleDisableEnableFormButtons(formElem, false);
}

function toggleDisableEnableFormInputs(formElem, bool) {
  const allInputs = formElem.querySelectorAll('input');

  for (const input of allInputs) {
    input.disabled = bool;
  }
}

function toggleDisableEnableFormButtons(formElem, bool) {
  const allButtons = formElem.querySelectorAll('button');

  for (const btn of allButtons) {
    btn.disabled = bool;
  }
}


import { validationEmptyFields, validationOutOfRangeFields } from './validation.js';