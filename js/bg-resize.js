/**
  Mobile URL Bar Fix:
  https://stackoverflow.com/questions/24944925/background-image-jumps-when-address-bar-hides-ios-android-mobile-chrome
*/
var bg = $("#bg","page-container");
function resizeBackground() {
    var h = $(window).height();
    bg.height(h);
};