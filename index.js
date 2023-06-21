let n = 0
function troca() {
  const yey = document.querySelector('.senha')
  if (n == 0) {
    yey.setAttribute ("type","text")
    document.querySelector(".material-symbols-outlined").innerHTML="visibility_off";
    n = 1
  }
  else {
    yey.setAttribute ("type","password")
    document.querySelector(".material-symbols-outlined").innerHTML="visibility"
    n = 0
  }
    
}