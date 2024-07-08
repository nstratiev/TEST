export function setLocalStorageObj(obj, formName) {
  const stringData = JSON.stringify(obj);
  localStorage.setItem(formName, stringData);
}

export function gettLocalStorageObj(formName) {
  const obj = JSON.parse(localStorage.getItem(formName));
  return obj;
}

export function clearLocalStorageGlobal() {
  localStorage.clear();
}

export function populateLocaleStorageData(formsArr) {
  for (const formElem of formsArr) {
    const localStorageObj = gettLocalStorageObj(formElem.name);

    if (localStorageObj === null) {
      console.info('No localStorage for this form ...');
      return null;
    }

    for (const key in localStorageObj) {
      // const target = formElem[key];
      const target = formElem.querySelector(`input[name=${key}]`);
      target.value = localStorageObj[key];
    }

  }

}

function deleteLocalStorageObj(formName) {
  localStorage.removeItem(formName);
}
