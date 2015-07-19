/* ========================================================================= */
/* BE SURE TO COMMENT CODE/IDENTIFY PER PLUGIN CALL */
/* ========================================================================= */

jQuery(function($){

    $('#brand-grid .brand').hover(function(){
        $(this).addClass('big').siblings('.brand').addClass('small');
    },function(){
        $('.brand').removeClass('big').removeClass('small');
    });

    $('#banner').owlCarousel({
        items: 1,
        nav: true,
        loop: true,
        navText: ['&#x25c0;','&#x25b6']
    });

    $('#toys-slider').owlCarousel({
        stagePadding: 1,
        loop:true,
        margin:10,
        nav:true,
        navText: ['&#x25c0;','&#x25b6'],
        items: 1,
        responsive: {
            768: {
                stagePadding: 150
            },
            1080: {
                stagePadding: 250
            },
            1200: {
                stagePadding: 300
            }
        }
    }).on('changed.owl.carousel',function(){
        $('.popup').removeClass('active').siblings('img').removeClass('active');
    });

    $('.popup .expand, #toys-slider img').on('click',function(){
        $(this).parents('.slide').children('.popup').toggleClass('active').siblings('img').toggleClass('active');
    });

    $('.faq .q').on('click', function(){
        $(this).toggleClass('x').siblings('.a').slideToggle(150);
    });

    $('.gallery-small span').on('click',function(){
        $(this).addClass('x').siblings('.x').removeClass('x');
        $('.gallery img').attr('src',$(this).data('big'));
    });

    // PARALLAX
/*
    $(document).scroll(function(){
        var nm = $("html").scrollTop();
        var nw = $("body").scrollTop();
        var n = (nm > nw ? nm : nw);

        $('#element').css({
            'webkitTransform' : 'translate3d(0, ' + n + 'px, 0)',
            'MozTransform'    : 'translate3d(0, ' + n + 'px, 0)',
            'msTransform'     : 'translateY('     + n + 'px)',
            'OTransform'      : 'translate3d(0, ' + n + 'px, 0)',
            'transform'       : 'translate3d(0, ' + n + 'px, 0)',
        });

        // if transform3d isn't available, use top over background-position
        //$('#element').css('top', Math.ceil(n/2) + 'px');

    });
*/

});
