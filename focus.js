function block() {
  document.body.innerHTML='<div style="font-size: 40px; margin: 25% 0; text-align: center; "> GOOD GOOD STUDY </div>';
}

window.onload = function() {
  chrome.storage.sync.get('status', function(data) {
    var is_focus = data.status;
    // console.log(is_focus);

    if (is_focus) {
      block();
    }
  });
}
