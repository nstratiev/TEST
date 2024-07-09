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

export function getData(formElem, pageLoadingObj, resetResultFunc) {
  if (validationEmptyFields(formElem.elements, pageLoadingObj, resetResultFunc) === false) {
    return false;
  }

  if (validationOutOfRangeFields(formElem.elements, pageLoadingObj, resetResultFunc) === false) {
    return false;
  }

  const dataObj = getFormInputsDataObj(formElem);
  return dataObj;
}

// -- Form disable
export function disableForm(formElem) {
  toggleEnableDisableFormInputs_js(formElem, true);
}

export function enableForm(formElem) {
  toggleEnableDisableFormInputs_js(formElem, false);
}

function toggleEnableDisableFormInputs_js(formElem, bool) {
  for (const el of formElem.elements) {
    el.disabled = bool;
  }
}

function toggleEnableDisableFormInputs_fieldset(fieldsetElem, bool) {
  fieldsetElem.disabled = bool;
}


import { validationEmptyFields, validationOutOfRangeFields } from './validation.js';