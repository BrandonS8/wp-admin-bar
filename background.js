chrome.browserAction.onClicked.addListener(function() {
  chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, { command: 'click' }, function(
      response
    ) {})
  })
})

chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
  if (message === 'shown') {
    chrome.browserAction.setIcon({ path: 'icon3.png' })
  } else if (message === 'hidden') {
    chrome.browserAction.setIcon({ path: 'icon2.png' })
  } else {
    chrome.browserAction.setIcon({ path: 'icon.png' })
  }
})
chrome.tabs.onActivated.addListener(function(activeInfo) {
  chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, { command: 'tab' }, function(
      response
    ) {})
  })
})
