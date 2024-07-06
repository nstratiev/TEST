// Focusout validation
export function attachFocusoutValidation(allInputs_fMain) {
  for (const field of allInputs_fMain) {
    field.addEventListener('focusout', () => focusoutEmptyFieldValidation(field));
    field.addEventListener('focusout', () => focusoutOutOfRangeValidation(field));
  }
}

function focusoutOutOfRangeValidation(currentField) {
  if (currentField.type === 'number' && currentField.value !== '') {

    const num = Number(currentField.value);
    const minLimit = Number(currentField.min);
    const maxLimit = Number(currentField.max);

    if (num < minLimit || num > maxLimit) {
      currentField.style.outline = '2px solid red';
      return false;

    } else {
      currentField.style.outline = 'none';
      return true
    }
  }
}

function focusoutEmptyFieldValidation(currentField) {
  if (currentField.required === true) {
    if (currentField.value === '') {
      currentField.style.outline = '2px solid green';

    } else {
      currentField.style.outline = 'none';
    }

  }
}