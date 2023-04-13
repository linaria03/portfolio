// 💛 원페이지 스크롤 애니매이션
var mHtml = $("html");
var page = 1;


mHtml.animate({scrollTop : 0},10);

$(window).on("wheel", function(e) {
    if(mHtml.is(":animated")) return;
    if(e.originalEvent.deltaY > 0) {
        if(page == 4) return;
        page++;
    } else if(e.originalEvent.deltaY < 0) {
        if(page == 1) return;
        page--;
    }
    var posTop =(page-1) * $(window).height();
    mHtml.animate({scrollTop : posTop});
})

// 💛 좌구산
$(".projectA_L").mouseenter(function(){
    $('.projectA_L').addClass("on")
    // $('.mainSwiper').addClass("on")
    }).mouseleave(function(){
    $('.projectA_L').removeClass("on")
    // $('.mainSwiper').removeClass("on")
    })

// 좌구산 슬라이드
var swiper = new Swiper(".jwagusanSwiper", {
    slidesPerView: "auto",
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
