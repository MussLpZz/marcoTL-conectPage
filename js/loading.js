/* Marco.A. T.L */
const progressBar = document.querySelector('.progress');
const loadingDots = document.querySelector('.loading-dots');
const successMessage = document.getElementById('successMessage', 'h3');

setTimeout(() => {
  progressBar.style.width = '100%'; 

  setTimeout(() => {
    loadingDots.style.display = 'none';

    successMessage.style.display = 'block';
    h3.style.display = 'block';
  }, 3000);  
}, 1000); 
