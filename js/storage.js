export function setLocalStorageObj(obj, formName) {
  const stringData = JSON.stringify(obj);
  localStorage.setItem(formName, stringData);
}

export function gettLocalStorageObj(formName) {
  const obj = JSON.parse(localStorage.getItem(formName));
  return obj;
}

function clearLocalStorageObj(formName) {
  localStorage.removeItem(formName);
}

export function clearLocalStorage() {
  localStorage.clear();
}

export function populateLocaleStorageData(formElem) {
  const localStorageObj = gettLocalStorageObj(formElem.name);

  if (localStorageObj === null) {
    console.log('No localStorage for this form ...');
    return null;
  }

  for (const key in localStorageObj) {
    const target = formElem.querySelector(`input[name=${key}]`);
    target.value = localStorageObj[key];
  }
}