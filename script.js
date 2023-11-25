const formElem = document.querySelector('form');
const btnClickElem = document.querySelector('.btn-click');
const textField = document.querySelector('.text-field');

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

  console.log(valAsNum);
  console.log(typeof valAsNum);
  console.log(Boolean(valAsNum));
}
