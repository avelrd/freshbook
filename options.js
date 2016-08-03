// Saves options to chrome.storage.sync.
// Based on https://developer.chrome.com/extensions/optionsV2
function save_options() {
  var normalSetting = document.getElementById('normal').checked;
  var likesSetting = document.getElementById('likes').checked;
  var lifeSetting = document.getElementById('life').checked;
  var friendsSetting = document.getElementById('friends').checked;

  chrome.storage.sync.set({
    normalSetting: normalSetting,
    likesSetting: likesSetting,
    lifeSetting: lifeSetting,
    friendsSetting: friendsSetting
  }, function() {
    // Update status to let user know options were saved.
    var status = document.getElementById('status');
    status.textContent = 'Options saved.';
    setTimeout(function() {
      status.textContent = '';
    }, 750);
  });
}

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restore_options() {
  chrome.storage.sync.get({
    normalSetting: true,
    likesSetting: true,
    lifeSetting: true,
    friendsSetting: true
  }, function(items) {
    document.getElementById('normal').checked = items.normalSetting;
    document.getElementById('likes').checked = items.likesSetting;
    document.getElementById('life').checked = items.lifeSetting;
    document.getElementById('friends').checked = items.friendsSetting;
  });
}
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click',
    save_options);