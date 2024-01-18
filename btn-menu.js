document.addEventListener('DOMContentLoaded', function () {

  try {



    let menu = document.querySelector('.js-menu'); 
    let btnMenu = document.querySelector('.btn-menu'); 

    btnMenu.addEventListener("click", function(e) {
      btnMenu.classList.toggle('_opened');
      menu.classList.toggle('_opened');
    });



  } catch (err) {
    console.error('menu.js ', err)
  } finally {}

});