$(document).ready(function() {
  // --- our code goes here ---
  $(".textarea").keyup(function () {
    const textToVal = $(this).val();
    let maxLen = 140 - textToVal.length;
    $(".counter").html(maxLen);
    if (maxLen < 0) {
      $(".counter").css('color', 'red') 
    } else {
      $(".counter").css('color', '');
    }
  });
});