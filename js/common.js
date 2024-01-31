$(function() {
    //よくある質問クリックイベント
    $('.faq-question').click(function() {
     // $(this).toggleClass('open');
      $(this).find('.faq-button').toggleClass('open');
      $(this).next().slideToggle();
    });

    $(".kv").slick({
      autoplay: true, // 自動再生
      autoplaySpeed: 3000, // 再生速度（ミリ秒設定） 1000ミリ秒=1秒
      infinite: true, // 無限スライド
      arrows: false, // 矢印
      dots: false, // インジケーター
      pauseOnFocus: false,//フォーカスで一時停止
      pauseOnHover: false,//マウスホバーで一時停止
    });

    $('.banner-03-button').click(function() {
      $(this).find('.banner-icon').toggleClass('open');
      $('.banner-03-clidren').slideToggle();
    });
  });


window.onload = function(){
  var windowSize = $(window).width();

  let scrollElm = document.getElementsByClassName( 'purchaseAchv-content-wrapper' );
  let scrollItem = $('.purchaseAchv-item');

  if(window.matchMedia("(max-width: 375px)").matches){
    for (var i=0; i < scrollElm.length; i++) {
      scrollElm[i].scrollLeft = 198;
    }
  } else if (window.matchMedia("(max-width: 390px)").matches) {
    for (var i=0; i < scrollElm.length; i++) {
      scrollElm[i].scrollLeft = 191;
    }
  } else if (window.matchMedia("(max-width: 430px)").matches) {
    for (var i=0; i < scrollElm.length; i++) {
      scrollElm[i].scrollLeft = 172;
    }
  } else if (window.matchMedia("(max-width: 768px)").matches) {
    for (var i=0; i < scrollElm.length; i++) {
      scrollElm[i].scrollLeft = windowSize-reduceNum;
    }
  }else{ 
    for (var i=0; i < scrollElm.length; i++) {
      scrollElm[i].scrollLeft = 191;
    }
  }
}
