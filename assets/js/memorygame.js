var clicker = 0;                                  //define variable 'clicker' to track the number of clicks later. Start at 0.
console.log(clicker);                             //show initial clicker value in console
//
// $('.card1').click(function () {                   //select '.card1' class and run the following function when one is clicked
//   clicker++;                                      //on each mouse click, the clicker value increases by one
//
//   if (clicker == 1) {                             //if the clicker value is equal to 1....
//     $(this).css('transform', 'rotateY(180deg)');  //select THIS and change the CSS style transform to rotate 180degrees
//     console.log($(this).attr('value'));           //show the attribute 'value' in the console when clicked
//     console.log(clicker);                         //show the current 'click' - should be 1
//     $(this).addClass('flipped');
//   }
//   else if (clicker == 2) {                        //if the clicker value is equal to 2....
//     $(this).css('transform', 'rotateY(180deg)');  //select THIS and change the CSS style transform to rotate 180degrees
//     console.log($(this).attr('value'));           //show the attribute 'value' in the console when clicked
//     console.log(clicker);                         //show the current 'click' - should be 2
//     clicker = 0;                                  //after the second click, now set the clicker back to 0
//   }
// });

///////////////////////
///////////////////////
$('.card1').click(function () {                     //select '.card1' class and run the following function when one is clicked
  clicker++;                                        //on each mouse click, the clicker value increases by one

  if (clicker < 3) {                                //if the click is less than 3, rotate card
    $(this).css('transform', 'rotateY(180deg)');
    console.log($(this).attr('value'));
    console.log(clicker);
  }
  if (clicker == 1) {                               //if clicker equals 1, add 'flipped' class
    $(this).addClass('flipped');
  }                                                 //if clicker equals 2 and the values equal each other, remove the flipped class and add match
  else if ((clicker == 2) && ($(this).attr('value') == ($('.flipped').attr('value')))) {
    $(this).addClass('match').removeClass('flipped');
    $('.flipped').addClass('match').removeClass('flipped');
    clicker = 0;
  }                                                 //if clicker equals 2 and the values dont match, turn cards back over and remove 'flipped' class
  else if ((clicker == 2) && ($(this).attr('value') !== ($('.flipped').attr('value')))) {
    $(this).css('transform', 'rotateY(-180deg)').removeClass('flipped');
    $('.flipped').css('transform', 'rotateY(-180deg)').removeClass('flipped');
    clicker = 0;    //reset clicker to 0
  }
});

///////////////////////
///////////////////////
  // else if ( (clicker == 2) && (($(this).attr('value')) == ($('.flipped').attr('value'))) ) {
  //   console.log($(this).attr('value'));
  //   console.log(clicker);
  //   $(this).css('transform', 'rotateY(180deg)').addClass('match');
  // }
  // else if ( (clicker == 2) && (($('.flipped').attr('value')) !== ($(this).attr('value'))) ) {
  //   $('.flipped').css('transform', '');
  //   $(this).
  //   console.log($(this).attr('value'));
  //   console.log(clicker);
  //   clicker = 0;
  // }
  // });
///////////////////////
///////////////////////

// var cardOne = $(this).attr('value');          //create variable assigned to this attribute value
// console.log(cardOne);
//
// if (clicker === 1) {                           //if one click, turn card over
//   $(this).css('transform', 'rotateY(180deg)');
// }
// else if ((clicker === 2) && (($('.card1')).attr('value') == cardOne)) {    //if two clicks and current card value equals previous, turn over
//   $('.card1').css('transform', 'rotateY(180deg)');
//   clicker = 0;
// }
// else if ((clicker === 2) && (($('.card1')).attr('value') !== cardOne)) {   //if values dont match, turn over and remove style
//   $(this).css('transform', 'rotateY(180deg)');
//   $('.card1').removeAttr('style');
//   clicker = 0;
// }
//
// });
