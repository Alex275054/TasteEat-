// Инициализируем Swiper
new Swiper('.testimonial-slider', {
   // Навигация 
   // Буллеты, текущее положение, прогрессбар
   pagination: {
      el: '.swiper-pagination',
      // Буллеты
      type: 'bullets',
      clickable: true,
   },
   // Управление клавиатурой
   keyboard: {
      // Включить\выключить
      enabled: true,
      // Включить\выключить
      // только когда слайдер
      // в пределах вьюпорта
      onlyInViewport: true,
      // Включить\выключить
      // управление клавишами
      // pageUp, pageDown
      pageUpDown: true,
   },
   // Управление колесом мыши
   mousewheel: {
      // Чувствительность колеса мыши
      sensitivity: 1,
      // Класс объекта на котором
      // будет срабатывать прокрутка мышью.
      //eventsTarget: ".testimonial-slider"
   },
   // Автовысота
   autoHeight: false,
   // Количество слайдов для показа
   slidesPerView: 2.5,
   // Отступ между слайдами
   spaceBetween: 30,
   // Количество пролистываемых слайдов
   slidesPerGroup: 1,
   // Скорость
   speed: 800,
   // Бесконечный слайдер
   loop: true,
   // Responsive breakpoints
   breakpoints: {
      // when window width is >= 320px
      320: {
         slidesPerView: 1,
         spaceBetween: 20
      },
      // when window width is >= 992px
      992: {
         slidesPerView: 2.5,
         spaceBetween: 30
      },
      // when window width is >= 410px
      767: {
         slidesPerView: 2,
         spaceBetween: 30
      },
      // // when window width is >= 500px
      // 500: {
      //    slidesPerView: 3,
      //    spaceBetween: 40
      // },
      // // when window width is >= 767px
      // 767: {
      //    slidesPerView: 4,
      //    spaceBetween: 40
      // }
   },
});
new Swiper('.offers-slider', {
   // Навигация 
   // Буллеты, текущее положение, прогрессбар
   pagination: {
      el: '.swiper-pagination',
      // Буллеты
      type: 'bullets',
      clickable: true,
   },
   // Управление клавиатурой
   keyboard: {
      // Включить\выключить
      enabled: true,
      // Включить\выключить
      // только когда слайдер
      // в пределах вьюпорта
      onlyInViewport: true,
      // Включить\выключить
      // управление клавишами
      // pageUp, pageDown
      pageUpDown: true,
   },
   // Управление колесом мыши
   mousewheel: {
      // Чувствительность колеса мыши
      sensitivity: 1,
      // Класс объекта на котором
      // будет срабатывать прокрутка мышью.
      //eventsTarget: ".testimonial-slider"
   },
   // Автовысота
   autoHeight: false,
   // Количество слайдов для показа
   slidesPerView: 2,
   // Отступ между слайдами
   spaceBetween: 30,
   // Количество пролистываемых слайдов
   slidesPerGroup: 1,
   // Скорость
   speed: 800,
   // Бесконечный слайдер
   loop: true,
   // Responsive breakpoints
   breakpoints: {
      // when window width is >= 320px
      320: {
         slidesPerView: 1,
         spaceBetween: 20
      },
      // when window width is >= 992px
      992: {
         slidesPerView: 2,
         spaceBetween: 30
      },
   },
});
new Swiper('.popular-items-slider', {
   // Управление клавиатурой
   keyboard: {
      // Включить\выключить
      enabled: true,
      // Включить\выключить
      // только когда слайдер
      // в пределах вьюпорта
      onlyInViewport: true,
      // Включить\выключить
      // управление клавишами
      // pageUp, pageDown
      pageUpDown: true,
   },
   // Автовысота
   autoHeight: true,
   // Количество слайдов для показа
   slidesPerView: 4,
   // Отступ между слайдами
   spaceBetween: 30,
   // Количество пролистываемых слайдов
   slidesPerGroup: 1,
   // Скорость
   speed: 800,
   // Бесконечный слайдер
   loop: true,
   // Responsive breakpoints
   breakpoints: {
      // when window width is >= 320px
      320: {
         slidesPerView: 1,
         spaceBetween: 20
      },
      // when window width is >= 410px
      410: {
         slidesPerView: 2,
         spaceBetween: 30
      },
      // when window width is >= 500px
      500: {
         slidesPerView: 3,
         spaceBetween: 40
      },
      // when window width is >= 767px
      767: {
         slidesPerView: 4,
         spaceBetween: 40
      }
   },
});
///>===============================================================

