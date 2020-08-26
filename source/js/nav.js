  var navMain = document.querySelector(".page-header__nav");
  var navToggler = document.querySelector(".page-header__toggler");

  navMain.classList.remove("page-header__nav--nojs");

  navToggler.addEventListener("click", function() {
    if (navMain.classList.contains("page-header__nav--closed")) {
      navMain.classList.remove("page-header__nav--closed");
      navMain.classList.add("page-header__nav--opened");
    } else {
      navMain.classList.add("page-header__nav--closed");
      navMain.classList.remove("page-header__nav--opened");
    }
  });

  var popupLink = document.querySelector(".js-popup");
  var modalPopup = document.querySelector(".modal");

  popupLink.addEventListener("click", function(evt) {
    evt.preventDefault();
    modalPopup.classList.add("modal--show");
  });

  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      if (modalPopup.classList.contains("modal--show")) {
        evt.preventDefault();
        modalPopup.classList.remove("modal--show");
      }
    }
  });
