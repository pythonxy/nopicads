$.register({
  rule: {
    host: /^emptypix\.com|fotohosting\.net|overdream\.cz$/,
    path: /^\/image\//,
  },
  ready: function () {
    'use strict';

    var img = $('#full_image');
    $.openImage(img.src);
  },
});

// ex: ts=2 sts=2 sw=2 et
// sublime: tab_size 2; translate_tabs_to_spaces true; detect_indentation false; use_tab_stops true;
// kate: space-indent on; indent-width 2;
