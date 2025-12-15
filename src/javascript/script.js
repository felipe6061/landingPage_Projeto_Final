const mobileBtn = document.getElementById('mobile_btn');
const mobileMenu = document.getElementById('mobile_menu');
const closeBtn = document.querySelector('.close-btn');

mobileBtn.addEventListener('click', () => {
  mobileMenu.classList.add('active');
});

closeBtn.addEventListener('click', () => {
  mobileMenu.classList.remove('active');
});