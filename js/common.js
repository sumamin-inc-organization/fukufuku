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