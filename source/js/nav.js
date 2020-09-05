  var navMain = document.querySelector(".site-nav");
  var navToggler = document.querySelector(".site-nav__toggler");

  navMain.classList.remove("site-nav--nojs");
  navMain.classList.add("site-nav--closed");
  navToggler.classList.add("site-nav__toggler--show");

  navToggler.addEventListener("click", function() {
    if (navMain.classList.contains("site-nav--closed")) {
      navMain.classList.remove("site-nav--closed");
      navMain.classList.add("site-nav--opened");
    } else {
      navMain.classList.add("site-nav--closed");
      navMain.classList.remove("site-nav--opened");
    }
  });
