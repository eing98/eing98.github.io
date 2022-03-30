$(function () {
  $(window).scroll(function () {
    var windowTop = $(window).scrollTop() + 300;
    $(".info_mn")
      .stop()
      .animate({ top: windowTop + "px" }, 300);
  });
});
