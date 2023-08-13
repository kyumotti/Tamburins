$(document).ready(function(){

  // 상품 설명 아코디언 
  $(".que").click(function() {
    $(this).next(".anw").stop().slideToggle(300);
   $(this).toggleClass('on').siblings().removeClass('on');
   $(this).next(".anw").siblings(".anw").slideUp(300); // 1개씩 펼치기
 });

  //  모바일 푸터 아코디언 메뉴

  $("div.site_map > ul > li").click(function() {
    $(this).children("ul").stop().slideToggle(300);
    // $(this).toggleClass('on').siblings().removeClass('on');
    $(this).siblings("li").children("ul").slideUp(300); // 1개씩 펼치기
  });


})

window.addEventListener("click", e=> {
  e.preventDefault()
})

const hamBtn = document.querySelector(".ham_icon");
const asideBg = document.querySelector(".aside_bg");
const hamGnb = document.querySelector(".ham_gnb");
const closeBtn = document.querySelector(".ham_gnb>button");

hamBtn.addEventListener("click", e=> {
  asideBg.classList.add("on");
  hamGnb.classList.add("on")
})

closeBtn.addEventListener("click", e=> {
  asideBg.classList.remove("on");
  hamGnb.classList.remove("on")
})
