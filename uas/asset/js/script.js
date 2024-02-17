// riksa paradila - 10123901 - IF-12
$(document).ready(function () {
  setTimeout(function () {
    $(".loading").css("display", "none");
  }, 5000);

  var scene = document.querySelectorAll(".scene");
  scene.forEach(function (el) {
    var parallax = new Parallax(el);
  });

  $(".banner-section-inner").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    fade: true,
    speed: 500,
    asNavFor: ".controller-right-icons-inner",
    touchThreshold: 100,
  });
  $(".controller-right-icons-inner").slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    asNavFor: ".banner-section-inner",
    arrows: false,
    dots: false,
    focusOnSelect: true,
    variableWidth: true,
  });
  function onLoadTest() {
    $(".banner-section-loop").each(function (i) {
      var j = i + 1;
      if (j % 23 === 1) {
        $(this).addClass("banner-loop-omen");
      } else if (j % 23 === 2) {
        $(this).addClass("banner-loop-phoenix");
      } else if (j % 23 == 3) {
        $(this).addClass("banner-loop-viper");
      } else if (j % 23 == 4) {
        $(this).addClass("banner-loop-jett");
      } else if (j % 23 == 5) {
        $(this).addClass("banner-loop-raze");
      } else if (j % 23 == 6) {
        $(this).addClass("banner-loop-breach");
      } else if (j % 23 == 7) {
        $(this).addClass("banner-loop-brimstone");
      } else if (j % 23 == 8) {
        $(this).addClass("banner-loop-sage");
      } else if (j % 23 == 9) {
        $(this).addClass("banner-loop-sova");
      } else if (j % 23 == 10) {
        $(this).addClass("banner-loop-cypher");
      } else if (j % 23 == 11) {
        $(this).addClass("banner-loop-reyna");
      } else if (j % 23 == 12) {
        $(this).addClass("banner-loop-killjoy");
      } else if (j % 23 == 13) {
        $(this).addClass("banner-loop-skye");
      } else if (j % 23 == 14) {
        $(this).addClass("banner-loop-yoru");
      } else if (j % 23 == 15) {
        $(this).addClass("banner-loop-astra");
      } else if (j % 23 == 16) {
        $(this).addClass("banner-loop-kayo");
      } else if (j % 23 == 17) {
        $(this).addClass("banner-loop-chamber");
      } else if (j % 23 == 18) {
        $(this).addClass("banner-loop-neon");
      } else if (j % 23 == 19) {
        $(this).addClass("banner-loop-fade");
      } else if (j % 23 == 20) {
        $(this).addClass("banner-loop-harbor");
      } else if (j % 23 == 21) {
        $(this).addClass("banner-loop-gekko");
      } else if (j % 23 == 22) {
        $(this).addClass("banner-loop-deadlock");
      } else {
        $(this).addClass("banner-loop-iso");
      }
    });
  }
  window.onload = onLoadTest();
  function customclassadd() {
    $(".header-section-main").removeClass("header-section-blue");
    $(".header-section-main").removeClass("header-section-green");
    $(".header-section-main").addClass("header-section-orange");
  }

  $(".banner-section-inner").on(
    "afterChange",
    function (event, slick, currentSlide, nextSlide) {
      customclassadd();
      $(".banner-main-img .main-img").addClass("character-animation");
    }
  );

  $(".paralax").JSoftParallax({
    speed: "0",
  });
});

const slider = document.querySelector(".slider");

function activate(e) {
  const items = document.querySelectorAll(".item");
  e.target.matches(".next") && slider.append(items[0]);
  e.target.matches(".prev") && slider.prepend(items[items.length - 1]);
}

document.addEventListener("click", activate, false);

$(window).scroll(function () {
  $(".container p").each(function () {
    var scrollTop = $(window).scrollTop(),
      elementOffset = $(this).offset().top,
      distance = elementOffset - scrollTop,
      windowHeight = $(window).height(),
      breakPoint = windowHeight * 0.9;

    if (distance > breakPoint) {
      $(this).addClass("more-padding");
    }
    if (distance < breakPoint) {
      $(this).removeClass("more-padding");
    }
  });
});
