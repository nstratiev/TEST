// ##### Generic functions #####

// -- Get data
export function getFormData(formElem) {
  const obj = {};
  const allFields = formElem.querySelectorAll('input');

  for (const field of allFields) {
    const key = field.name;
    let val = field.type === 'number' ? Number(field.value) : field.value;
    if (val === 0) {
      val = '';
    }

    obj[key] = val;
  }

  return obj;
}

function setDataObjFromFormFields(formFieldsCollection) {
  const dataObj = {};

  for (const el of formFieldsCollection) {
    if (el.type === 'text') {
      dataObj[el.name] = el.value;
    } else if (el.type === 'number') {
      dataObj[el.name] = Number(el.value);
    }
  }

  return dataObj;
}

export function getData_formMain(allInputs_fMain, pageLoadingObj) {

  if (validationEmptyFields(allInputs_fMain, pageLoadingObj) === false) {
    return false;
  }

  if (validationOutOfRangeFields(allInputs_fMain, pageLoadingObj) === false) {
    return false;
  }

  const dataObj = setDataObjFromFormFields(allInputs_fMain);
  return dataObj;
}

function validationOutOfRangeFields(formFieldsArr, pageLoadingObj) {
  for (const item of formFieldsArr) {
    if (item.type !== 'number') {
      continue;
    }

    const num = Number(item.value);
    const minLimit = Number(item.min);
    const maxLimit = Number(item.max);

    if (num < minLimit || num > maxLimit) {
      if (pageLoadingObj.isFirstPageLoad !== true) {
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

function validationEmptyFields(formFieldsArr, pageLoadingObj) {
  for (const item of formFieldsArr) {
    if (item.required === false) {
      continue;
    }

    if (item.value === '') {
      if (pageLoadingObj.isFirstPageLoad !== true) {
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