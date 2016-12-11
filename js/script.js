jQuery(function($){
	var className = 'ResaltadorDeTexto';
	var classStart = '<span class="'+className+'">';
	var classEnd = '</span>';
	console.info("JQuery:","Ready");
	/*
	$(document).click(function(e){
		console.info("Click:",e);
	});
	*/
	$(document).mouseup(function(e) {
		console.info("Up",e);
		console.info("Target Class",e.target.className);
		switch(e.target.className){
			case className:
				anterior(e);
			break;
			default:
				nuevo(e);
			break;
		}
	});
	
	function nuevo(e){
		var sel = window.getSelection().toString();
		if (sel.length > 0){ // Se seleccionó algo.
			var text_orig = e.target.innerHTML; // El texto en el que está incluída la selección
			var prevHigh = text_orig.indexOf(classStart); // El inicio de la selección anterior
			var nextHigh = text_orig.indexOf(classEnd); //El fin de la selección anterior

			var text = limpiarClase(text_orig);

			var start = text.indexOf(sel); // El inicio de la selección
			if(prevHigh != -1 && start > prevHigh){ // Si la selección anterior ya marcaba el texto desde antes
				start = prevHigh; // Se mantiene esa selección
			}
			var end = start + sel.length; // El fin de la selección
			if(nextHigh != -1 && end < nextHigh){ // Si la selección anterior ya marcaba texto después
				end = nextHigh; // Se mantiene esa selección
			}
			var prevText = text.substring(0,start); // El texto previo a la selección
			var innerText = text.substring(start,end); // El texto seleccionado
			var nextText = text.substring(end,text.length); //El texto posterior a la selección

			e.target.innerHTML = prevText + classStart + innerText + classEnd + nextText; // El resultado se muestra en el contenedor
		}
	}
	function anterior(e){
		var text_orig = e.target.outerHTML; // El texto al que se le hizo clic
		console.info("Text Origin:",text_orig);
		var text = limpiarClase(text_orig); // El texto al que se le hizo clic sin la clase
		console.info("Text Origin:",text);
		var text_parent = e.target.parentElement.innerHTML; // El texto del contenedor padre
		console.info("Text Parent:",text);
		var start = text_parent.indexOf(text_orig); // El inicio de la selección a la que se le hizo clic
		console.info("Start:",start);
		var end = start + text_orig.length; // El fin de la selección a la que se le hizo clic
		console.info("End:",end);

		var prevText = text_parent.substring(0,start); // El texto previo a la selección
		var nextText = text_parent.substring(end,text_parent.length); //El texto posterior a la selección

		e.target.parentElement.innerHTML = prevText + text + nextText;
	}
	function limpiarClase(t){
		 return t.replace(classStart,"").replace(classEnd,""); //El texto sin la etiqueta de destacado
	}
});
