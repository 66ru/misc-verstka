$(function() {
  var $document = $(document),
      $container = $('.news-piece-layout__left .news-piece-layout__section_with-border'),
      $buttons = $container.find('.social-button'),
      $heading = $container.find('.fady-text'),
      npllOffsetTop,
      isCollapsed = false;

  function init() {
    npllOffsetTop = $container.offset().top;

    $document.on('scroll', function() {
      check();
    });

    check();
  }

  function check() {
    if ($document.scrollTop() > npllOffsetTop) {
      if (!isCollapsed) {
        collapse();
        isCollapsed = true;
      }
    } else {
      if (isCollapsed) {
        expand();
        isCollapsed = false;
      }
    }
  }

  function collapse() {
    $buttons.addClass('social-button_compact');
    $heading.addClass('fady-text_out');

    setTimeout(function() {
      $buttons.addClass('social-button_dib');
      $heading.addClass('dn');
    }, 250);
  }

  function expand() {
    $buttons.removeClass('social-button_compact')
      .removeClass('social-button_dib');
    $heading.removeClass('dn')
      .removeClass('fady-text_out');
  }

  if ($('.splash-heading').length) {
    $('.splash-heading__img').on('load', init);
  } else {
    init();
  }
});
