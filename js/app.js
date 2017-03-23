import '../scss/main.scss';

$(document).ready(() => {

    // prevent animations from running before loaded


    $('body').removeClass('preload');

    // determine menu class at document load


    (() => {

        const windowWidth = $(window).innerWidth();

        if (windowWidth < 992) {

            $('#main-menu').removeClass('menu-desktop');
        } else {

            $('#main-menu').removeClass('menu-mobile');
        }


    })();


    // on resize


    $(window).on('resize', () => {

        // toggle menu class on resize

        const windowWidth = $(window).innerWidth();
        if (windowWidth < 992) {

            if ($('#main-menu').hasClass('menu-desktop')) {

                $('#main-menu').toggleClass('menu-desktop menu-mobile');
                $('#main-menu').removeAttr('style');
            }

        } else {

            if ($('#main-menu').hasClass('menu-mobile')) {

                $('#main-menu').toggleClass('menu-desktop menu-mobile');
                $('#main-menu').removeAttr('style');
            }

        }


        //  Hide mobile-menu and reset hamburger class when mobile-menu is visible and hamburger class disappears due to size-change
        if (windowWidth > 992 && $('.hamburger').hasClass('extended')) {

            $('.hamburger').toggleClass('extended');
        }



    });

    // animate menu

    const hambuger = $('.hamburger');
    hambuger.on('click', function() {

        $(this).toggleClass('extended');

        $('.menu-mobile').animate({

            height: 'toggle',
            opacity: 'toggle'
        }, 'quick');

    });

    // Inline Menu 'slide to sections' animation
    
    var menuLinks = $('nav').find('li a');

    menuLinks.on('click', function() {

        var href = $(this).attr('href');


        if (href.indexOf('#') === 0) {

            var divOffsetTop = $(href).offset().top - 50;
            console.log(divOffsetTop);

            $('body').animate({

                scrollTop: divOffsetTop

            }, 1000);

        }

    });

    // handle more-info buttons on topic

    const moreInfoBtn = $('#development-topics').find('.more-info');


    moreInfoBtn.on('click',function () {

        $(this).next().slideToggle('quick');

    });

  // run slick.js

  $('.slider').slick({
    autoplay: true,
    infinite: true,
    nextArrow: '<a class="arrow left"><</a>',
    prevArrow: '<a class="arrow right">></a>',
    responsive: [
  {
    breakpoint: 500,
    settings: {

      arrows: false,
    }
  }]
  });


});
