// chrome.browserAction.onClicked.addListener(function() {
//   console.log('test')
//   var wpbar = document.querySelector('#wpadminbar').style.display
//   var h = document.querySelector('html').style.marginTop
//   if (wpbar != 'none') {
//     wpbar = 'none'
//     h = '0 !important'
//   } else {
//     wpbar = 'initial'
//     h = '35px !important'
//   }
// })
function sendMessage(msg) {
  chrome.runtime.sendMessage(msg)
}
if (document.querySelector('#wpadminbar')) {
  sendMessage('shown')
} else {
  sendMessage('unavailable')
}

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  var wpbar
  var h
  if (document.querySelector('#wpadminbar')) {
    wpbar = document.querySelector('#wpadminbar').style
    h = document.querySelector('html').style
  }
  if (request.command == 'click') {
    if (wpbar) {
      if (wpbar.display == '' || wpbar.display == 'initial') {
        wpbar.display = 'none'
        h.setProperty('margin-top', '0px', 'important')
        sendMessage('hidden')
      } else {
        wpbar.display = 'initial'
        h.setProperty('margin-top', '32px', 'important')
        sendMessage('shown')
      }
    }
  }
  if (request.command == 'tab') {
    if (document.querySelector('#wpadminbar')) {
      if (wpbar.display == '' || wpbar.display == 'initial') {
        sendMessage('shown')
      } else {
        sendMessage('hidden')
      }
    } else {
      sendMessage('unavailable')
    }
  }
  sendResponse({ result: 'success' })
})
