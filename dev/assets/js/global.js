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
   
    $(".show-more-btn").click(function(e){
        $(".show-more-item:hidden").slice(0,4).fadeIn();
        if ($(".show-more-item:hidden").length < 1) $(this).fadeOut();
      })






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
});


   
    
})