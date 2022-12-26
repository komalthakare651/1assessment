$(document).ready(function () {
  $(".btn").click(function () {
    if ($(window).width() < 768) {
      $(".menu").slideToggle();
    }
  });
});
