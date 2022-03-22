$(document).ready(function() {
  // --- our code goes here ---
  $(".textarea").keyup(function () {
    const textToVal = $(this).val();
    let maxLen = 140 - textToVal.length;
    let counter = $(this).parent().find(".counter");
    counter.val(maxLen)
    if (maxLen < 0) {
      counter.css('color', 'red') 
    } else {
      counter.css('color', '');
    }
  });
});