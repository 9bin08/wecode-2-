$(document).on("click", mememe);

function nextSlide() {
  console.log($(".active + .slide").length);
  if ($(".active + .slide").length > 0) {
    $(".active + .slide").addClass("active");
    $($(".active")[0]).removeClass("active");
  } else {
    $(".active").removeClass("active");
    $(".slide:nth-child(1)").addClass("active");
  }
}

function mememe() {
  $(".navi li:nth-child(1)").on("click", function () {
    $(".slide").removeClass("active");
    $(".slide:nth-child(1)").addClass("active");
  });
  $(".navi li:nth-child(2)").on("click", function () {
    $(".slide").removeClass("active");
    $(".slide:nth-child(2)").addClass("active");
  });
  $(".navi li:nth-child(3)").on("click", function () {
    $(".slide").removeClass("active");
    $(".slide:nth-child(3)").addClass("active");
  });
  $(".navi li:nth-child(4)").on("click", function () {
    $(".slide").removeClass("active");
    $(".slide:nth-child(4)").addClass("active");
  });
}
