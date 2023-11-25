const formElem = document.querySelector('form');
const btnClickElem = document.querySelector('.btn-click');
const textField = document.querySelector('.text-field');
const outputElem = document.querySelector('.output');

formElem.addEventListener('keydown', (ev) => {
  if (ev.target.tagName === 'INPUT' && ev.key === 'Enter') {
    ev.preventDefault();
    onClick();
  }
});

btnClickElem.addEventListener('click', onClick);

function onClick(ev) {
  const val = textField.value;
  const valAsNum = Number(val);
  textField.value = '';

  outputElem.innerHTML += `${valAsNum}<br>${typeof valAsNum}<br>${Boolean(
    valAsNum
  )}`;
  outputElem.innerHTML += '<br>' + '*****' + '<br>';
  // console.log(valAsNum);
  // console.log(typeof valAsNum);
  // console.log(Boolean(valAsNum));
}
