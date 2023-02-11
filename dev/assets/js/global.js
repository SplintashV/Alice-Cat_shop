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
   
    
    
})