$( document ).ready(function() {

  $("[data-toggle=tooltip]").tooltip();

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

  })


  $('#next').on('click', function() {

    $('#next').addClass('activeTeal')

    $('.fa.fa-angle-right').css('color', 'white');
    $('.fa.fa-angle-left').css('color', '#008488');
  })


  $('#one').on('click', function() {

    $('#one').css('outline', 'none')
    $('#two').css('outline', 'none')

    $('.panel-collapse').each(function() {
      $(this).attr('tabindex', '0');
    });

    $('.vertical2 a').attr('tabindex', '0');
    $('.checks').attr('tabindex', '0');
    $('#submitContact').attr('tabindex', '0');

    $('#myModal').modal('hide')

    $('.modalFooter').hide();

    // $(".faqTab").removeClass('lightBlue')
    //
    // $(".faqTab").attr('src',"images/FAQ_tab_HVR-ON.png");
    // $(".contactTab").attr('src',"images/blue-contact.png");

    $('.modal-content').css('box-shadow', '0 3px 9px rgba(0, 0, 0, .6)')

    $('#one').addClass('bottomShadowDarker');
    $('#one').removeClass('bottomShadow');
    $('#two').removeClass('bottomShadow');
    $('#two').addClass('bottomDark');

    $(".secondBlock").addClass('hide2').removeClass('animated fadeIn').hide();

    $(".firstBlock").removeClass('hide1').addClass('animated fadeIn').show();
    $(".thirdBlock").addClass('hide3').removeClass('animated fadeIn').hide();


    $('#smaller').html('Frequently Asked Questions')

    $('.modal-content').addClass('opened');

    $("#slideOut").addClass('showSlideOut');

    $('#one').css('background', '#F1F1F1');
    $('#one p.white').css('color', '#008488');

    $('#one').css('z-index', '999')
    $('#two').css('z-index', '3')


    $('#two').css('background', 'linear-gradient(180deg, rgba(0,170,170,1) 0%, rgba(0,132,136,1) 100%)');

    $('p.white.first').removeClass('hover hover-1');
    $('p.white.second').addClass('hover hover-1');

    $('#two p.white').css('color', '#F1F1F1');
    $('.fa.fa-envelope-o').css('color', 'white');


    //
    // $(".faqTab").css('width', '50px');
    // $(".contactTab").css('width', '49px');


    $('#one').addClass('tabOpen');
    $('#two').removeClass('tabOpen');

  })


  $('#two').on('click', function() {

    $('.panel-collapse').each(function() {
      $(this).attr('tabindex', '0');
    });

    $('.vertical2 a').attr('tabindex', '0');
    $('.checks').attr('tabindex', '0');
    $('#submitContact').attr('tabindex', '0');

    $('#myModal').modal('hide')

    $('#one').css('outline', 'none')
    $('#two').css('outline', 'none')


    $('.modalFooter').hide();

    $('p.white.second').removeClass('hover hover-1');
    $('p.white.first').addClass('hover hover-1');

    $(".secondBlock").removeClass('hide2').addClass('animated fadeIn').show();

    $(".firstBlock").addClass('hide1').removeClass('animated fadeIn').hide();
    $(".thirdBlock").addClass('hide3').removeClass('animated fadeIn').hide();


    $('#one').removeClass('tabOpen');
    $('#tab').addClass('tabOpen');

    $('#one').css('background', 'linear-gradient(180deg, rgba(0,170,170,1) 0%, rgba(0,132,136,1) 100%)');
    $('#one p.white').css('color', '#F1F1F1');
    $('#two').css('background', '#F1F1F1');
    $('#two p.white').css('color', '#008488');

    $('.fa.fa-envelope-o').css('color', '#008488');


    $('#one').removeClass('bottomShadowDarker');
    $('#one').addClass('bottomDark');
    $('#two').addClass('bottomShadowDarker');
    $('#one').removeClass('bottomShadow');
    $('#two').removeClass('bottomShadow');

    // $(".faqTab").removeClass('lightBlue');
    // $(".faqTab").css('width', '50px');
    // $(".contactTab").css('width', '51px');

    // $(".contactTab").attr('src',"images/Contacdt_tab_HVR-ON.svg");
    // $(".faqTab").attr('src',"images/FAQ_tab_OFF.svg");

    $('.modal-content').css('box-shadow', '0 3px 9px rgba(0, 0, 0, .6)')


    $('#smaller').html('Support for Victims')

    // $('#smaller').html('For more information about this study, please contact:')

    $("#slideOut").addClass('showSlideOut');

    $('#two').css('z-index', '999')
    $('#one').css('z-index', '99')
  })


  $('.emailUs').on('click', function(e) {

    e.preventDefault();

    $('.modalFooter').show();

    $('#smaller').html('Contact Us');
    $('p.white').removeClass('hover hover-1');

    $(".secondBlock").addClass('hide2').removeClass('animated fadeIn').hide();

    $(".firstBlock").addClass('hide1').removeClass('animated fadeIn').hide();
    $(".thirdBlock").removeClass('hide3').addClass('animated fadeIn').show();


  })


  $('.emailUs').keydown(function(e) {
    if(e.keyCode == 13) {

    }
  });


  $('#close').on('click', function() {

    $('.panel-collapse').each(function() {
      $(this).attr('tabindex', '-1');
    });

    $('.vertical2 a').attr('tabindex', '-1');
    $('.checks').attr('tabindex', '-1');
    $('#submitContact').attr('tabindex', '-1');

    $('.modalFooter').hide();

    $('p.white').addClass('hover hover-1');

    setTimeout(function() {
      $(".secondBlock").addClass('hide2').removeClass('animated fadeIn').hide();
      $(".firstBlock").addClass('hide1').removeClass('animated fadeIn').hide();
      $(".thirdBlock").addClass('hide3').removeClass('animated fadeIn').hide();
    },600)

    $('#one').css('background', 'linear-gradient(180deg, rgba(0,170,170,1) 0%, rgba(0,132,136,1) 100%)');
    $('#two').css('background', 'linear-gradient(180deg, rgba(0,170,170,1) 0%, rgba(0,132,136,1) 100%)');
    $('#one p.white').css('color', 'white');
    $('#two p.white').css('color', 'white');

    $('#one').removeClass('bottomShadowDarker');
    $('#one').removeClass('bottomDark');
    $('#one').addClass('bottomShadow');
    $('#two').addClass('bottomShadow');

    $('#two').removeClass('bottomShadowDarker');
    $('#two').removeClass('bottomDark');

    $('.fa.fa-envelope-o').css('color', 'white');

    //
    // $(".faqTab").css('width', '54px');
    // $(".contactTab").css('width', '54px');


    $('.modal-content').css('box-shadow', 'none')

    $("#slideOut").removeClass('showSlideOut');

    $('#one').css('z-index', '999');
    $('#two').css('z-index', '99');


    // $(".faqTab").addClass('lightBlue')
    //
    // $(".contactTab").attr('src',"images/Contact_tab_OFF.svg");
    // $(".faqTab").attr('src',"images/FAQ_tab_OFF.svg");


  })


  $('.circle.third.show').on('click', function() {

    $('.modalFooter').hide();

    $('p.white').addClass('hover hover-1');

    setTimeout(function() {
      $(".secondBlock").addClass('hide2').removeClass('animated fadeIn').hide();
      $(".firstBlock").addClass('hide1').removeClass('animated fadeIn').hide();
      $(".thirdBlock").addClass('hide3').removeClass('animated fadeIn').hide();
    },600)


    $('#one').css('background', 'linear-gradient(180deg, rgba(0,170,170,1) 0%, rgba(0,132,136,1) 100%)');
    $('#two').css('background', 'linear-gradient(180deg, rgba(0,170,170,1) 0%, rgba(0,132,136,1) 100%)');
    $('#one p.white').css('color', 'white');
    $('#two p.white').css('color', 'white');

    $('#one').removeClass('bottomShadowDarker');
    $('#one').removeClass('bottomDark');
    $('#one').addClass('bottomShadow');
    $('#two').addClass('bottomShadow');

    $('#two').removeClass('bottomShadowDarker');
    $('#two').removeClass('bottomDark');

    $('.fa.fa-envelope-o').css('color', 'white');


    $(".faqTab").css('width', '54px');
    $(".contactTab").css('width', '54px');


    $('.modal-content').css('box-shadow', 'none')

    $("#slideOut").removeClass('showSlideOut');

    $('#one').css('z-index', '999');
    $('#two').css('z-index', '99');


    $(".faqTab").addClass('lightBlue')

    $(".contactTab").attr('src',"images/Contact_tab_OFF.svg");
    $(".faqTab").attr('src',"images/FAQ_tab_OFF.svg");


  })


  if ($(document).innerWidth() >= 768) {

    var modal1 = document.getElementById('slideOut');

    console.log(window.getComputedStyle(modal1).width);

    $("#slideOut").css("right" , -$('#slideOut').outerWidth() + 15);


    // $('#slideOut').on('focus', function(e){
    $('#one').keyup(function (e) {

      $('#smaller').html('Frequently Asked Questions')
      var code = (e.keyCode ? e.keyCode : e.which);
      if (code == 13) {


        $('#one').addClass('bottomShadowDarker');
        $('#one').removeClass('bottomShadow');
        $('#two').removeClass('bottomShadow');
        $('#two').addClass('bottomDark');

        $('#one').css('background', '#F1F1F1');
        $('#one p.white').css('color', '#008488');

        $('#one').css('z-index', '999')
        $('#two').css('z-index', '3')


        $('#two').css('background', 'linear-gradient(180deg, rgba(0,170,170,1) 0%, rgba(0,132,136,1) 100%)');

        $('p.white.first').removeClass('hover hover-1');
        $('p.white.second').addClass('hover hover-1');

        $('#two p.white').css('color', '#F1F1F1');
        $('.fa.fa-envelope-o').css('color', 'white');

        $('.panel-collapse').each(function() {
          $(this).attr('tabindex', '0');
        });

        $('.vertical2 a').attr('tabindex', '0');

        // $('.aqua').attr('tabindex', '0');
        $('.checks').attr('tabindex', '0');
        $('#submitContact').attr('tabindex', '0');

        $("#slideOut").addClass('showSlideOut');
        $(".secondBlock").addClass('hide2').removeClass('animated fadeIn').hide();

        $(".firstBlock").removeClass('hide1').addClass('animated fadeIn').show();
        $(".thirdBlock").addClass('hide3').removeClass('animated fadeIn').hide();
      }
    });


    $(".mandatoryfields").on("keypress", function () {
      if(!$('#name').val() == '' && !$('#email').val() ==''  && !$('#message').val() =='')    {


        $('#submitContact2').css('background-image' , 'linear-gradient(180deg, rgba(0,170,170,1) 0%, rgba(0,132,136,1) 100%)');

        $('#submitContact2').keyup(function (e) {

          var code = (e.keyCode ? e.keyCode : e.which);
          if (code == 9) {


            $("#slideOut").removeClass('showSlideOut');
            $("#slideOut").css("right" , -$('#slideOut').outerWidth() + 15);

            $(".modal-content").width($('#slideOut').width());

            setTimeout(function() {


              $(".secondBlock").removeClass('hide2').removeClass('animated fadeIn').hide();

              $(".firstBlock").removeClass('hide1').removeClass('animated fadeIn').hide();
              $(".thirdBlock").removeClass('hide3').removeClass('animated fadeIn').hide();

            }, 200)


          }
        });


      }
      else {

        $('#submitContact2').css('background-image' , 'linear-gradient(to top, #404040, #505050, #606060, #727272, #838383);')
      }


    });


    $('#two').keyup(function (e) {
      var code = (e.keyCode ? e.keyCode : e.which);
      if (code == 13) {

        $('.panel-collapse').each(function() {
          $(this).attr('tabindex', '0');
        });

        $('.vertical2 a').attr('tabindex', '0');

        // $('.aqua').attr('tabindex', '0');
        $('.checks').attr('tabindex', '0');
        $('#submitContact').attr('tabindex', '0');

        $('#one').css('background', 'linear-gradient(180deg, rgba(0,170,170,1) 0%, rgba(0,132,136,1) 100%)');
        $('#one p.white').css('color', '#F1F1F1');
        $('#two').css('background', '#F1F1F1');
        $('#two p.white').css('color', '#008488');

        $('.fa.fa-envelope-o').css('color', '#008488');


        $('#one').removeClass('bottomShadowDarker');
        $('#one').addClass('bottomDark');
        $('#two').addClass('bottomShadowDarker');
        $('#one').removeClass('bottomShadow');
        $('#two').removeClass('bottomShadow');

        $('#smaller').html('For more information about this study, please contact:')

        $("#slideOut").addClass('showSlideOut');
        $(".secondBlock").removeClass('hide2').addClass('animated fadeIn').show();

        $(".firstBlock").addClass('hide1').removeClass('animated fadeIn').hide();
        $(".thirdBlock").addClass('hide3').removeClass('animated fadeIn').hide();
      }
    });


    $('#closeThisPlease').keyup(function (e) {
      var code = (e.keyCode ? e.keyCode : e.which);
      if (code == 13) {

        $('.panel-collapse').each(function() {
          $(this).attr('tabindex', '-1');
        });

        $('.vertical2 a').attr('tabindex', '-1');

        // $('.aqua').attr('tabindex', '-1');
        $('.checks').attr('tabindex', '-1');
        $('#submitContact').attr('tabindex', '-1');

        $('#one').css('background', 'linear-gradient(180deg, rgba(0,170,170,1) 0%, rgba(0,132,136,1) 100%)');
        $('#two').css('background', 'linear-gradient(180deg, rgba(0,170,170,1) 0%, rgba(0,132,136,1) 100%)');
        $('#one p.white').css('color', 'white');
        $('#two p.white').css('color', 'white');

        $('#one').removeClass('bottomShadowDarker');
        $('#one').removeClass('bottomDark');
        $('#one').addClass('bottomShadow');
        $('#two').addClass('bottomShadow');

        $('#two').removeClass('bottomShadowDarker');
        $('#two').removeClass('bottomDark');

        $('.fa.fa-envelope-o').css('color', 'white');

        $("#slideOut").removeClass('showSlideOut');
        $("#slideOut").css("right" , -$('#slideOut').outerWidth() + 15);

        setTimeout(function() {


          $(".secondBlock").removeClass('hide2').removeClass('animated fadeIn').hide();

          $(".firstBlock").removeClass('hide1').removeClass('animated fadeIn').hide();
          $(".thirdBlock").removeClass('hide3').removeClass('animated fadeIn').hide();

        }, 200)


      }
    });




    $('#myModal').on('shown.bs.modal', function () {
      $('#myInput').trigger('focus')
    })


    $(".modal-content").width($('#slideOut').width());


    $(window).on("scroll", function() {
      var docHeight = $(document).height();
      var winScrolled = $(window).height() + $(window).scrollTop(); // Sum never quite reaches
      if ((docHeight - winScrolled) < 1) {

        console.log("ahhh");
        $("#stickySide2").css({
          'top': '82%'
        });
      }

      else if ((docHeight - winScrolled) > 1) {
        console.log("no ahhh");

        $("#stickySide2").css({
          'top': '90%'
        });
      }


    });


  }


  $(".mandatoryfields").on("keypress", function () {
    if(!$('#comment').val() =='')    {


      $('#submitComment').css('background-image' , 'linear-gradient(180deg, rgba(0,170,170,1) 0%, rgba(0,132,136,1) 100%)');


    }
    else {
      console.log("iiiiii")
      $('#submitComment').css('background-image' , 'linear-gradient(to top, #404040, #505050, #606060, #727272, #838383);')
    }


  });




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

    // $('.secondBlock').removeClass('flexing-scroll');
    // $('.secondBlock').addClass('flexing-fixed');




    $("#slideOut").css("bottom" , -$('#slideOut').height() );



    $('.toggleModal1').on('click', function() {

      $('.wrapper').show();


      $('#smaller').html('Frequently Asked Questions')

      $("#slideOut").css('opacity', '1')

      $("#slideOut").animate({
        bottom:'0',


      }, 200);

      $(".secondBlock").addClass('hide2').removeClass('animated fadeIn').hide();

      $(".firstBlock").removeClass('hide1').addClass('animated fadeIn').show();
      $(".thirdBlock").addClass('hide3').removeClass('animated fadeIn').hide();


      //
      // $('.secondBlock').removeClass('flexing-scroll');
      // $('.secondBlock').addClass('flexing-fixed');
      //
      // $('.firstBlock').removeClass('flexing-fixed');


      //
      // $('.firstAngle').addClass('rotate');
      // $('.secondAngle').removeClass('rotate')
      // $('.secondAngle').addClass('noRotate');
      // $('.firstAngle').removeClass('noRotate');




    })




    $('.toggleModal2').on('click', function() {


      $('.wrapper').hide();

      $('#smaller').html('For more information about this study, please contact:')

      $("#slideOut").css('opacity', '1')

      $("#slideOut").animate({
        bottom:'0',


      }, 200);


      $(".secondBlock").removeClass('hide2').addClass('animated fadeIn').show();

      $(".firstBlock").addClass('hide1').removeClass('animated fadeIn').hide();
      $(".thirdBlock").addClass('hide3').removeClass('animated fadeIn').hide();



      //
      // $('.secondAngle').addClass('rotate')
      // $('.firstAngle').removeClass('rotate');
      // $('.firstAngle').addClass('noRotate');
      // $('.secondAngle').removeClass('noRotate')




    })



    $('.emailUs').on('click', function() {


      $(".secondBlock").addClass('hide2').removeClass('animated fadeIn').hide();

      $(".firstBlock").addClass('hide1').removeClass('animated fadeIn').hide();
      $(".thirdBlock").removeClass('hide3').addClass('animated fadeIn').show();

      $('#smaller').html('Contact Us')




    })



    $('#close').on('click', function() {

      setTimeout(function() {

        $(".secondBlock").addClass('hide2').removeClass('animated fadeIn').hide();
        $(".firstBlock").addClass('hide1').removeClass('animated fadeIn').hide();
        $(".thirdBlock").addClass('hide3').removeClass('animated fadeIn').hide();
      },600)

      $('.wrapper').show();


      $("#slideOut").css('opacity', '0')

      $("#slideOut").css("bottom" , -$('#slideOut').height() );


      $('.firstAngle').removeClass('rotate');
      $('.secondAngle').removeClass('rotate')



    })



  }

})
