var is_focus = false;

function set_icon() {
  if (is_focus) {
    chrome.browserAction.setIcon({path: "focus-on.png"});
  } else {
    chrome.browserAction.setIcon({path: "focus-off.png"});
  }
}

chrome.storage.sync.get('status', function(data) {
  if ('status' in data) {
    is_focus = data.status;
  } else {
    chrome.storage.sync.set({status: is_focus});
    console.log('Settings initilized');
  }

  set_icon();
});

chrome.browserAction.onClicked.addListener(function(tab) {
  is_focus = !is_focus;
  chrome.storage.sync.set({status: is_focus});

  // console.log(is_focus);
  console.log('Settings saved');

  set_icon();
});
