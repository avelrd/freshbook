// this file handles the hiding of elements on facebook. 

setInterval(function(){hidePosts()}, 5000);	

function hidePosts(){
	chrome.storage.sync.get({
    normalSetting: true,
    likesSetting: true,
    lifeSetting: true,
    friendsSetting: true
  	}, function(items) {
		if (items.normalSetting) {
			console.log("hiding normal posts");
			$('div.userContentWrapper').hide(); //todo: make better selector
		}
		if (items.likesSetting) {
			//todo
		}
		if (items.lifeSetting) {
			//todo
		}
		if (items.friendsSetting) {
			//todo
		}
  });
}