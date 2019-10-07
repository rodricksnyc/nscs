$( document ).ready(function() {

    resizeDiv();


window.onresize = function(event) {
    resizeDiv();
}

function resizeDiv() {
    vpw = $(window).width();
    vph = $(window).height();
    $('#main-wrapper').css({'height': vph + 'px'});
}

$('#one').on('click', function() {

  $('.modal-content').addClass('opened')
  $("#slideOut").addClass('showSlideOut');
  $('#one').css('background', '#F1F1F1');
  $('#one p.white').css('color', '#008488');
  $('#one').css('z-index', '999')
  $('#two').css('z-index', '99')

  $('#two').css('background', '#008488');
  $('#two p.white').css('color', '#F1F1F1');

  $('.firstBlock').removeClass('flexing-scroll');
  $('.secondBlock').addClass('flexing-scroll');
  $('.secondBlock').removeClass('unset');

  // $('div#one').addClass('tabOpen');
  // $('#two').removeClass('tabOpen');

})


$('#two').on('click', function() {

  $("#slideOut").addClass('showSlideOut');

  $('.firstBlock').addClass('flexing-scroll');
  $('.secondBlock').removeClass('flexing-scroll');
  $('.secondBlock').addClass('unset');

  // $('#one').removeClass('tabOpen');
  // $('#tab').addClass('tabOpen');

  $('#one').css('background', '#008488');
  $('#one p.white').css('color', '#F1F1F1');
  $('#two').css('background', '#F1F1F1');
  $('#two p.white').css('color', '#008488');
  $('#two').css('z-index', '999')
  $('#one').css('z-index', '99')
})



// if ($('#slideOut').is('.showSlideOut')   || $('.modal-content').is('.opened') ) {
//
//   $('#one').on('click', function() {
//
//     console.log('siefyuvievg')
//
//     $('.modal-content').removeClass('opened')
//     $("#slideOut").toggleClass('showSlideOut');
//     $('#one').css('background', '#008488');
//     $('#one p.white').css('color', 'white');
//
//   })
//
// }





$('#close').on('click', function() {
  $("#slideOut").removeClass('showSlideOut');
  $('#one').css('background', '#008488');
  $('#one p.white').css('color', 'white');
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

         $("#slideOut").css('opacity', '1')

     $("#slideOut").animate({
       bottom:'0',


     }, 200);

     $('.secondBlock').removeClass('flexing-scroll');
     $('.secondBlock').addClass('flexing-fixed');

      $('.firstBlock').removeClass('flexing-fixed');



      $('.firstAngle').addClass('rotate');
      $('.secondAngle').removeClass('rotate')






    })


    $('.toggleModal2').on('click', function() {

       $("#slideOut").css('opacity', '1')

     $("#slideOut").animate({
       bottom:'0',

     }, 200);

     $('.secondBlock').removeClass('flexing-scroll');
     $('.secondBlock').removeClass('flexing-fixed');

      $('.firstBlock').addClass('flexing-fixed');



    $('.secondAngle').addClass('rotate')
    $('.firstAngle').removeClass('rotate');



    })



    $('#close').on('click', function() {


       $("#slideOut").css('opacity', '0')

      $("#slideOut").css("bottom" , -$('#slideOut').height() );


      $('.firstAngle').removeClass('rotate');
      $('.secondAngle').removeClass('rotate')



    })



}

})
