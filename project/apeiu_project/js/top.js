$(function () {
  $(window).scroll(function () {
    var windowTop = $(window).scrollTop() + 700;
    $("#pageup")
      .stop()
      .animate({ top: windowTop + "px" }, 300);
  });
});
