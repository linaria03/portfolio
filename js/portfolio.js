const $text = document.querySelector(".typing .text");

// 글자 모음
const letters = [
  "성실하고 \n 성취지향적인",
  "퍼블리셔 지원자 하다슬입니다.",
  // "JavaScript \n Typing Test!"
];


// 글자 입력 속도
const speed = 100;
let i = 0;

// 줄바꿈을 위한 <br> 치환
const changeLineBreak = (letter) => {
  return letter.map(text => text === "\n" ? "<br>" : text);
}

// 타이핑 효과
const typing = async () => {
  // 기존코드에서 개행치환코드 추가
  const letter = changeLineBreak(letters[i].split(""));

  while (letter.length) {
    await wait(speed);
    $text.innerHTML += letter.shift();
  }

  // 잠시 대기
  await wait(800);

  // 지우는 효과
  //   remove();
  if (letters[i + 1]) remove();
}

// 글자 지우는 효과
const remove = async () => {
  // 기존코드에서 개행치환코드 추가
  const letter = changeLineBreak(letters[i].split(""));

  while (letter.length) {
    await wait(speed);

    letter.pop();
    $text.innerHTML = letter.join("");
  }

  // 다음 순서의 글자로 지정, 타이핑 함수 다시 실행
  i = !letters[i + 1] ? 0 : i + 1;
  typing();
}

// 딜레이 기능 ( 마이크로초 )
function wait(ms) {
  return new Promise(res => setTimeout(res, ms))
}

// 초기 실행
setTimeout(typing, 1500);

// 💛scroll 연결


//스크롤버튼
$(function () {
  //리사이징 할때마다 새로고침
  var lastWidth = $(window).width();
  $(window).resize(function () {
    if ($(window).width() != lastWidth) {
      location.reload();
      lastWidth = $(window).width();
      return false;
    }
  });
  $(".scroll span").each(function () {
    var thisOffset = $("." + $(this).data('id')).offset().top;
    // console.log(thisOffset)
    $(this).click(function () {
      $("html, body").animate({
        scrollTop: thisOffset
      }, 1000);
      $(this).addClass('on').siblings().removeClass('on');
    });
  });
});


// 💛 원페이지 스크롤 애니매이션
var mHtml = $("html");
var page = 1;


mHtml.animate({ scrollTop: 0 }, 10);

$(window).on("wheel", function (e) {
  if (mHtml.is(":animated")) return;
  if (e.originalEvent.deltaY > 0) {
    if (page == 5) return;
    page++;
  } else if (e.originalEvent.deltaY < 0) {
    if (page == 1) return;
    page--;
  }  
  var posTop = (page - 1) * $(window).height();
  mHtml.animate({ scrollTop: posTop });
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
