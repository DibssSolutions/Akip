"use strict";var modal=$(".js-checkout-modal"),close=$(".js-checkout-modal-close"),open=$(".js-checkout-modal-open");close.click(function(){modal.hide()}),open.click(function(){modal.show()}),$(window).click(function(o){o.target===modal.get(0)&&modal.hide()});
//# sourceMappingURL=main.js.map
