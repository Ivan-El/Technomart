var popups = document.querySelectorAll('.modal');
var popupsBackground = document.querySelector('.modal-background');
var openPopups = document.querySelectorAll('.modal-button-open');
var closePopups = document.querySelectorAll('.modal-button-close');

var addButtonFunction = function(openButton, closeButton, popup) {
  openButton.addEventListener('click', function (evt) {
    evt.preventDefault();
    popup.classList.add('modal-show');
    popupsBackground.classList.add('modal-background-show')
  })
  if (closeButton) {
    closeButton.addEventListener('click', function () {
      popup.classList.remove('modal-show');
      popupsBackground.classList.remove('modal-background-show');
    })
  }
}

var addKeyboardClose = function(popup){
  document.addEventListener('keydown', function (evt) {
    if (evt.keyCode === 27 && popup.classList.contains('modal-show')) {
      popup.classList.remove('modal-show');
    }
  })
}

for(var i = 0; i < openPopups.length; i++){
  if (popups.length !== 1) {
    addButtonFunction(openPopups[i], closePopups[i], popups[i]);
    addKeyboardClose(popups[i]);
  }  else if (popups.length === 1) {
    addButtonFunction(openPopups[i], closePopups[i], popups[0]);
    addKeyboardClose(popups[i]);
  }
}
