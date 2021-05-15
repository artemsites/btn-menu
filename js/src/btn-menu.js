"use strict";
(function () {
  document.addEventListener('DOMContentLoaded', function () {
   


    let btnMenu = document.querySelector('.btn-menu');
    // let menu = document.querySelector('.menu');
    
    btnMenu.onclick = function () {
      btnMenu.classList.toggle('--active');
      // menu.classList.toggle('--active');
    };


  });
})();