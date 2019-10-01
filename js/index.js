$(document).ready(function () {

  //scroll magic
  $('a[href^="#top"]').on('click', function(event) {

    var target = $(this.getAttribute('href'));

    if( target.length ) {
      event.preventDefault();
      $('html, body').stop().animate({
        scrollTop: target.offset().top
      }, 1000);
    }

  });

  $('a[href^="#topOccupations"]').on('click', function(event) {

    var target = $(this.getAttribute('href'));

    if( target.length ) {
      event.preventDefault();
      $('html, body').stop().animate({
        scrollTop: target.offset().top
      }, 1000);
    }

  });



  $('a[href^="#topLastAnchor"]').on('click', function(event) {

    var target = $(this.getAttribute('href'));

    if( target.length ) {
      event.preventDefault();
      $('html, body').stop().animate({
        scrollTop: target.offset().top
      }, 1000);
    }

  });

  $('a[href^="#topSecondAnchor"]').on('click', function(event) {

    var target = $(this.getAttribute('href'));

    if( target.length ) {
      event.preventDefault();
      $('html, body').stop().animate({
        scrollTop: target.offset().top
      }, 1000);
    }

  });

  $('a[href^="#veryTop"]').on('click', function(event) {

    var target = $(this.getAttribute('href'));

    if( target.length ) {
      event.preventDefault();
      $('html, body').stop().animate({
        scrollTop: target.offset().top
      }, 1000);
    }

  });

  $('a[href^="#slideDown"]').on('click', function(event) {

    var target = $(this.getAttribute('href'));

    if( target.length ) {
      event.preventDefault();
      $('html, body').stop().animate({
        scrollTop: target.offset().top
      }, 1000);
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

         if ((screenBottom > elementTop + ($(this).find('.heros').height() + 100)) && (screenTop < elementBottom)) {
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










});
