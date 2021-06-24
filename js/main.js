var elsOpenModalButton = document.querySelector('.hero__button');
var elCloseModalButton = document.querySelector('.exit-button');
var elModal = document.querySelector('.js-modal');

elsOpenModalButton.addEventListener('click', function(){
  elModal.classList.add('modal-open')
});

elCloseModalButton.addEventListener('click', function(){
elModal.classList.remove('modal-open')
})

var elsAnsverBtn = document.querySelectorAll('.btn');
var elsAnsversItem = document.querySelectorAll('.faq__middle--tex');


elsAnsverBtn.forEach(function (toggle) {
  toggle.addEventListener('click', function (){
    toggle.closest('faq__middle--tex').classList.toggle('ansvers--open')
  })
})