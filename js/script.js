jQuery(function($){
	console.info("JQuery:","Ready");
	/*
	$(document).click(function(e){
		console.info("Click:",e);
	});
	*/
	$(document).mouseup(function(e) {
		console.info("Up",e);
		var sel = window.getSelection().toString();
		console.log(sel);
		if (sel.length > 0){
			var text = e.target.innerHTML;
			var start = text.indexOf(sel);
			var end = start + sel.length;
			var prevText = text.substring(0,start);
			var innerText = text.substring(start,end);
			var nextText = text.substring(end,text.length);
			e.target.innerHTML = prevText +
				'<span class="ResaltadorDeTexto">'+innerText+'</span>'+
				nextText;
		}
	});
});
