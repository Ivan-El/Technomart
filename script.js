var popups = document.querySelectorAll('.modal');
var openPopups = document.querySelectorAll('.modal-button-open');
var closePopups = document.querySelectorAll('.modal-button-close');

var addButtonFunction = function(openButton, closeButton, popup) {
  openButton.addEventListener('click', function (evt) {
    evt.preventDefault();
    popup.classList.add('modal-show');
  })
  closeButton.addEventListener('click', function () {
    popup.classList.remove('modal-show');
  })
}

var addKeyboardClose = function(popup){
  document.addEventListener('keydown', function (evt) {
    if (evt.keyCode === 27 && popup.classList.contains('modal-show')) {
      popup.classList.remove('modal-show');
    }
  })
}

for(var i = 0; i < popups.length; i++){
  addButtonFunction(openPopups[i], closePopups[i], popups[i]);
  addKeyboardClose(popups[i]);
}
