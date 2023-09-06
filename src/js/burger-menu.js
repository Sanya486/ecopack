const refs = {
  burgerIcon: document.querySelector('.burger-icon'),
  closeIcon: document.querySelector('.icon-x'),
  modalmenu: document.querySelector('.modal-menu'),
};

refs.burgerIcon.addEventListener('click', () => {
  refs.modalmenu.classList.remove('is-hidden');
});

refs.closeIcon.addEventListener('click', () => {
  refs.modalmenu.classList.add('is-hidden');
});
