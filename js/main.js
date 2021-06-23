var elsOpenModalButton = document.querySelector('.hero__button');
var elCloseModalButton = document.querySelector('.exit-button');
var elModal = document.querySelector('.js-modal');

elsOpenModalButton.addEventListener('click', function(){
  elModal.classList.add('modal-open')
});

elCloseModalButton.addEventListener('click', function(){
elModal.classList.remove('modal-open')
})