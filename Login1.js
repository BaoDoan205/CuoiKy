const input = document.querySelector(".input");
const eyeOpen = document.querySelector(".eye-open");
const eyeClose = document.querySelector(".eye-close");
eyeOpen.addEventListener("click", function () {
  eyeOpen.classList.add("hidden");
  eyeClose.classList.remove("hidden");
  input.setAttribute("type", "password");
});
eyeClose.addEventListener("click", function () {
  eyeOpen.classList.remove("hidden");
  eyeClose.classList.add("hidden");
  input.setAttribute("type", "text");
});

const btn_open = document.getElementById('btn-open');
const btn_close = document.getElementById('btn-close');
const modal_container = document.getElementById('modal-container');
const modal_demo = document.getElementById('modal-demo');
btn_open.addEventListener('click', ()=>{
    modal_container.classList.add('show');
});
btn_close.addEventListener('click', ()=>{
    modal_container.classList.remove('show');
});
modal_container.addEventListener('click', (e)=>{
    if(!modal_demo.contains(e.target)){
        btn_close.click();
    }
});
 