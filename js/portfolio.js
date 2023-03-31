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

// 💛 자연은
$(".projectB_R").mouseenter(function(){
    $('.projectB_R').addClass("on")
    // $('.mainSwiper').addClass("on")
    }).mouseleave(function(){
    $('.projectB_R').removeClass("on")
    // $('.mainSwiper').removeClass("on")
    })
