export function printResult_formMain(dataObj) {
  const integer = dataObj.integer;
  const decimal = dataObj.decimal;
  const unit = dataObj.unit;

  resultElem_fMain.textContent = `${integer + decimal} ${unit}`;
}


import { resultElem_fMain } from './elements.js';