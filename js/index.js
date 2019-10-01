$(document).ready(function () {

  //scroll magic
  $('a[href^="#top"]').on('click', function(event) {

    var target = $(this.getAttribute('href'));

    if( target.length ) {
      event.preventDefault();
      $('html, body').stop().animate({
        scrollTop: target.offset().top
      }, 1500);
    }

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

    var target = $(this.getAttribute('href'));

    if( target.length ) {
      event.preventDefault();
      $('html, body').stop().animate({
        scrollTop: target.offset().top
      }, 1500);
    }

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

    var target = $(this.getAttribute('href'));

    if( target.length ) {
      event.preventDefault();
      $('html, body').stop().animate({
        scrollTop: target.offset().top
      }, 1500);
    }

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


   if ($(document).innerWidth() >= 992) {


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

           if ((screenBottom > elementTop + ($(this).find('.heros2').height() - 200 )) && (screenTop < elementBottom)) {
               $('main').removeClass('active2')
               $(this).addClass('active2')
           }
           else {
               $(this).removeClass('active2')
           }
         })




  if ($('.sticky').hasClass('active')) {

         $('.content-top').removeClass('transparent').addClass('animated fadeInUp');

     }

      if ($('.top').hasClass('active2')) {

            $('.content-top').addClass('transparent');

        }


   });


}


$('#MainContent_txtAccessCode1').keydown(function(event) {
  $('.button-default').css('background', '#008488');


  $(".button-default").mouseenter(function() {
    $(this).css('background-image' , 'linear-gradient(to top, #404040, #505050, #606060, #727272, #838383')
  });


    $(".button-default").mouseleave(function() {
      $(this).css('background', '#008488')
    });

  });

  const togglePassword = document.getElementById('togglePassword');

  const showOrHidePassword = () => {
    const password = document.getElementById('MainContent_txtAccessCode1');
    if (password.type === 'MainContent_txtAccessCode1') {
      password.type = 'text';
    } else {
      password.type = 'MainContent_txtAccessCode1';
    }
  };

  togglePassword.addEventListener('change', showOrHidePassword);


});
