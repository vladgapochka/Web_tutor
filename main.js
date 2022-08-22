const openPopUp = document.getElementById('open_pop_up');
const  closePopUp = document.getElementById('pop_up_close');
const popUp = document.getElementById('pop_up');
const openPopUp1 = document.getElementById('z1');
const openPopUp2 = document.getElementById('z2');
const openPopUp3 = document.getElementById('z3');
const closeF = document.getElementById('ccc')

console.log(window.innerWidth);
openPopUp.onclick = () => popUp.style.display = (popUp.style.display === "block")?"none":"block";
openPopUp1.onclick = () => popUp.style.display = (popUp.style.display === "block")?"none":"block";
openPopUp2.onclick = () => popUp.style.display = (popUp.style.display === "block")?"none":"block";
openPopUp3.onclick = () => popUp.style.display = (popUp.style.display === "block")?"none":"block";
closePopUp.onclick = () => popUp.style.display = (popUp.style.display === "block")?"none":"block";
closeF.onclick = () => popUp.style.display = (popUp.style.display === "block")?"none":"block";

