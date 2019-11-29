function getCurrentTabUrl(callback) {  
  var queryInfo = {
    active: true, 
    currentWindow: true
  };

  chrome.tabs.query(queryInfo, function(tabs) {
    var tab = tabs[0]; 
    var url = tab.url;
    callback(url);
  });
}

function renderURL(statusText) {
  document.getElementById('status').textContent = statusText;
}

document.addEventListener('DOMContentLoaded', function() {
  getCurrentTabUrl(function(url) {
    renderURL(url); 
  });
});

$('.qrcode').html(`<img src="https://api.qrserver.com/v1/create-qr-code/?data=${getCurrentTabUrl()}&amp;size=100x100" alt="" title="" style="width: 80px; height: 80px;" />`);