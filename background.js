// Set up context menu at install time.
chrome.runtime.onInstalled.addListener(function() {
  var context = "selection";
  var title = "Search DuckDuckGo";
  var id = chrome.contextMenus.create({"title": title, "contexts":[context],"id": "context" + context});  
});

// add click event
chrome.contextMenus.onClicked.addListener(onClickHandler);

// The onClicked callback function.
function onClickHandler(info, tab) {
  var sText = info.selectionText;
  var url = "https://duckduckgo.com/?q=" + encodeURIComponent(sText);  
  
  chrome.tabs.create({ url: url });
  
};
