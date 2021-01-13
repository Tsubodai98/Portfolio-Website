$(function () {
  $("#portfolio-btn").on("click", function () {
    console.log("click");
    $("html,body").animate(
      {
        scrollTop: $("#portfolio-section").offset().top,
      },
      450
    );
  });
});
