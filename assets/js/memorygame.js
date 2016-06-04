var clicker = 0;              //define variable 'clicker' to track the number of clicks later. Start at 0.
console.log(clicker);

var whichIcon = $('.card1').attr('value');
console.log(whichIcon);


$('.card1').on('click', function() {              //select '.card1' and on the mouse click, run this function:
  $(this).css('transform', 'rotateY(180deg)');    //select 'this' and assign CSS to rotate 180deg
  clicker++;                                      //the clicker starting at 0 increase 1 interval upon each click
  console.log(clicker);                           //track the click amount

  var whichIcon = $(this).attr('value');          //on each click, the variable 'whichIcon' will track the 'value' attribute of '.card1'
  console.log(whichIcon);                         //log each value when clicked

});




  // var firstCard = $(this).attr('value');
  // console.log(firstCard);
  // var secondCard = clicker[2];
  // console.log(clicker[2]);




//   var checkClass = $('.idrop').
//
//   if ($(this).hasClass('fa-twitter')) {
//     return true;
//   } else if (!$(this).hasClass('fa-twitter')) {
//     return false;
//   }
// });
//
// function cardMatch (firstCard, secondCard) {
//   if (firstCard === secondCard) return true;
//
//   var classCheck = $('.idrop').
// }





// $('.perspective').on('click', function(e) {
//   if ($('.card1').hasClass('fa-beer')) {
//     $('.card1').removeClass('fa');
//   }
// });


// / var icons = $('.card1');
// console.log(icons);
//
////IF this class matches this class, do nothing
// var icons = $('.card1');
// var c = icons.indexOf($());
//
// if (c<3) {
//   console.log(c);
// } else {
//   $(this).css('transform', 'rotateY(-180deg)');
// }
