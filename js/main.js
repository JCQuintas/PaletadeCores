$(document).ready(function() {




	$(document).on("click", ".btn.saiba-mais", function(event) {
		event.preventDefault();
		var clicado = $(this);
		if ($( ".btn.saiba-mais" ).not( this ).hasClass("aberto")) {

			$( ".btn.saiba-mais.aberto" ).children( "p" ).toggle();
			$( ".wrap.saiba-mais.aberto" ).toggleClass("aberto");
			$( ".btn.saiba-mais.aberto" ).toggleClass("aberto");
			console.log("removeu");
		}
		$( clicado ).toggleClass("aberto");
		$( clicado ).children( "p" ).toggle();
		$( clicado ).next( ".wrap.saiba-mais" ).toggleClass("aberto");
		console.log("add");
	});


	var values = $scope.recursos;
	var log = [];
	angular.forEach(values, function(value, key) {
		c
		this.push(key + ': ' + value);

	}, log);

	console.log( log );

	////////////////ANIMAÇAO HEART/////////////////

	var twitLike = document.getElementById("twitter-like");

	twitLike.addEventListener("click", function(e) {
		e.preventDefault;
		twitLike.classList.toggle("liked");
		twitLike.classList.toggle("twit-animated");
		if (twitLike.classList.contains("liked")) {
			console.log("%c Yay! Someone likes me! ", "background: #222; color: #f66;");
		} else {
			console.log('%c Aww :( Nobody likes me! ', "background: #222; color: #f66;");
		}  
	}, false);
});


////////////Barra de busca//////////////////////
//get url
function getUrlVars() {
	var vars = {};
	var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
		vars[key] = value;
	});
	return vars;
}


