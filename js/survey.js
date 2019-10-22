$( document ).ready(function() {



  // Click function for show the Modal

  $(".show").on("click", function(){
    $(".modal2").removeClass("animated fadeOutDown");
    $(".modal2").addClass("animated fadeInUp").show();
    $(".mask").fadeIn();
  });

  $(".closeModal").on("click", function(){
    $(".modal2").removeClass("animated fadeInUp")
    $(".modal2").addClass("animated fadeOutDown");

    setTimeout(function() {
      $(".modal2").hide();
    }, 800)
    $(".mask").fadeOut();

    $('.button-default').addClass('second')
    $('.button-default').removeClass('activeTeal')

  });

  $(".mask").on("click", function(){
    $(".modal2").hide();
    $(".mask").hide();

  })




  $('.button-default.second').on('click', function() {

    $('.button-default.second').removeClass('second')
    $('.button-default').addClass('activeTeal')
  })

  $(document).keyup(function(e) {
    if (e.keyCode == 27) {
      closeModal();
    }
  });

  $('.clear').mouseover(function() {
    $('.aquaLine').css('opacity', '1')
  })

  $('.clear').mouseout(function() {
    $('.aquaLine').css('opacity', '0')
  })

  $('#prev').on('click', function() {

    $('#next').removeClass('activeTeal')
    // $('#prev').removeClass('clear');
    // $('#next').addClass('clear');
    // $('.fa.fa-angle-left').css('color', 'white');
    // $('.fa.fa-angle-right').css('color', '#008488');
  })


  $('#next').on('click', function() {

    $('#next').addClass('activeTeal')

    // $('#next').removeClass('clear');
    // $('#prev').addClass('clear');
    $('.fa.fa-angle-right').css('color', 'white');
    $('.fa.fa-angle-left').css('color', '#008488');
  })



  // resizeDiv();
  //
  //
  // window.onresize = function(event) {
  //   resizeDiv();
  // }
  //
  // function resizeDiv() {
  //   vpw = $(window).width();
  //   vph = $(window).height();
  //   $('#main-wrapper').css({'height': vph + 'px'});
  // }

  $('#one').on('click', function() {

    $(".faqTab").removeClass('lightBlue')

    $(".faqTab").attr('src',"images/FAQ_tab_HVR-ON.png");
    $(".contactTab").attr('src',"images/blue-contact.png");

    $('.modal-content').css('box-shadow', '0 3px 9px rgba(0, 0, 0, .6)')


    $('.thirdBlock').addClass('flexing-scroll');
    $(".firstBlock").addClass('animated fadeIn');
    $(".secondBlock").removeClass('animated fadeIn');
    $(".thirdBlock").removeClass('animated fadeIn');



    $('#smaller').html('Frequently Asked Questions')

    $('.modal-content').addClass('opened')
    $("#slideOut").addClass('showSlideOut');
    // $('#one').css('background', '#F1F1F1');
    // $('#one p.white').css('color', '#008488');
    $('#one').css('z-index', '999')
    $('#two').css('z-index', '3')

    $('#two').css('right', '9px');
    $('#one').css('right', '9px');

    $('#one').addClass('dropshad');
    $('#two').addClass('dropshad2');

    $(".faqTab").css('width', '50px');
    $(".contactTab").css('width', '49px');

    //
    // $('#two').css('background', 'linear-gradient(180deg, rgba(0,170,170,1) 0%, rgba(0,132,136,1) 100%)');
    // $('#two p.white').css('color', '#F1F1F1');

    $('.firstBlock').removeClass('flexing-scroll');
    $('.secondBlock').addClass('flexing-scroll');
    $('.thirdBlock').addClass('flexing-scroll');
    $('.secondBlock').removeClass('unset');

    // $('div#one').addClass('tabOpen');
    // $('#two').removeClass('tabOpen');

  })


  $('#two').on('click', function() {


    $(".secondBlock").addClass('animated fadeIn');

    $(".firstBlock").removeClass('animated fadeIn');
    $(".thirdBlock").removeClass('animated fadeIn');


    $('#two').css('right', '8px');
    $('#one').css('right', '8px');

    $('#one').addClass('dropshad2');
    $('#two').addClass('dropshad');


    // $('#one').removeClass('bottomShadow');
    // $('#one').removeClass('bottomShadowDarker');
    // $('#two').addClass('topShadow');

    $(".faqTab").removeClass('lightBlue');
    $(".faqTab").css('width', '50px');
    $(".contactTab").css('width', '51px');

    $(".contactTab").attr('src',"images/Contacdt_tab_HVR-ON.svg");
    $(".faqTab").attr('src',"images/FAQ_tab_OFF.svg");

    $('.modal-content').css('box-shadow', '0 3px 9px rgba(0, 0, 0, .6)')

    $('#smaller').html('For more information about this study, please contact:')

    $("#slideOut").addClass('showSlideOut');

    $('.firstBlock').addClass('flexing-scroll');
    $('.secondBlock').removeClass('flexing-scroll');
    $('.thirdBlock').addClass('flexing-scroll');
    $('.secondBlock').addClass('unset');

    // $('#one').removeClass('tabOpen');
    // $('#tab').addClass('tabOpen');

    // $('#one').css('background', 'linear-gradient(180deg, rgba(0,170,170,1) 0%, rgba(0,132,136,1) 100%)');
    // $('#one p.white').css('color', '#F1F1F1');
    // $('#two').css('background', '#F1F1F1');
    // $('#two p.white').css('color', '#008488');
    $('#two').css('z-index', '999')
    $('#one').css('z-index', '99')
  })


  $('.emailUs').on('click', function(e) {

    e.preventDefault();

    $('#smaller').html('Contact Us');

    $(".thirdBlock").addClass('animated fadeIn');

    $(".secondBlock").removeClass('animated fadeIn');
    $(".firstBlock").removeClass('animated fadeIn');

    $('.firstBlock').addClass('flexing-scroll');
    $('.secondBlock').addClass('flexing-scroll');

    $('.thirdBlock').removeClass('flexing-scroll');

  })


  $('.emailUs').keydown(function(e) {
        if(e.keyCode == 13) {

        }
    });




  $('#close').on('click', function() {

    $('.firstBlock').addClass('unset');



    $(".secondBlock").removeClass('animated fadeIn');
    $(".firstBlock").removeClass('animated fadeIn');
    $(".thirdtBlock").removeClass('animated fadeIn');


    setTimeout(function() {
      $('.thirdBlock').addClass('flexing-scroll');
      $('.secondBlock').addClass('flexing-scroll');
    }, 600)


    $(".faqTab").css('width', '54px');
    $(".contactTab").css('width', '54px');
    $('#one').removeClass('dropshad2');
    $('#two').removeClass('dropshad');
    $('#one').removeClass('dropshad');
    $('#two').removeClass('dropshad2');

    $('#two').css('right', '5px');
    $('#one').css('right', '7px');





    $('.modal-content').css('box-shadow', 'none')

    $("#slideOut").removeClass('showSlideOut');
    // $('#one').css('background', 'linear-gradient(180deg, rgba(0,170,170,1) 0%, rgba(0,132,136,1) 100%)');
    // $('#two').css('background', 'linear-gradient(180deg, rgba(0,170,170,1) 0%, rgba(0,132,136,1) 100%)');
    // $('#one p.white').css('color', 'white');
    // $('#two p.white').css('color', 'white');
    $('#one').css('z-index', '999');
    $('#two').css('z-index', '99');


    $(".faqTab").addClass('lightBlue')

    $(".contactTab").attr('src',"images/Contact_tab_OFF.svg");
    $(".faqTab").attr('src',"images/FAQ_tab_OFF.svg");

    // $('#one').removeClass('bottomShadowDarker');
    // $('#one').addClass('bottomShadow');
    // $('#two').removeClass('topShadow');

  })

  if ($(document).innerWidth() >= 768) {

    var modal1 = document.getElementById('slideOut');

    console.log(window.getComputedStyle(modal1).width);


    $("#slideOut").css("right" , -$('#slideOut').outerWidth() + 15);


    $(".modal-content").width($('#slideOut').width());


    $(window).on("scroll", function() {
          var docHeight = $(document).height();
          var winScrolled = $(window).height() + $(window).scrollTop(); // Sum never quite reaches
          if ((docHeight - winScrolled) < 1) {

            console.log("ahhh");
            $("#stickySide2").css({
                 'top': '87%'
               });
          }

          else if ((docHeight - winScrolled) > 1) {
              console.log("no ahhh");

              $("#stickySide2").css({
                   'top': '95%'
                 });
          }


      });


  }



  if ($(document).innerWidth() <= 767) {




    $(window).on("scroll", function() {
          var docHeight = $(document).height();
          var winScrolled = $(window).height() + $(window).scrollTop(); // Sum never quite reaches
          if ((docHeight - winScrolled) < 1) {

            console.log("ahhh");
            $(".stickBottomMobile").css({
                 'bottom': ($('footer').height() + 'px')
               });
          }

          else if ((docHeight - winScrolled) > 1) {
              console.log("no ahhh");

              $(".stickBottomMobile").css({
                   'bottom': 0
                 });
          }


      });

    // $(window).scroll(function() {
    //
    //   if($(window).scrollTop() + $(window).height() == $(document).height()) {
    //
    //     $(".stickBottomMobile").css({
    //       'bottom': ($('footer').height() + 'px')
    //     });
    //
    //   }
    //
    //   else  {
    //     $(".stickBottomMobile").css({
    //       'bottom': 0
    //     });
    //
    //   }
    //
    // });

    // var mobile = document.getElementById('mobileModal');
    //
    // console.log(window.getComputedStyle(mobile).width);
    //
    //
    // var foot = document.getElementById('foot2');
    //
    // console.log(window.getComputedStyle(foot).height);
    //
    // var boxes = document.getElementById('boxes');
    //
    // console.log(window.getComputedStyle(boxes).height);
    //
    // var foot2 = $('#foot2').height() + $('#boxes').height();

    // console.log(foot2)

    $('.secondBlock').removeClass('flexing-scroll');
    $('.secondBlock').addClass('flexing-fixed');





    // $(".stickBottomMobile").css({
    // 'bottom': ($('#foot2').height() + 'px')
    // });

    // $(".stickBottomMobile").css({
    //   'bottom': 0
    // });



    $("#slideOut").css("bottom" , -$('#slideOut').height() );



    $('.toggleModal1').on('click', function() {

      $('.wrapper').show();


      $('#smaller').html('Frequently Asked Questions')

      $("#slideOut").css('opacity', '1')

      $("#slideOut").animate({
        bottom:'0',


      }, 200);

      $('.secondBlock').removeClass('flexing-scroll');
      $('.secondBlock').addClass('flexing-fixed');

      $('.firstBlock').removeClass('flexing-fixed');


      //
      // $('.firstAngle').addClass('rotate');
      // $('.secondAngle').removeClass('rotate')
      // $('.secondAngle').addClass('noRotate');
      // $('.firstAngle').removeClass('noRotate');

      // if($("#slideOut").css('opacity') == "1" && $('.secondAngle').hasClass('noRotate')  && $('.firstAngle').hasClass('rotate')) {
      //
      //
      //
      // setTimeout(function() {
      //     $("#slideOut").css('opacity', '0')
      // },500)
      //
      //
      //   $("#slideOut").animate({
      //
      //     bottom:-$('#slideOut').height(),
      //
      //
      //   },300);
      //
      //
      //
      // }



    })




    $('.toggleModal2').on('click', function() {


      $('.wrapper').hide();

      $('#smaller').html('For more information about this study, please contact:')

      $("#slideOut").css('opacity', '1')

      $("#slideOut").animate({
        bottom:'0',


      }, 200);

      $('.secondBlock').removeClass('flexing-scroll');
      $('.secondBlock').removeClass('flexing-fixed');

      $('.firstBlock').addClass('flexing-fixed');


      //
      // $('.secondAngle').addClass('rotate')
      // $('.firstAngle').removeClass('rotate');
      // $('.firstAngle').addClass('noRotate');
      // $('.secondAngle').removeClass('noRotate')

      // if($("#slideOut").css('opacity') == "1" && $('.firstAngle').hasClass('noRotate')  && $('.secondAngle').hasClass('rotate')) {
      //
      //
      //
      // setTimeout(function() {
      //     $("#slideOut").css('opacity', '0')
      // },500)
      //
      //
      //   $("#slideOut").animate({
      //
      //     bottom:-$('#slideOut').height(),
      //
      //
      //   },300);
      //
      //
      //
      // }



    })



    $('.emailUs').on('click', function() {

      $('#smaller').html('Contact Us')

      $(".thirdBlock").addClass('animated fadeIn')


    })



    $('#close').on('click', function() {

      $(".thirdBlock").removeClass('animated fadeIn');
      $('.firstBlock').removeClass('flexing-scroll');


      $('.wrapper').show();


      $("#slideOut").css('opacity', '0')

      $("#slideOut").css("bottom" , -$('#slideOut').height() );


      $('.firstAngle').removeClass('rotate');
      $('.secondAngle').removeClass('rotate')



    })



  }

})
