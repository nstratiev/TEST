export function printCurrentVersion() {
  printCalculatorVersion('0.9');
}

function printCalculatorVersion(calculatorVersion) {
  const versionElem = document.querySelector('#version');
  versionElem.textContent = calculatorVersion;
}
