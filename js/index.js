$(document).ready(function () {



  $('input, textarea').focus(function () {
      $('html, body').animate({ scrollTop: ($('input, textarea').offset().top - 300) }, 500);
      return false;
  });

  //scroll magic
  $('a[href^="#top"]').on('click', function(event) {

    $('.circle.first').addClass('activate');
    $('.circle.second').removeClass('activate');
    $('.circle.third').removeClass('activate');

    var target = $(this.getAttribute('href'));

    if( target.length ) {
      event.preventDefault();
      $('html, body').stop().animate({
        scrollTop: target.offset().top
      }, 1500);
    }

  });


  $('a[href^="#top"]').on('hover', function(event) {

    $('.circle.first').addClass('activate');
    $('.circle.second').removeClass('activate');
    $('.circle.third').removeClass('activate');


  });


  $('a[href^="#topOccupations"]').on('click', function(event) {

    var target = $(this.getAttribute('href'));

    if( target.length ) {
      event.preventDefault();
      $('html, body').stop().animate({
        scrollTop: target.offset().top
      }, 1500);
    }

  });



  $('a[href^="#topLastAnchor"]').on('click', function(event) {

    $('.circle.first').removeClass('activate');
    $('.circle.second').removeClass('activate');
    $('.circle.third').addClass('activate');

    var target = $(this.getAttribute('href'));

    if( target.length ) {
      event.preventDefault();
      $('html, body').stop().animate({
        scrollTop: target.offset().top
      }, 1500);
    }

  });

  $('a[href^="#topLastAnchor"]').on('hover', function(event) {

    $('.circle.first').removeClass('activate');
    $('.circle.second').removeClass('activate');
    $('.circle.third').addClass('activate');



  });

  $('a[href^="#topSecondAnchor"]').on('click', function(event) {

    var target = $(this.getAttribute('href'));

    if( target.length ) {
      event.preventDefault();
      $('html, body').stop().animate({
        scrollTop: target.offset().top
      }, 1500);
    }

  });

  $('a[href^="#veryTop"]').on('click', function(event) {

    $('.circle.first').removeClass('activate');
    $('.circle.second').addClass('activate');
    $('.circle.third').removeClass('activate');

    var target = $(this.getAttribute('href'));

    if( target.length ) {
      event.preventDefault();
      $('html, body').stop().animate({
        scrollTop: target.offset().top
      }, 1500);
    }

  });

  $('a[href^="#veryTop"]').on('hover', function(event) {

    $('.circle.first').removeClass('activate');
    $('.circle.second').addClass('activate');
    $('.circle.third').removeClass('activate');



  });



  $('a[href^="#veryVeryTop"]').on('click', function(event) {

    $('.circle.first').removeClass('activate');
    $('.circle.second').removeClass('activate');
    $('.circle.third').removeClass('activate');


    var target = $(this.getAttribute('href'));

    if( target.length ) {
      event.preventDefault();
      $('html, body').stop().animate({
        scrollTop: target.offset().top
      }, 1500);
    }

  });

  $('a[href^="#slideDown"]').on('click', function(event) {

    var target = $(this.getAttribute('href'));

    if( target.length ) {
      event.preventDefault();
      $('html, body').stop().animate({
        scrollTop: target.offset().top
      }, 1500);
    }

  });



  $('.panel-collapse').on('show.bs.collapse', function () {
    $(this).siblings('.panel-heading').addClass('active');
  });

  $('.panel-collapse').on('hide.bs.collapse', function () {
    $(this).siblings('.panel-heading').removeClass('active');
  });


  // if ($(document).innerWidth() >= 992) {

  $(window).on('scroll', function() {
    var screenTop = $(window).scrollTop();
    var screenBottom = $(window).scrollTop() + window.innerHeight;

    $('section').each(function() {
      var elementTop = $(this).offset().top;
      var elementBottom = $(this).offset().top + $(this).outerHeight();

      if ((screenBottom > elementTop + ($(this).find('.heros').height() + 300 )) && (screenTop < elementBottom)) {
        $('section').removeClass('active')
        $(this).addClass('active')
      }
      else {
        $(this).removeClass('active')
      }
    })

    if ($('.block4').hasClass('active')) {


      setTimeout(function() {
        $('.block4 .content-top').removeClass('transparent-opacity').addClass('animated fadeIn')

      }, 100)

      setTimeout(function() {
        $('.block4 .content-middle').removeClass('transparent').addClass('animated  fadeIn')

      }, 160)

      setTimeout(function() {
        $('.block4 .content-bottom').removeClass('transparent').addClass('animated fadeIn')


      }, 220)


      setTimeout(function() {
        $('.block4 .content-last').removeClass('transparent').addClass('animated fadeIn')


      }, 400)

      setTimeout(function() {
        $('.block4 .content-secondLast').removeClass('transparent').addClass('animated  fadeIn')


      }, 500)

      setTimeout(function() {
        $('.block4 .content-thirdLast').removeClass('transparent').addClass('animated  fadeIn')


      }, 600)

      setTimeout(function() {
        $('.block4 .content-fourthLast').removeClass('transparent').addClass('animated  fadeIn')


      }, 700)

      setTimeout(function() {
        $('.block4 .content-fifthLast').removeClass('transparent').addClass('animated  fadeIn')


      }, 800)

      setTimeout(function() {
        $('.block4 .content-sixthLast').removeClass('transparent').addClass('animated  fadeIn')


      }, 900)

      setTimeout(function() {
        $('.block4 .content-seventhLast').removeClass('transparent').addClass('animated  fadeIn')


      }, 1000)

      setTimeout(function() {
        $('.block4 .content-eighthLast').removeClass('transparent').addClass('animated  fadeIn')


      }, 1100)

      setTimeout(function() {
        $('.blocks4 .content-ninthLast').removeClass('transparent').addClass('animated fadeIn')


      }, 1200)


    }



    if ($('.block44').hasClass('active')) {


      setTimeout(function() {
        $('.block44 .content-top').removeClass('transparent-opacity').addClass('animated fadeIn')

      }, 100)

      setTimeout(function() {
        $('.block44 .content-middle').removeClass('transparent').addClass('animated  fadeIn')

      }, 160)

      setTimeout(function() {
        $('.block44 .content-bottom').removeClass('transparent').addClass('animated fadeIn')


      }, 220)


      setTimeout(function() {
        $('.block44 .content-last').removeClass('transparent').addClass('animated fadeIn')


      }, 400)

      setTimeout(function() {
        $('.block44 .content-secondLast').removeClass('transparent').addClass('animated  fadeIn')


      }, 500)

      setTimeout(function() {
        $('.block44 .content-thirdLast').removeClass('transparent').addClass('animated  fadeIn')


      }, 600)

      setTimeout(function() {
        $('.block44 .content-fourthLast').removeClass('transparent').addClass('animated  fadeIn')


      }, 700)

      setTimeout(function() {
        $('.block44 .content-fifthLast').removeClass('transparent').addClass('animated  fadeIn')


      }, 800)

      setTimeout(function() {
        $('.block44 .content-sixthLast').removeClass('transparent').addClass('animated  fadeIn')


      }, 900)

      setTimeout(function() {
        $('.block44 .content-seventhLast').removeClass('transparent').addClass('animated  fadeIn')


      }, 1000)

      setTimeout(function() {
        $('.block44 .content-eighthLast').removeClass('transparent').addClass('animated  fadeIn')


      }, 1100)

      setTimeout(function() {
        $('.blocks44 .content-ninthLast').removeClass('transparent').addClass('animated fadeIn')


      }, 1200)


    }


    if ($('.block444').hasClass('active')) {


      setTimeout(function() {
        $('.block444 .content-top').removeClass('transparent-opacity').addClass('animated fadeIn')

      }, 100)

      setTimeout(function() {
        $('.block444 .content-middle').removeClass('transparent').addClass('animated  fadeIn')

      }, 160)

      setTimeout(function() {
        $('.block444 .content-bottom').removeClass('transparent').addClass('animated fadeIn')


      }, 220)


      setTimeout(function() {
        $('.block444 .content-last').removeClass('transparent').addClass('animated fadeIn')


      }, 400)

      setTimeout(function() {
        $('.block444 .content-secondLast').removeClass('transparent').addClass('animated  fadeIn')


      }, 500)

      setTimeout(function() {
        $('.block444 .content-thirdLast').removeClass('transparent').addClass('animated  fadeIn')


      }, 600)

      setTimeout(function() {
        $('.block444 .content-fourthLast').removeClass('transparent').addClass('animated  fadeIn')


      }, 700)

      setTimeout(function() {
        $('.block444 .content-fifthLast').removeClass('transparent').addClass('animated  fadeIn')


      }, 800)

      setTimeout(function() {
        $('.block444 .content-sixthLast').removeClass('transparent').addClass('animated  fadeIn')


      }, 900)

      setTimeout(function() {
        $('.block444 .content-seventhLast').removeClass('transparent').addClass('animated  fadeIn')


      }, 1000)

      setTimeout(function() {
        $('.block444 .content-eighthLast').removeClass('transparent').addClass('animated  fadeIn')


      }, 1100)

      setTimeout(function() {
        $('.blocks444 .content-ninthLast').removeClass('transparent').addClass('animated fadeIn')


      }, 1200)


    }





  });







  $(window).on('scroll', function() {
    var screenTop = $(window).scrollTop();
    var screenBottom = $(window).scrollTop() + window.innerHeight;

    $('section').each(function() {
      var elementTop = $(this).offset().top;
      var elementBottom = $(this).offset().top + $(this).outerHeight();

      if ((screenBottom > elementTop + ($(this).find('.heros').height() / 6 )) && (screenTop < elementBottom)) {
        $('section').removeClass('active')
        $(this).addClass('active')
      }
      else {
        $(this).removeClass('active')
      }
    })


    $('main').each(function() {
      var elementTop = $(this).offset().top;
      var elementBottom = $(this).offset().top + $(this).outerHeight();

      if ((screenBottom > elementTop + ($(this).find('.heros2').height()  )) && (screenTop < elementBottom)) {
        $('main').removeClass('active2')
        $(this).addClass('active2')
      }
      else {
        $(this).removeClass('active2')
      }
    })



    $('article').each(function() {
      var elementTop = $(this).offset().top;
      var elementBottom = $(this).offset().top + $(this).outerHeight();

      if ((screenBottom > elementTop + ($(this).find('.heros3').height() - 400 )) && (screenTop < elementBottom)) {
        $('article').removeClass('active3')
        $(this).addClass('active3')
      }
      else {
        $(this).removeClass('active3')
      }
    })


    if ($('.fade1').hasClass('active')) {


      setTimeout(function() {
        $('.fade1 .content-top').removeClass('transparent-opacity').addClass('animated fadeInUp')

      }, 20)

    }

    // if ($('.block4').hasClass('active')) {
    //
    //
    //   setTimeout(function() {
    //      $('.block4 .content-top').removeClass('transparent').addClass('animated slideInLeft')
    //
    //    }, 10)
    //
    //      // setTimeout(function() {
    //      //   $('.block4 .content-middle').removeClass('transparent').addClass('animated  infinite pulse')
    //      //
    //      //
    //      // }, 30)
    //      //
    //      // setTimeout(function() {
    //      //   $('.block4 .content-bottom').removeClass('transparent').addClass('animated  infinite pulse')
    //      //
    //      //
    //      // }, 70)
    //      //
    //      //
    //      //   setTimeout(function() {
    //      //     $('.block4 .content-last').removeClass('transparent').addClass('animated  infinite pulse')
    //      //
    //      //
    //      //   }, 100)
    //      //
    //      //   setTimeout(function() {
    //      //     $('.block4 .content-secondLast').removeClass('transparent').addClass('animated  infinite pulse')
    //      //
    //      //
    //      //   }, 130)
    //      //
    //      //   setTimeout(function() {
    //      //     $('.block4 .content-thirdLast').removeClass('transparent').addClass('animated  infinite pulse')
    //      //
    //      //
    //      //   }, 150)
    //      //
    //      //   setTimeout(function() {
    //      //     $('.block4 .content-fourthLast').removeClass('transparent').addClass('animated  infinite pulse')
    //      //
    //      //
    //      //   }, 180)
    //      //
    //      //   setTimeout(function() {
    //      //     $('.block4 .content-fifthLast').removeClass('transparent').addClass('animated  infinite pulse')
    //      //
    //      //
    //      //   }, 210)
    //      //
    //      //   setTimeout(function() {
    //      //     $('.block4 .content-sixthLast').removeClass('transparent').addClass('animated  infinite pulse')
    //      //
    //      //
    //      //   }, 230)
    //      //
    //      //   setTimeout(function() {
    //      //     $('.block4 .content-seventhLast').removeClass('transparent').addClass('animated  infinite pulse')
    //      //
    //      //
    //      //   }, 260)
    //      //
    //      //   setTimeout(function() {
    //      //     $('.block4 .content-eighthLast').removeClass('transparent').addClass('animated  infinite pulse')
    //      //
    //      //
    //      //   }, 300)
    //      //
    //      //   setTimeout(function() {
    //      //     $('.blocks4 .content-ninthLast').removeClass('transparent').addClass('animated  infinite pulse')
    //      //
    //      //
    //      //   }, 330)
    //
    // }

    // if ($('.block4').hasClass('active')) {
    //
    //
    // setTimeout(function() {
    // $('.block4 .content-top').removeClass('transparent-opacity').addClass('animated fadeIn')
    //
    // })
    //
    // setTimeout(function() {
    //        $('.block4 .content-middle').removeClass('transparent').addClass('animated  fadeIn')
    //
    //  }, 90)
    //
    //  setTimeout(function() {
    //        $('.block4 .content-bottom').removeClass('transparent').addClass('animated fadeIn')
    //
    //
    //      }, 180)
    //
    //
    //        setTimeout(function() {
    //          $('.block4 .content-last').removeClass('transparent').addClass('animated fadeIn')
    //
    //
    //        }, 260)
    //
    //        setTimeout(function() {
    //          $('.block4 .content-secondLast').removeClass('transparent').addClass('animated  fadeIn')
    //
    //
    //        }, 340)
    //
    //        setTimeout(function() {
    //          $('.block4 .content-thirdLast').removeClass('transparent').addClass('animated  fadeIn')
    //
    //
    //        }, 400)
    //
    //        setTimeout(function() {
    //          $('.block4 .content-fourthLast').removeClass('transparent').addClass('animated  fadeIn')
    //
    //
    //        }, 480)
    //
    //        setTimeout(function() {
    //          $('.block4 .content-fifthLast').removeClass('transparent').addClass('animated  fadeIn')
    //
    //
    //        }, 550)
    //
    //        setTimeout(function() {
    //          $('.block4 .content-sixthLast').removeClass('transparent').addClass('animated  fadeIn')
    //
    //
    //        }, 630)
    //
    //        setTimeout(function() {
    //          $('.block4 .content-seventhLast').removeClass('transparent').addClass('animated  fadeIn')
    //
    //
    //        }, 710)
    //
    //        setTimeout(function() {
    //          $('.block4 .content-eighthLast').removeClass('transparent').addClass('animated  fadeIn')
    //
    //
    //        }, 790)
    //
    //        setTimeout(function() {
    //          $('.blocks4 .content-ninthLast').removeClass('transparent').addClass('animated fadeIn')
    //
    //
    //        }, 850)
    //
    //
    // }

    if ($('.block5').hasClass('active')) {


      setTimeout(function() {
        $('.block5 .content-top').removeClass('transparent-opacity').addClass('animated fadeInUp')

      },10)

      setTimeout(function() {
        $('.block5 .content-middle').removeClass('transparent-opacity').addClass('animated fadeInUp')

      }, 100)

      setTimeout(function() {
        $('.block5 .content-bottom').removeClass('transparent-opacity').addClass('animated fadeInUp')

      }, 500)

    }

    if ($('.block11').hasClass('active')) {


      setTimeout(function() {
        $('.block11 .content-top').removeClass('transparent-opacity').addClass('animated fadeInUp')

      },10)

      setTimeout(function() {
        $('.block11 .content-middle').removeClass('transparent-opacity').addClass('animated fadeInUp')

      }, 500)

      setTimeout(function() {
        $('.block11 .content-bottom').removeClass('transparent-opacity').addClass('animated fadeInUp')

      }, 700)

    }

    if ($('.block12').hasClass('active')) {


      setTimeout(function() {
        $('.block12 .content-top').removeClass('transparent-opacity').addClass('animated fadeInUp')

      },10)

      setTimeout(function() {
        $('.block12 .content-middle').removeClass('transparent-opacity').addClass('animated fadeInUp')

      }, 200)



    }


    if ($('.block6').hasClass('active')) {


      setTimeout(function() {
        $('.block6 .content-top').removeClass('transparent-opacity').addClass('animated fadeInUp')

      })

    }

    if ($('.block7').hasClass('active')) {


      setTimeout(function() {
        $('.block7 .content-top').removeClass('transparent-opacity').addClass('animated fadeInUp')

      })

    }

    if ($('.block8').hasClass('active')) {


      setTimeout(function() {
        $('.block8 .content-top').removeClass('transparent-opacity').addClass('animated fadeInUp')

      })

    }


    if ($('.block9').hasClass('active')) {


      setTimeout(function() {
        $('.block9 .content-top').removeClass('transparent-opacity').addClass('animated fadeInUp')

      })

    }

    if ($('.block10').hasClass('active')) {


      setTimeout(function() {
        $('.block10 .content-top').removeClass('transparent-opacity').addClass('animated fadeInUp')

      })

      setTimeout(function() {
        $('.block10 .content-middle').removeClass('transparent-opacity').addClass('animated fadeInUp')

      }, 600)

    }


    if ($('.block100').hasClass('active')) {


      setTimeout(function() {
        $('.block100 .content-top').removeClass('transparent-opacity').addClass('animated fadeInUp')

      },10)

    }


    if ($('.sticky').hasClass('active3')) {

      $(".sticky .content-top").fadeIn()

      // $( ".sticky .content-top" ).animate({opacity: 1});


      // $('.sticky .content-top').removeClass('transparent');

    }

    // else if {
    //     $(".sticky .content-top").fadeOut()
    // }



    else if ($('.top').hasClass('active2')) {
      //
      // $('.circle.first').removeClass('activate');
      // $('.circle.second').removeClass('activate');
      // $('.circle.third').removeClass('activate');


      $(".sticky .content-top").fadeOut()


    }



  });




  // }


  $('#accessCode1').keydown(function(event) {
    $('.button-default').css('background', '#008488');


    $(".button-default").mouseenter(function() {
      $(this).css('background-image' , 'linear-gradient(to top, #404040, #505050, #606060, #727272, #838383')
    });


    $(".button-default").mouseleave(function() {
      $(this).css('background', '#008488')
    });

  });

  if ($(document).innerWidth() >= 768) {
    // const togglePassword = document.getElementById('togglePassword');
    //
    // const showOrHidePassword = () => {
    //   const password = document.getElementById('accessCode1');
    //   if (password.type === 'accessCode1') {
    //     password.type = 'text';
    //   } else {
    //     password.type = 'accessCode1';
    //   }
    // };
    //
    // togglePassword.addEventListener('change', showOrHidePassword);


    function show() {
      var p = document.getElementById('accessCode1');
      p.setAttribute('type', 'text');
    }

    function hide() {
      var p = document.getElementById('accessCode1');
      p.setAttribute('type', 'password');
    }

    var pwShown = 0;

    document.getElementById("togglePassword").addEventListener("click", function () {
      if (pwShown == 0) {
        pwShown = 1;
        show();

        $("#eye").attr('src',"images/close-eye.svg");
        $('.mr-1').css('margin-top', '2px');

        $('#access').html('Hide Access Code')

      } else {
        pwShown = 0;
        hide();

        $("#eye").attr('src',"images/show-access.svg");

        $('.mr-1').css('margin-top', '-2px');

        $('#access').html('Show Access Code')
      }
    }, false);


  }

  if ($(document).innerWidth() <= 767) {
    // const togglePassword2 = document.getElementById('togglePassword2');
    //
    // const showOrHidePassword2 = () => {
    //   const password2 = document.getElementById('accessCode1');
    //   if (password2.type === 'accessCode1') {
    //     password2.type = 'text';
    //   } else {
    //     password2.type = 'accessCode1';
    //   }
    // };
    //
    // togglePassword2.addEventListener('click', showOrHidePassword2);


    function show() {
      var p = document.getElementById('accessCode1');
      p.setAttribute('type', 'text');
    }

    function hide() {
      var p = document.getElementById('accessCode1');
      p.setAttribute('type', 'password');
    }

    var pwShown = 0;

    document.getElementById("togglePassword2").addEventListener("click", function () {
      if (pwShown == 0) {
        pwShown = 1;
        show();


        $("#closedEye").attr('src',"images/close-eye.svg");





        // $('#access').html('Hide Access Code')

      } else {
        pwShown = 0;
        hide();

        $("#closedEye").attr('src',"images/show-access.svg");

        // $('#access').html('Show Access Code')
      }
    }, false);


    var sticky = document.getElementById('stickyBottom');

    console.log(window.getComputedStyle(sticky).height);


    $(".westat-footer").css({
      'bottom': ($(sticky).height() + 'px')
    });



  }

  if ($(document).innerWidth() <= 991) {

    var box1 = document.getElementById('box1');

    var box2 = document.getElementById('box2');

    console.log(window.getComputedStyle(box1).width);
    console.log(window.getComputedStyle(box2).width);

    $(".grayBox").css({
      'width': ($(box1).outerWidth() + 'px')
    });

    $(".grayBox2").css({
      'width': ($(box2).outerWidth() + 'px')
    });

  }


  (function($) {

    $.fn.animateAuto = function(prop, speed, callback) {
      var elem, height, width;
      return this.each(function(i, el) {
        el = $(el), elem = el.clone().css({
          "height": "auto",
          "width": "auto"
        }).appendTo("body");
        height = elem.css("height"), width = elem.css("width"), elem.remove();

        if (prop === "height") {
          el.animate({
            "height": height
          }, speed, callback);
        }
        else if (prop === "width") {
          el.animate({
            "width": width
          }, speed, callback);
        }
        else if (prop === "both") {
          el.animate({
            "width": width,
            "height": height }, speed, callback);
          }
        });
      }
    })(jQuery);


    $('.fa.fa-angle-down').click(function() {
      $('.landing-panel.new.reveal-closed').animateAuto('both', 600);

      setTimeout(function() {
        $('.fa.fa-angle-down').addClass('rotate')
      }, 1200)


    });


    $('.fa.fa-angle-down').click(function() {


      if ($('.fa.fa-angle-down').hasClass('rotate')) {

        setTimeout(function() {
          $('.fa.fa-angle-down').removeClass('rotate')
        }, 1200)


        console.log('thing')

        $('.landing-panel.new.reveal-closed').animate(
          {
            height: 400
          },
          { duration: 500,

          }
        );

      }


    })





  });
