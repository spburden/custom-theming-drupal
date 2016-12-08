(function ($, Drupal, window, document) {

  'use strict';

  // To understand behaviors, see https://drupal.org/node/756722#behaviors
  Drupal.behaviors.my_custom_behavior = {
    attach: function (context, settings) {

    $(document).ready(function() {
        $('.header__site-name').addClass('animated wobble');
        $('img').addClass('animated rollIn');
        $("a").click(function(){
            $('p').addClass('animated bounceOutLeft');
            $('img').addClass('animated bounceOutUp');
        });

    });
    }
  };

})(jQuery, Drupal, this, this.document);

// });
//
// $("p").click(function(){
// //$('p').addClass('animated bounceOutLeft');
// $("p").bounceOutLeft();
// });
