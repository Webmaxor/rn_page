(function($) {
  Drupal.behaviors.rn_page = {
    attach: function (context, settings) {
      $('body').once(function () {
        $('select:visible').selectmenu();
      });
    }
  }
})(jQuery);