  var navMain = document.querySelector(".site-nav");
  var navToggler = document.querySelector(".site-nav__toggler");

  navMain.classList.remove("site-nav--nojs");
  navMain.classList.add("site-nav--closed");

  navToggler.addEventListener("click", function() {
    if (navMain.classList.contains("site-nav--closed")) {
      navMain.classList.remove("site-nav--closed");
      navMain.classList.add("site-nav--opened");
    } else {
      navMain.classList.add("site-nav--closed");
      navMain.classList.remove("site-nav--opened");
    }
  });

  var popupLink = document.querySelectorAll(".js-popup");
  var modalPopup = document.querySelector(".modal");
  var modalClose = document.querySelector(".js-close");

  modalClose.addEventListener("click", function() {
    modalPopup.classList.contains("modal--show");
    modalPopup.classList.remove("modal--show");
  });

  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      if (modalPopup.classList.contains("modal--show")) {
        evt.preventDefault();
        modalPopup.classList.remove("modal--show");
      }
    }
  });

  for (var i = 0; i < popupLink.length; i++) {
    popupLink[i].addEventListener("click", function(evt) {
      evt.preventDefault();
      modalPopup.classList.add("modal--show");
    });
  }
