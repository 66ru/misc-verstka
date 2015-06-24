$(function() {
  var $document = $(document),
      $buttons = $('.news-piece-layout__left .social-button'),
      $container = $('.news-piece-layout__left'),
      npllOffsetTop;

  function init() {
    npllOffsetTop = $container.offset().top;

    $document.on('scroll', function() {
      check();
    });

    check();
  }

  function check() {
    if ($document.scrollTop() > npllOffsetTop) {
      collapse();
    } else {
      expand();
    }
  }

  function collapse() {
    $buttons.addClass('social-button_compact');
    setTimeout(function() {
      $buttons.addClass('social-button_dib');
    }, 250);
  }

  function expand() {
    $buttons.removeClass('social-button_compact')
      .removeClass('social-button_dib');
  }

  if ($('.splash-heading').length) {
    $('.splash-heading__img').on('load', init);
  } else {
    init();
  }
});
