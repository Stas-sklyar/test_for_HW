document.addEventListener("DOMContentLoaded", function () {




  /* variable declarations */

  const btnMenu = document.querySelector(".burger"),
    menu = document.querySelector(".adaptive-menu"),
    anchors = document.querySelectorAll('a[href*="#"]'),
    ham4 = document.querySelector(".ham"),
    body = document.querySelector("body"),
    overlay = document.querySelector('.js-overlay-modal'),
    wrapperForAdaptiveMenu = document.querySelector(".wrapper-for-adapt-menu");

  let modalButtons = document.querySelectorAll('.js-open-modal'),
    closeButtons = document.querySelectorAll('.js-modal-close');






  /* ----------------   Adaptive menu -----------------*/

  toggleMenu = function () {
    menu.classList.toggle("adaptive-menu--active");
    ham4.classList.toggle('active');
    wrapperForAdaptiveMenu.classList.toggle("wrapper-for-adapt-menu--active");
  };

  btnMenu.addEventListener("click", (function (t) {
    t.stopPropagation(),
      toggleMenu()
  }
  ));

  document.addEventListener("click", (function (t) {
    const e = t.target,
      n = e == menu || menu.contains(e),
      a = e == btnMenu,
      o = menu.classList.contains("adaptive-menu--active"),
      menuItem = document.querySelector(".adaptive-menu__list");

    n || a || !o || toggleMenu()

    if (menuItem.parentNode.classList.contains("adaptive-menu--active")) {
      toggleMenu();
    }

  }
  ));





  /* ----------------   Modal window -----------------*/

  /* Перебираем массив кнопок */
  modalButtons.forEach(function (item) {

    /* Назначаем каждой кнопке обработчик клика */
    item.addEventListener('click', function (e) {
      e.preventDefault();

      /* При каждом клике на кнопку мы будем забирать содержимое атрибута data-modal
         и будем искать модальное окно с таким же атрибутом. */
      let modalId = this.getAttribute('data-modal'),
        modalElem = document.querySelector('.modal[data-modal="' + modalId + '"]');


      /* После того как нашли нужное модальное окно, добавим классы
         подложке и окну чтобы показать их. */
      modalElem.classList.add('active');
      overlay.classList.add('active');
    }); // end click

  }); // end foreach


  closeButtons.forEach(function (item) {

    item.addEventListener('click', function (e) {
      let parentModal = this.closest('.modal');

      parentModal.classList.remove('active');
      overlay.classList.remove('active');
    });

  }); // end foreach


  overlay.addEventListener('click', function () {
    document.querySelector('.modal.active').classList.remove('active');
    this.classList.remove('active');
  });









  /* ----------------   Scroll by anchor  -----------------*/
  for (let anchor of anchors) {
    anchor.addEventListener('click', function (e) {
      e.preventDefault()

      const blockID = anchor.getAttribute('href').substr(1)

      document.getElementById(blockID).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    })
  }





});





