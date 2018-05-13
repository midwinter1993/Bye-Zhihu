function block() {
  document.body.innerHTML = `
  <div
    style="font-size: 40px;
    text-align: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);">
    GOOD GOOD STUDY
  </div>`;
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
