var BasePage = require("../../shared/BasePage");
var topmost = require("ui/frame").topmost;

var HomePage = function() {};
HomePage.prototype = new BasePage();
HomePage.prototype.constructor = HomePage;

HomePage.prototype.fun = function() {
  var page = topmost().currentPage;
  var logo = page.getViewById("logo");
  logo.animate({
    rotate: 3600,
    duration: 3000
  });
}

module.exports = new HomePage();
