let text = 'visibility', type = 'password';
const buttomYey = document.querySelector('.material-symbols-outlined')

buttomYey.addEventListener("click", () => {
  text === 'visibility' ? text = 'visibility_off': text = 'visibility' ;
  document.querySelector(".material-symbols-outlined").innerHTML= text;
  type === 'password' ? type = 'text' : type = 'password';
  document.querySelector('.pass').setAttribute ("type",type)});

const buttom = document.querySelector('.button');

buttom.addEventListener('click', () => {
  let  inputs = document.querySelectorAll('div input');
  if (inputs[0].value && inputs[1].value) {
    alert(0)
  }else {
    alert(1)
  }

})