$(function() {
  var wwidth = $(window).width();

  adjustNamesLenghts();

  $(document).on('resize', function() {
    if (wwidth !== $(window).width()) {
      wwidth = $(window).width();
      adjustNamesLenghts();
    }
  });


  function adjustNamesLenghts() {
    $('.exrate__name-wrap').each(function() {
      var $this = $(this),
        $parent = $this.parents('.exrate__name'),

        longNameClass = 'exrate__name_long';

      if ($parent.width() < $this.width() + 24) {
        $parent.addClass(longNameClass);
      } else {
        $parent.removeClass(longNameClass);
      }
    });
  }
});
