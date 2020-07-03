$(".nav__menu__item").on("click", function (e) {
  var closestNavItem = $(this).find("a");
  $(".nav__menu__item").find("a").removeClass("selected");
  $(".nav__menu--open").hide();
  closestNavItem.addClass("selected");
  if (closestNavItem.hasClass("selected")) {
    $(this).find(".nav__menu--open").show();
  }
});

$(".mobile-humburger").on("click", function (e) {
  e.stopPropagation();
  $(".mobile-humburger").toggleClass("active");
  $(".line2").toggleClass("hide-on-mobile");
  $(".line1").toggleClass("rotate-line");
  $(".line3").toggleClass("rotate-line");

  $(".mobile__menu").toggleClass("active");
  if (!$(".mobile__menu").hasClass("active")) {
    $(".mobile__menu").toggleClass("disActive");
  }
});

$(".mobile__inner_li__title").on("click", function (e) {
  e.stopPropagation();
  $(".mobile__menu").toggleClass("height-auto");
  $(this).find(".ul__deepest").toggle();
  $(this).find(".v-line").toggleClass("rotate");
  $(this).find(".mobile__menu").toggleClass("active");
});

$(".mobile__ul__collapse__menu").click(function (e) {
  $(this).toggleClass("active");
  $(this).find(".mobile__ul__inner__collapse__menu").toggleClass("show-on-mobile");
  $(this).find(".down-arrow").toggleClass("rotate");
  $(".mobile__menu").removeClass("height-auto");
});
