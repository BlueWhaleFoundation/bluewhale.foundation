//////////////////// ver 4.0 ///////////////////////

// 스크롤 텍스트
$(window).scroll(function() {
  var winTop = $(window).scrollTop(); //스크롤의 현재 위치
  var whatwedo = winTop + 1000;

  $(".sa_history h2").css({
    transform: "translateX( -" + whatwedo / 3 + "px)"
  });
});

// 스크롤 이벤트
$(window).scroll(function() {
  var winTop = $(window).scrollTop(); // 스크롤 현재 위치
  var docHeight = $(document).height(); // 문서 높이 고정
  var winHeight = window.innerHeight; // 윈도우창 높이 가변

  var winBottom = winTop + winHeight; // 스크롤 bottom

  var mainVisualH = $(".main_visual").outerHeight();
  var saCubeH = $(".sa_cube").outerHeight();

  // 높이값 이벤트
  // effect css
  var heightEffect = {
    transform: "translate(0, 0)",
    opacity: "1"
  };

  // 순서대로 나오기 위한 배열. 높이값
  var saKeyH = new Array();

  for (var i = 0; $(".sa_key_area li").length > i; i++) {
    saKeyH[i] = [$(".sa_key_area li:nth-child(" + (i + 1) + ")").outerHeight()];
  }

  for (var i = 0; $(".sa_key_area li").length > i; i++) {
    var saKeyHSum = 0;
    for (var j = 0; j < i; j++) {
      saKeyHSum = saKeyHSum + parseInt(saKeyH[j]);
    }
    console.log(saKeyHSum, "saKeyHSum");

    if (winTop + 700 >= mainVisualH + saCubeH + saKeyHSum) {
      $(".sa_key_area li:nth-child(" + (i + 1) + ")").css(heightEffect);
      $(".sa_key_area li:nth-child(" + (i + 1) + ") h3").css(heightEffect);
      $(".sa_key_area li:nth-child(" + (i + 1) + ") p").css(heightEffect);
    }
  }

  // 히스토리 이미지영역의 패딩값
  var historyImgPadding =
    window.innerHeight / 2 - $(".history_wrap .history_img_area").height() / 2;

  $(".history_wrap .history_txt, .history_img_area").css({
    paddingTop: historyImgPadding
  });

  // 히스토리 텍스트영역의 패딩bottom 값
  for (var i = 1; 4 > i; i++) {
    var historyTxtPadding =
      ($(`.history_wrap .history0${i} .history_img_area img`).height() -
        ($(`.history_wrap .history0${i} .history_txt_area .tit`).height() +
          40 +
          $(`.history_wrap .history0${i} .history_txt_area .txt`).height())) /
      2;

    $(`.history_wrap .history0${i} .history_txt_area .txt`).css({
      paddingBottom: historyTxtPadding
    });
  }

  // 모바일 히스토리 이미지 top
  // for (var i = 1; 4 > i; i++) {
  //   var historyImgPadding =
  //     $(`.history_list_m .history0${i} .history_txt_wrap`).height() + 40;

  //   $(`.history_list_m .history0${i} .history_img_wrap`).css({
  //     top: historyImgPadding
  //   });
  // }

  var windowHalf = winHeight / 2;

  var productOp =
    $(".main_visual").outerHeight() +
    $(".sa_wrap").outerHeight() +
    $(".sa_history").outerHeight() +
    $(".bw_dan_wrap").outerHeight() +
    $(".bw_newsletter").outerHeight() +
    $(".bw_vision").outerHeight();

  if (winTop + 500 >= productOp) {
    $(".product_sa").css({ opacity: "1" });
  }
  var productOp2 =
    $(".main_visual").outerHeight() +
    $(".sa_wrap").outerHeight() +
    $(".sa_history").outerHeight() +
    $(".bw_dan_wrap").outerHeight() +
    $(".bw_newsletter").outerHeight() +
    $(".bw_vision").outerHeight() +
    $(".product_sa").outerHeight();

  if (winTop + 500 >= productOp2) {
    $(".product_spalsh").css({ opacity: "1" });
  }
  var productOp3 =
    $(".main_visual").outerHeight() +
    $(".sa_wrap").outerHeight() +
    $(".sa_history").outerHeight() +
    $(".bw_dan_wrap").outerHeight() +
    $(".bw_newsletter").outerHeight() +
    $(".bw_vision").outerHeight() +
    $(".product_sa").outerHeight() +
    $(".product_spalsh").outerHeight();

  if (winTop + 500 >= productOp3) {
    $(".product_talket").css({ opacity: "1" });
  }
});

// 스크롤 opacity

window.addEventListener("scroll", function() {
  var winHeight = window.innerHeight; // 윈도우창 높이 가변

  var currScrollPos2 =
    window.pageYOffset ||
    document.documentElement.scrollTop ||
    document.body.scrollTop ||
    0;

  var visionOpacity =
    $(".main_visual").outerHeight() +
    $(".sa_wrap").outerHeight() +
    $(".sa_history").outerHeight() +
    $(".bw_dan_wrap").outerHeight() +
    $(".bw_newsletter").outerHeight();

  if (currScrollPos2 > visionOpacity) {
    $(".bw_vision .bg").css({
      opacity: (currScrollPos2 / visionOpacity + -1) * 30
    });
  }
});

$(function() {
  // 모바일 gnb 클릭이벤트

  $(".ham_wrap").click(function() {
    $(".header_m .gnb_menu").toggleClass("gnb_slide");
    $("body").toggleClass("bodyScroll");
    $(".ham_wrap .bar").toggleClass("ㄴ");
    $(".ham_wrap .bar:eq(0)").toggleClass("bar_01");
    $(".ham_wrap .bar:eq(1)").toggleClass("bar_02");
    $(".ham_wrap .bar:eq(2)").toggleClass("bar_03");
  });
  $(".header_m .gnb_menu a").click(function() {
    $(".header_m .gnb_menu").removeClass("gnb_slide");
    $("body").removeClass("bodyScroll");
    $(".ham_wrap .bar:eq(0)").removeClass("bar_01");
    $(".ham_wrap .bar:eq(1)").removeClass("bar_02");
    $(".ham_wrap .bar:eq(2)").removeClass("bar_03");
  });

  // 영문 한글 변환시 메인 타이틀 폰트변경
  $(".lang_kor").click(function() {
    $(".main_txt_cell h2").addClass("kor_font");
  });
  $(".lang_eng").click(function() {
    $(".main_txt_cell h2").removeClass("kor_font");
  });

  // 메뉴 클릭시 부드럽게.
  $(".gnb_menu li a").click(function() {
    var gnb_menu = $($(this).attr("data-target")).offset().top;

    $("html, body").animate({ scrollTop: gnb_menu }, 2050);
  });

  //
  var visionImgH = $(".vision_img img").height();
  var winHeight = window.innerHeight; // 윈도우창 높이 가변
  var visionImgPadding = (winHeight - visionImgH) / 2;

  $(".vision_img .bg").css({ height: visionImgH });
  $(".vision_img").css({ paddingTop: visionImgPadding });

  $(window).resize(function() {
    var visionImgH = $(".vision_img img").height();
    var winHeight = window.innerHeight; // 윈도우창 높이 가변
    var visionImgPadding = (winHeight - visionImgH) / 2;

    $(".vision_img .bg").css({ height: visionImgH });
    $(".vision_img").css({ paddingTop: visionImgPadding });
    
  });
});
