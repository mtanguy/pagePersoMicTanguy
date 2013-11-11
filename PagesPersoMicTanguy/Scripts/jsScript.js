$(function() {
		$("#tabs").tabs();
		$("#accordion").accordion();
		// C'est ici que nous utiliserons Three.js pour la page d'accueil
		  initCubePicture();
		  animateCubePicture();
		//c' est ici que l' on creer le tableau Addition
		  var tableauAddition =new MathsTables("Tables d\' addition","terme1","+");
		$("#tableauAddition").html(tableauAddition.tHead()+tableauAddition.tBody());

		  
		  
	});