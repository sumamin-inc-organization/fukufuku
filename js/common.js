$(function() {
    //よくある質問クリックイベント
    $('.faq-question').click(function() {
     // $(this).toggleClass('open');
      $(this).find('.faq-button').toggleClass('open');
      $(this).next().slideToggle();
    });
  });