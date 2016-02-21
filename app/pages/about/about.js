var BasePage = require("../../shared/BasePage");

var AboutPage = function() {};
AboutPage.prototype = new BasePage();
AboutPage.prototype.constructor = AboutPage;

module.exports = new AboutPage();
