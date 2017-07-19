window.jQuery = window.$ = require('jquery');
require('velocity-animate');
require('velocity-animate/velocity.ui');
const slick = require('slick-carousel');
// DOM ready
(function() {
    // js support flag
    let doc = document.documentElement;
    doc.classList.remove('no-js');
    doc.classList.add('js');
}());
