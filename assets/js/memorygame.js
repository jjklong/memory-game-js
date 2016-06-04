var clicker = 0;                                  //define variable 'clicker' to track the number of clicks later. Start at 0.
console.log(clicker);                             //show initial clicker value in console

$('.card1').click(function () {                   //select '.card1' class and run the following function when one is clicked
  clicker++;                                      //on each mouse click, the clicker value increases by one

  if (clicker == 1) {                             //if the clicker value is equal to 1....
    $(this).css('transform', 'rotateY(180deg)');  //select THIS and change the CSS style transform to rotate 180degrees
    console.log($(this).attr('value'));           //show the attribute 'value' in the console when clicked
    console.log(clicker);                         //show the current 'click' - should be 1
  }
  else if (clicker == 2) {                        //if the clicker value is equal to 2....
    $(this).css('transform', 'rotateY(180deg)');  //select THIS and change the CSS style transform to rotate 180degrees
    console.log($(this).attr('value'));           //show the attribute 'value' in the console when clicked
    console.log(clicker);                         //show the current 'click' - should be 2
    clicker = 0;                                  //after the second click, now set the clicker back to 0
  }
});


//SETTING UP FUNCTION TO ROTATE ON CLICK, BUT ONLY ALLOWING 2 CLICKS BEFORE RESET
// $('.card1').on('click', function () {              //select '.card1' and on the mouse click, run this function:
//   $(this).css('transform', 'rotateY(180deg)');    //select 'this' and assign CSS to rotate 180deg
//   clicker++;                                      //the clicker starting at 0 increase 1 interval upon each click
//   console.log(clicker);                           //track the click amount
//
//   var whichIcon = $(this).attr('value');          //on each click, the variable 'whichIcon' will track the 'value' attribute of '.card1'
//   console.log(whichIcon);                         //log each value when clicked
//
//   if (clicker == 1) {
//     return 1;
//   }
//   else if (clicker == 2) {
//     $(this).css('transform', 'rotateY(180deg)');
//   }
//
// });
