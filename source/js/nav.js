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

  var popupLink = document.querySelectorAll(".js-popup");
  var modalPopup = document.querySelector(".modal");

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
