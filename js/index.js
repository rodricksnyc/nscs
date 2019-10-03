$(document).ready(function () {





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

      if ((screenBottom > elementTop + ($(this).find('.heros').height() )) && (screenTop < elementBottom)) {
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

      if ((screenBottom > elementTop + ($(this).find('.heros2').height() - 500 )) && (screenTop < elementBottom)) {
        $('main').removeClass('active2')
        $(this).addClass('active2')
      }
      else {
        $(this).removeClass('active2')
      }
    })


    if ($('.sticky').hasClass('active')) {
      $('.content-top').removeClass('transparent').addClass('animated fadeIn');

    }



    if ($('.top').hasClass('active2')) {
      $('.content-top').addClass('transparent');

    }

    // if (!$('.sticky').hasClass('active')) {
    //
    //   $('.content-top').removeClass('animated fadeIn');
    //
    //   $('.content-top').addClass('transparent').addClass('animated fadeOut');
    //
    // }


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

        $("#eye").attr('src',"images/close-eye.png");


        $('#access').html('Hide Access Code')

    } else {
        pwShown = 0;
        hide();

        $("#eye").attr('src',"images/show-access.svg");

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


  $("#closedEye").attr('src',"images/close-eye.png");



        // $('#access').html('Hide Access Code')

    } else {
        pwShown = 0;
        hide();

          $("#closedEye").attr('src',"images/show-access.svg");

          // $('#access').html('Show Access Code')
    }
}, false);


    // var sticky = document.getElementById('stickyBottom');
    //
    // console.log(window.getComputedStyle(sticky).height);
    //
    //
    // $(".westat-footer").css({
    //   'bottom': ($(sticky).height() + 'px')
    // });



  }

  if ($(document).innerWidth() <= 991) {

    var box1 = document.getElementById('box1');

    console.log(window.getComputedStyle(box1).width);


    $(".grayBox").css({
      'width': ($(box1).outerWidth() + 'px')
    });

    $(".grayBox2").css({
      'width': ($(box1).outerWidth() + 'px')
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
