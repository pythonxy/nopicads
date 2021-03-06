$.register({
  rule: {
    host: /^free\.link2dollar\.com$/,
  },
  ready: function () {
    'use strict';

    var l = $.$$('script').find(function (script) {
      var m = script.innerHTML.match(/var rlink = '([^']+)';/);
      if (!m) {
        return _.nop;
      }
      return m[1];
    });

    if (!l) {return;}

    $.openLink(l.payload);
  },
});

// ex: ts=2 sts=2 sw=2 et
// sublime: tab_size 2; translate_tabs_to_spaces true; detect_indentation false; use_tab_stops true;
// kate: space-indent on; indent-width 2;