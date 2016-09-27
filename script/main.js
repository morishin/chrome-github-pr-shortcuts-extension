(function() {
  'use strict';

  const keyCode1 = "49";
  const keyCode2 = "50";
  const keyCode3 = "51";
  const keyCodeO = "79";

  var ctrlPressed = false;

  document.addEventListener('keydown', function(e) {
     if (e.keyCode == "17") {
       ctrlPressed = true;
     }
  }, false);

  document.addEventListener('keyup', function(e) {
    if (e.keyCode == "17") {
      ctrlPressed = false;
    }

    if (ctrlPressed) {
      var tabs = document.querySelectorAll('.tabnav-tab.js-pjax-history-navigate');
      if (e.keyCode == keyCode1) {
         tabs[0].click();
      } else if (e.keyCode == keyCode2) {
         tabs[1].click();
      } else if (e.keyCode == keyCode3) {
         tabs[2].click();
      } else if (e.keyCode == keyCodeO) {
        document.querySelectorAll('.btn-link.discussion-item-toggle.discussion-item-toggle-closed.js-details-target').forEach(b => { b.click(); });
      }
    }
  }, false);
})();
