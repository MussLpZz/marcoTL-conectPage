/* Marco.A. T.L */
const menuIcon = document.querySelector('.menu'); 
const navbar = document.querySelector('.navbar'); 


menuIcon.addEventListener('click', () => {
  navbar.classList.toggle('active'); 
});