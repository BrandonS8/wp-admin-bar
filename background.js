// chrome.browserAction.onClicked.addListener(function(tab) {
//   chrome.tabs.executeScript(null, { file: 'toggle.js' })
//   // chrome.runtime.sendMessage({ change: true })
//   chrome.tabs.executeScript({
//     code: `() => {const h = document.querySelector('html')
//     const wpbar = document.querySelector('#wpadminbar')

//     if (!wpbar.style.display === 'none !important') {
//       wpbar.style.display = 'none !important'
//       h.style.marginTop = '0 !important'
//     } else {
//       wpbar.style.display = 'initial'
//       h.style.marginTop = '32px !important'
//     }
//   }
//     `
//   })
// })

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
