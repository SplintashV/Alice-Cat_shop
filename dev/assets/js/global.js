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

    $('.product__slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.product__slider-nav'
    });
    $('.product__slider-nav').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.product__slider',
        arrows: true,
        centerMode: false,
        focusOnSelect: true
    });

    (function(d) {
        const a = d.querySelectorAll('[data-bs-target]');
    
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
    
})