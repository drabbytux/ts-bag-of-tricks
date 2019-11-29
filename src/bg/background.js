// background.js
var bkg = chrome.extension.getBackgroundPage();
bkg.console.log('background loaded');

chrome.browserAction.onClicked.addListener(function(tab) {
  alert('working?');
});