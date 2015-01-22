/*
 * 
 * 
 *
 * Copyright (c) 2015 Brandon Morrison
 * Licensed under the MIT license.
 */
(function ($) {
  //// Collection method.
  $.fn.oembed = function (path, opts) {
    var $elements = this;

    $.get(path, function(data) {
      if (oembedTemplates.hasOwnProperty(data.type)) {
        $elements.each(function (i) {
          $(this).html(oembedTemplates[data.type](data));
        });
      } else {
        throw new Error('Invalid/unsupported oembed type.');
      }
    });

    return this;
  };

  var oembedTemplates = {
    'photo': function(data) {
      return '<img src="' + data.url + '" />';
    },
    'rich': function(data) {
      return data.html;
    }
  };

  $.fn.oembed.foo = function() {};
}(jQuery));
