var BasePage = require("../../shared/BasePage");
var topmost = require("ui/frame").topmost;
var Observable = require("data/observable").Observable;

var SettingsPage = function() {
  this.viewModel.set("blackBackground", false);
};
SettingsPage.prototype = new BasePage();
SettingsPage.prototype.constructor = SettingsPage;

module.exports = new SettingsPage();
