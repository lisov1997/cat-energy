const navMain = document.querySelector('.page-header__main-nav');
const navToggler = document.querySelector('.page-header__main-nav-toggler');

navMain.classList.add('page-header__main-nav--closed');

navToggler.addEventListener('click', () => {
  if (navMain.classList.contains('page-header__main-nav--closed')) {
    navMain.classList.remove('page-header__main-nav--closed');
    navMain.classList.add('page-header__main-nav--opened');
  } else {
    navMain.classList.add('page-header__main-nav--closed');
    navMain.classList.remove('page-header__main-nav--opened');
  }
});
