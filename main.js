const statusbar = document.getElementById('statusbar');
const navMenu = document.getElementById('home1');
const closeMenu = document.getElementById('close');

function mobileMenu() {
  if (navMenu.style.display === 'none') {
    navMenu.style.display = 'block';
  } else {
    navMenu.style.display = ' none';
  }
}

statusbar.addEventListener('click', mobileMenu);
// close menc

function menuClose() {
  if (navMenu.style.display === 'none') {
    navMenu.style.display = 'block';
  } else {
    navMenu.style.display = ' none';
  }
}
closeMenu.addEventListener('click', menuClose);
