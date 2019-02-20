// $(document).ready(function() {
//  $('h1').click(function() {
//    alert("This is a header.");
//  });
//
//  $('p').click(function() {
//    alert("This is a paragraph.");
//  });
//
//  $('img').click(function() {
//    alert("This is an image.");
//  });
// });
$(document).ready(function() {
  $(".clickable").click(function() {
    $(".walrus-showing").toggle();
    $(".walrus-hidden").toggle();
  $(".click").click(function () {
      $(".walrus-showing").fadeIn();
      $(".walrus-showing").fadeOut();
    });
  });
});
