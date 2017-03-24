import '../scss/main.scss';

$(document).ready(() => {

    // prevent animations from running before loaded


    $('body').removeClass('preload');

    // determine menu class at document load and prevent Ad from showing


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
    hambuger.on('click', (e) => {

        $(e.target).toggleClass('extended');

        $('.menu-mobile').animate({

            height: 'toggle',
            opacity: 'toggle'
        }, 'quick');

    });

    // Inline Menu 'slide to sections' animation

    const menuLinks = $('nav').find('li a');
    const trainingLink = $('#trainings').find('a');


    let handleLink = (event) => {

      const href = $(event.target).attr('href');


      if (href.indexOf('#') === 0) {

          const divOffsetTop = $(href).offset().top - 50;
          console.log(divOffsetTop);

          $('body').animate({

              scrollTop: divOffsetTop

          }, 1000);

      }

    }

    menuLinks.on('click', (e) => {

      handleLink(e);

    });

    trainingLink.on('click', (e) => {

      handleLink(e);

    });

    // handle more-info buttons on topic

    const moreInfoBtn = $('#development-topics').find('.more-info');


    moreInfoBtn.on('click',(e) => {

        $(e.target).next().slideToggle('quick');

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

  $('.clients-slider').slick({
    autoplaySpeed: 1500,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    infinite: false,
    arrows: false,
    responsive: [
  {
    breakpoint: 520,
    settings: {

      slidesToShow: 1,
      slidesToScroll: 1,
    }
  }]

  });

  // Validate form

  var errorMessage = $('.error-message'),
      form = $('#myForm'),
      nameInput = $('#nameInput'),
      emailInput = $('#emailInput'),
      subject = $('#subject'),
      message = form.find('#message');

  form.on('submit', (e) => {

      e.preventDefault();

      const formData = {

          name: nameInput.val(),
          email: emailInput.val(),
          subject: subject.val(),
          message: message.val()

      };

      if (formData.name.length < 5) {

          errorMessage.text('Za krótkie imię');
          errorMessage.fadeIn('400');

      } else if (formData.email.indexOf('@') === -1 || formData.email.indexOf('.') === -1) {
          errorMessage.text('Niepoprawny adres e-mail');
          errorMessage.fadeIn('400');
      } else if (formData.subject.length < 5) {
          errorMessage.text('Za krótki temat wiadomości');
          errorMessage.fadeIn('400');
      } else if (formData.message.length < 10) {
          errorMessage.text('Za krótka wiadomość');
          errorMessage.fadeIn('400');
      } else {
          // Sending form data
          $.ajax({

                  type: "POST",
                  url: 'mail.php',
                  data: formData,
                  dataType: 'json'


              }).done(function(success) {
                  console.log(success);

                  errorMessage.css('border', '2px solid green').css('color','green');
                  errorMessage.text('Udało się wysłać wiadomość!');
                  errorMessage.fadeIn('400');

              })
              .fail(function(error) {

                  console.log(error);
              })
      }



  });



});
