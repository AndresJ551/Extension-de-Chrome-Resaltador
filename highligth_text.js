chrome.browserAction.onClicked.addListener(function() {
	chrome.tabs.query({
		currentWindow: true,
		active: true
	}, function(tab) {
		console.log(tab);
	});
});

chrome.storage.sync.set({'foo': 'hello', 'bar': 'hi'}, function() {
	console.log('Settings saved');
});
