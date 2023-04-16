jQuery(document).ready(function($) {
    $(".fancybox").fancybox();
    $('.nice_Select').niceSelect();
    
    $(window).scroll(function() {
        if ($(this).scrollTop() > 50) {
            $('.scrolltop:hidden').stop(true, true).fadeIn();
        } else {
            $('.scrolltop').stop(true, true).fadeOut();
        }
    });

    $(function() {
        $(".muve-top").click(function() {
            $("html,body").animate({
                scrollTop: $(".thetop").offset().top
            }, "1000");
            return false
        })
    })

    if ($('.post-item img').length || $('.seo-block img').length) {
        $('.post-item img, .seo-block img').each(function() {
            var imgThis = $(this);
            if (!imgThis.hasClass("nofancy")) {
                if (imgThis.closest('a')) {
                    imgThis.closest('a').attr({
                        'data-fancybox': 'content-group',
                        //'href': $(this).attr('src'),
                    });
                };
            };
        });
    };
    
    if($('.post-item iframe').length){
        $('.post-item iframe').closest('p').addClass('iframe-box')
    }

    $('.about-product__slider').slick({
        infinite: false,
        variableWidth: true,
        speed: 2000,
        
        autoplay: true,
        autoplaySpeed: 6000
    });

   

    (function(d) {
        const a = d.querySelectorAll('[data-bs-toggle="modal"]');
    
        a.forEach(t => {
            t.addEventListener('click', e => {
                const b = d.querySelectorAll('.modal');
    
                b.forEach(i => {
                    i.classList.remove('show');
                    d.getElementById(e.target.dataset.modal).classList.add('show');
                })
            })
        })
    })(document);

    $('#basketModal').click(() => {
        $('#exampleModal').modal('hide'); 
    })
   
   
   $(".show-more-btn").each(function() {
    const parent = $(this.parentElement);
    const items = parent.find('.show-more-item:hidden');
  
    
  
    $(this).click(function(e) {
      // показываем  4 элемента с классом "show-more-item"
      items.filter(':hidden').slice(0, 4).fadeIn();
      // если больше нет элементов с классом "show-more-item", которые нужно показать, скрываем кнопку "Show more"
      if (items.filter(':hidden').length < 1) $(this).fadeOut();
    })
  })
  
  // добавляем обработчик события на каждый таб
  $('.nav-link').on('shown.bs.tab', function(e) {
    const parent = $(e.target).parent().next();
    const items = parent.find('.show-more-item:hidden');
    // показываем кнопку "Show more"
    parent.find('.show-more-btn').show();
  });
  





    // получаем все элементы кнопок индикаторов
const carouselIndicators = document.querySelectorAll('.carousel-indicators button');

// проходим по каждому элементу кнопки индикатора
carouselIndicators.forEach((button, index) => {
  // получаем соответствующий элемент слайда
  const slide = document.querySelectorAll('.carousel-item')[index];

  // получаем элемент изображения или iframe слайда
  const img = slide.querySelector('img');
  const iframe = slide.querySelector('iframe');

  if (img) {
    // устанавливаем фон кнопки индикатора в соответствии с изображением
    button.style.backgroundImage = `url('${img.src}')`;
  } else if (iframe) {
    // получаем data-video-id из атрибута iframe
    const videoId = iframe.getAttribute('data-video-id');

    // устанавливаем фон кнопки индикатора в соответствии с видео
    button.style.backgroundImage = `url('https://img.youtube.com/vi/${videoId}/hqdefault.jpg')`;
  }
  button.style.backgroundSize = '100%';
  button.style.backgroundRepeat = 'no-repeat';
  button.style.backgroundPosition = 'center';

  if(iframe) {
    button.style.backgroundSize = '180%';
  }
});

const dropdowns = document.querySelectorAll('[data-dropdown]');

  // Добавляем обработчики клика на кнопки dropdown-toggle
  dropdowns.forEach(dropdown => {
    const toggle = dropdown.querySelector('[data-dropdown-toggle]');
    const menu = dropdown.querySelector('[data-dropdown-menu]');
    const button = dropdown.querySelector('[data-dropdown-btn]');

    toggle.addEventListener('click', () => {
      // При клике на кнопку dropdown-toggle открываем или закрываем список
      menu.classList.toggle('show');
      toggle.setAttribute('aria-expanded', menu.classList.contains('show'));
    });

    // Добавляем обработчики клика на элементы списка dropdown-item
    const items = menu.querySelectorAll('[data-dropdown-item]');
    items.forEach(item => {
      item.addEventListener('click', () => {
        // При клике на элемент списка обновляем текст кнопки dropdown-toggle
        button.textContent = item.getAttribute('data-dropdown-item');
        menu.classList.remove('show');
        toggle.setAttribute('aria-expanded', false);
      });
    });
  });

  const counter = document.querySelector('.counter');
  const value = counter.querySelector('.counter-value');
  const price = document.querySelector('.price');
  const prevPrice = document.querySelector('.previous-price');
  const minus = counter.querySelector('.minus');
  const plus = counter.querySelector('.plus');
  let initialPrice = parseInt(price.textContent);
  let initialPPrice = parseInt(prevPrice.textContent);

  // Обработчик клика на кнопке "-"
  minus.addEventListener('click', () => {
    let currentValue = parseInt(value.textContent);
    if (currentValue > 1) {
      value.textContent = currentValue - 1;
      price.textContent = (currentValue - 1) * initialPrice;
      prevPrice.textContent = (currentValue - 1) * initialPPrice;
    }
  });

  // Обработчик клика на кнопке "+"
  plus.addEventListener('click', () => {
    let currentValue = parseInt(value.textContent);
    value.textContent = currentValue + 1;
    price.textContent = (currentValue + 1) * initialPrice;
    prevPrice.textContent = (currentValue + 1) * initialPPrice;
  });

  // Алерт-модалка скидки
  window.addEventListener('load', function () {
    setTimeout(function () {
      var modalElement = new bootstrap.Modal(document.getElementById('discountModal'));
      modalElement.show();
    }, 30000); // 30 секунд
  });
   
  // Получаем ссылки на элементы алерта, модального окна и кнопку открытия модального окна
var alertElement = document.getElementById('basket-alert');
var modalElement = new bootstrap.Modal(document.getElementById('basketModal'));
var openModalButton = document.getElementById('openModalButton');

// Флаг, который определяет, было ли уже выполнено нажатие на кнопку открытия модального окна
var isModalOpened = false;

// Добавляем обработчик события закрытия алерта
alertElement.addEventListener('closed.bs.alert', function () {
  // Если модальное окно не было открыто, открываем его
  if (!isModalOpened) {
    modalElement.show();
    isModalOpened = true;
  }
});

// Добавляем обработчик клика на кнопку открытия модального окна
openModalButton.addEventListener('click', function () {
  // Закрываем алерт
  alertElement.classList.remove('show');
  alertElement.classList.add('hide');
});

// Добавляем обработчик события hidden.bs.modal на модальное окно
modalElement._element.addEventListener('hidden.bs.modal', function () {
  // После закрытия модального окна ничего не делаем
});
 

//Убирает display none с алерта если его вызовут
const alerts = document.querySelectorAll('.alert');

alerts.forEach(alert => {
  if (alert.classList.contains('show')) {
    alert.style.display = 'block';
  }
});

})