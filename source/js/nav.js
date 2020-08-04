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
