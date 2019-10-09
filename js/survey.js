$( document ).ready(function() {



// $('.clear').mouseover(function() {
//   $('.aquaLine').show()
// })
//
// $('.clear').mouseout(function() {
//   $('.aquaLine').hide()
// })

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

    $(".faqTab").attr('src',"images/FAQ_tab_HVR-ON.svg");
    $(".contactTab").attr('src',"images/Contact_tab_OFF.svg");

    //
    // $('#one').addClass('bottomShadowDarker');
    // $('#one').removeClass('bottomShadow');
    // $('#two').removeClass('topShadow');


    $('#smaller').html('Frequently Asked Questions')

    $('.modal-content').addClass('opened')
    $("#slideOut").addClass('showSlideOut');
    // $('#one').css('background', '#F1F1F1');
    // $('#one p.white').css('color', '#008488');
    $('#one').css('z-index', '999')
    $('#two').css('z-index', '99')
    //
    // $('#two').css('background', 'linear-gradient(180deg, rgba(0,170,170,1) 0%, rgba(0,132,136,1) 100%)');
    // $('#two p.white').css('color', '#F1F1F1');

    $('.firstBlock').removeClass('flexing-scroll');
    $('.secondBlock').addClass('flexing-scroll');
    $('.secondBlock').removeClass('unset');

    // $('div#one').addClass('tabOpen');
    // $('#two').removeClass('tabOpen');

  })


  $('#two').on('click', function() {

    // $('#one').removeClass('bottomShadow');
    // $('#one').removeClass('bottomShadowDarker');
    // $('#two').addClass('topShadow');

  $(".faqTab").removeClass('lightBlue')

    $(".contactTab").attr('src',"images/Contacdt_tab_HVR-ON.svg");
      $(".faqTab").attr('src',"images/FAQ_tab_OFF.svg");



    $('#smaller').html('For more information about this study, please contact:')

    $("#slideOut").addClass('showSlideOut');

    $('.firstBlock').addClass('flexing-scroll');
    $('.secondBlock').removeClass('flexing-scroll');
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



  $('#close').on('click', function() {
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




    $("#slideOut").css("right" , -$('#bigWrapper').outerWidth());


    $(".modal-content").width($('#bigWrapper').width());

  }



  if ($(document).innerWidth() <= 767) {

    var mobile = document.getElementById('mobileModal');

    console.log(window.getComputedStyle(mobile).width);


    var foot = document.getElementById('foot2');

    console.log(window.getComputedStyle(foot).height);

    var boxes = document.getElementById('boxes');

    console.log(window.getComputedStyle(boxes).height);

    var foot2 = $('#foot2').height() + $('#boxes').height();

    console.log(foot2)

    $('.secondBlock').removeClass('flexing-scroll');
    $('.secondBlock').addClass('flexing-fixed');


    $(".stickBottomMobile").css({
      'bottom': ($('#foot2').height() + 'px')
    });



    $("#slideOut").css("bottom" , -$('#slideOut').height() );





    $('.toggleModal1').on('click', function() {

      $(".toggleModal2").animate({
        bottom:'-43',

      }, 100);

      $(".toggleModal2").css('position', 'relative')

      $('#smaller').html('Frequently Asked Questions')

      $("#slideOut").css('opacity', '1')

      $("#slideOut").animate({
        bottom:'0',

      }, 200);

      $(".stickBottomMobile").animate({
        bottom:'0',


      }, 300);

      $("#foot2").animate({
        height:'0',


      }, 300);


      $('.secondBlock').removeClass('flexing-scroll');
      $('.secondBlock').addClass('flexing-fixed');

      $('.firstBlock').removeClass('flexing-fixed');



      $('.firstAngle').addClass('rotate');
      $('.secondAngle').removeClass('rotate')
      $('.secondAngle').addClass('noRotate');
      $('.firstAngle').removeClass('noRotate');

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



      $('#smaller').html('For more information about this study, please contact:')

      $("#slideOut").css('opacity', '1')

      $("#slideOut").animate({
        bottom:'0',


      }, 200);

      $(".stickBottomMobile").animate({
        bottom:'0',


      }, 300);

      $("#foot2").animate({
        height:'0',


      }, 300);

      $(".toggleModal1").animate({
        bottom:'-43',

      }, 100);

      $(".toggleModal1").css('position', 'relative')

      $('.secondBlock').removeClass('flexing-scroll');
      $('.secondBlock').removeClass('flexing-fixed');

      $('.firstBlock').addClass('flexing-fixed');



      $('.secondAngle').addClass('rotate')
      $('.firstAngle').removeClass('rotate');
      $('.firstAngle').addClass('noRotate');
      $('.secondAngle').removeClass('noRotate')

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



    $('#close').on('click', function() {

      $(".toggleModal1").animate({
        bottom:'0',

      }, 100);

      $(".toggleModal1").css('position', 'unset')

      $(".toggleModal2").animate({
        bottom:'0',

      }, 100);

      $(".toggleModal2").css('position', 'unset')

      $(".stickBottomMobile").animate({
        bottom:  50


      }, 300);

      $("#foot2").animate({
        height:'50',


      }, 300);


      $("#slideOut").css('opacity', '0')

      $("#slideOut").css("bottom" , -$('#slideOut').height() );


      $('.firstAngle').removeClass('rotate');
      $('.secondAngle').removeClass('rotate')



    })



  }

})
