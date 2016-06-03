//FUNCTION TO ANIMATE HOME PAGE//
////////////////////////////////
//  1)  ANNIMATE CSS PROPERTIES WITH .animate() METHOD
//   a) .animate({ INCLUDE CSS STYLE HERE } DURATION, EASING, COMPLETE);
//  2)  LOOP FUNCTION TO REPEAT AFTER IT FINISHES

// $(function animation () {       //create animation function
//   $('.wrapper').animate({     //select .wrapper and assign the following CSS values after .animate
//     opacity: .5,              //change opacity to half of the original amount
//     width: 90%                //decrease width
//   }, 800, complete);           //DURATION = 800ms and complete the annimation
// });

$(function animation() {
  $('.wrapper').animate(
    {top: 10}, 500, 'linear')
    .animate({top: 0}, 500, 'linear')
    .animate({top: 10}, 500, 'linear')
    .animate({top: 0}, 500, 'linear');
  });
