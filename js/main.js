var elsOpenModalButton = document.querySelector('.hero__button');
var elCloseModalButton = document.querySelector('.exit-button');
var elModal = document.querySelector('.js-modal');

elsOpenModalButton.addEventListener('click', function () {
  elModal.classList.add('modal-open')
});

elCloseModalButton.addEventListener('click', function () {
  elModal.classList.remove('modal-open')
})


var elsButton = document.querySelectorAll('.middle--button');

var elModalss = document.querySelectorAll('.faq__contant');

elsButton.forEach(function (btns) {
  btns.addEventListener('click', function () {
    btns.closest(".faq__contant").classList.toggle("open-model");
  });
})